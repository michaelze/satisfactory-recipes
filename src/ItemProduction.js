import { ItemRequest } from "./ItemRequest";

export class ItemProduction {

    /**
     * @param {string} id
     * @param {ItemRequest} itemRequest
     * @param {string} recipe
     * @param {string} building
     * @param {Array} upstreamItemProductions
     */
    constructor(id, itemRequest, recipe, building, numberOfProducers, upstreamItemProductions) {
        this.id = id;
        this.itemRequest = itemRequest;
        this.recipe = recipe;
        this.building = building;
        this.numberOfProducers = numberOfProducers;
        this.upstreamItemProductions = upstreamItemProductions;
    }
}
