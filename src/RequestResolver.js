import { ItemProduction, ItemProoduction } from './ItemProduction';
import { ItemRequest } from './ItemRequest';
import {SatisfactoryDataAccess} from   './SatisfactoryDataAccess';
import {uuidv4} from './Tools';

export class RequestResolver {

    /**
     *
     * @param {SatisfactoryDataAccess} data
     */
    constructor(data) {
        this.data = data;
    }

    /**
     *
     * @param {ItemRequest} itemRequest
     * @param {Array} providedItems
     * @returns {ResolveResult}
     */
    resolveItemRequest(itemRequest, providedItems) {

        let item = this.data.items.get(itemRequest.item);
        let recipeId = item.recipes.keys().next().value;

        let recipe = item.recipes.get(recipeId);

        let buildingId = recipe.buildings[0];

        let building = this.data.buildings.get(buildingId);


        let productionsPerMinutePerBuilding = (60 / recipe.productionTime) * building.rate;
        let productionPerMinutePerBuilding = productionsPerMinutePerBuilding * recipe.amount;


        let numberOfProducers = itemRequest.amountPerMinute / productionPerMinutePerBuilding;
        let productionsPerMinute = productionsPerMinutePerBuilding * numberOfProducers;



        let upstreamItemProductions = recipe.ingredients.map(ingredient => {
            let itemRequest = new ItemRequest(ingredient.item, ingredient.amount * productionsPerMinute);
            return this.resolveItemRequest(itemRequest, providedItems);
        });

        let itemProduction = new ItemProduction(uuidv4(), itemRequest, recipeId, buildingId, numberOfProducers, upstreamItemProductions);

        return itemProduction;
    }

    /**
     *
     * @param {ItemProduction} itemProduction
     * @param {Array} providedItems
     */
    updateItemProduction(itemProduction, providedItems) {
        let item = this.data.items.get(itemProduction.itemRequest.item);
        let recipeId = itemProduction.recipe ? itemProduction.recipe : item.recipes.keys().next().value;

        let recipe = item.recipes.get(recipeId);

        let buildingId = recipe.buildings.includes(itemProduction.building) ? itemProduction.building : recipe.buildings[0];

        let building = this.data.buildings.get(buildingId);

        let productionsPerMinutePerBuilding = (60 / recipe.productionTime) * building.rate;
        let productionPerMinutePerBuilding = productionsPerMinutePerBuilding * recipe.amount;

        let numberOfProducers = itemProduction.itemRequest.amountPerMinute / productionPerMinutePerBuilding;
        let productionsPerMinute = productionsPerMinutePerBuilding * numberOfProducers;

        let requiredItems = recipe.ingredients.map(ingredient => ingredient.item);

        // first, remove no longer required item productions
        let upstreamItemProductions = itemProduction.upstreamItemProductions.slice().filter(upstreamItemProduction => requiredItems.includes(upstreamItemProduction.itemRequest.item));


        recipe.ingredients.forEach(ingredient => {
            let upstreamItemProduction = upstreamItemProductions.find(upstreamItemProduction => upstreamItemProduction.itemRequest.item === ingredient.item);
            if (!upstreamItemProduction) {
                let itemRequest = new ItemRequest(ingredient.item, ingredient.amount * productionsPerMinute);
                upstreamItemProduction = this.resolveItemRequest(itemRequest, providedItems);
                upstreamItemProductions.push(upstreamItemProduction);
            } else {
                upstreamItemProduction.itemRequest.amountPerMinute = ingredient.amount * productionsPerMinute;
                this.updateItemProduction(upstreamItemProduction, providedItems);
            }
        });

        itemProduction.recipe = recipeId;
        itemProduction.building = buildingId;
        itemProduction.numberOfProducers = numberOfProducers;
        itemProduction.upstreamItemProductions = upstreamItemProductions;
    }
}
