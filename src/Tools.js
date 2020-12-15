import {ItemProduction, createNewItemProduction} from './ItemProduction';
import {ItemRequest} from './ItemRequest';
import {DATA} from './SatisfactoryDataAccess';

export const uuidv4 = () => {
    return ([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g, c =>
      (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
    );
}

/**
 *
 * @param {ItemProduction} itemProduction
 * @param {Array} providedItems
 */
export const calculateItemProduction = (itemProduction, providedItems) => {
  let item = DATA.items.get(itemProduction.itemRequest.item);

  if (item.collectedItem) {
    itemProduction.setCollectedByHand();
    return;
  }

  // get recipeId from itemProduction or from first recipe of item.
  let recipeId = itemProduction.recipe || item.recipes.keys().next().value;
  let recipe = item.recipes.get(recipeId);

  // get buildingId from itemProduction or, if that buildingId is not included in the recipe, get the first building of the recipe
  let buildingId = recipe.buildings.includes(itemProduction.building) ? itemProduction.building : recipe.buildings[0];
  let building = DATA.buildings.get(buildingId);

  let productionsPerMinutePerBuilding = (60 / recipe.productionTime) * building.rate;
  let productionPerMinutePerBuilding = productionsPerMinutePerBuilding * recipe.amount;

  let numberOfProducers = itemProduction.itemRequest.amountPerMinute / productionPerMinutePerBuilding;
  let productionsPerMinute = productionsPerMinutePerBuilding * numberOfProducers;

  let requiredItems = recipe.ingredients.map(ingredient => ingredient.item);

  // first, remove no longer required item productions
  let upstreamItemProductions = itemProduction.upstreamItemProductions.slice().filter(upstreamItemProduction => requiredItems.includes(upstreamItemProduction.itemRequest.item));

  recipe.ingredients.forEach(ingredient => {
      let upstreamItemProduction = upstreamItemProductions.find(upstreamItemProduction => upstreamItemProduction.itemRequest.item === ingredient.item);
      let requestedAmountPerMinute = ingredient.amount * productionsPerMinute;
      if (!upstreamItemProduction) {
          let itemRequest = new ItemRequest(ingredient.item, requestedAmountPerMinute);
          upstreamItemProduction = createNewItemProduction(itemRequest);
          calculateItemProduction(upstreamItemProduction, providedItems);
          upstreamItemProductions.push(upstreamItemProduction);
      } else {
          upstreamItemProduction.setRequestedAmountPerMinute(requestedAmountPerMinute);
          calculateItemProduction(upstreamItemProduction, providedItems);
      }
  });

  // finally update itemProduction's details
  itemProduction.setProductionDetails(recipeId, buildingId, numberOfProducers, upstreamItemProductions);
}
