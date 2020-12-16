import { ItemRequest } from "./ItemRequest";
import {uuidv4} from './Tools';

export class ItemProduction {

    /**
     * @param {String} id
     * @param {ItemRequest} itemRequest
     */
    constructor(id, itemRequest) {
        this.id = id;
        this.itemRequest = itemRequest;
        this.collectedByHand = false;
        this.provided = false;
        this.recipe = null;
        this.building = null;
        this.numberOfProducers = 0;
        this.upstreamItemProductions = [];
    }

    setCollectedByHand() {
        this._updateInternalState(true, false, null, null, 0, []);
    }

    setProvided() {
        this._updateInternalState(this.collectedByHand, true, null, null, 0, []);
    }

    /**
     *
     * @param {Number} requestedAmountPerMinute
     */
    setRequestedAmountPerMinute(requestedAmountPerMinute) {
        this.itemRequest.amountPerMinute = requestedAmountPerMinute;
    }

    /**
     * @param {String} recipe
     * @param {String} building
     * @param {Number} numberOfProducers
     * @param {Array} upstreamItemProductions
     */
    setProductionDetails(recipe, building, numberOfProducers, upstreamItemProductions) {
        this._updateInternalState(false, false, recipe, building, numberOfProducers, upstreamItemProductions);
    }

    /**
     * @param {Boolean} collectedByHand
     * @param {String} recipe
     * @param {String} building
     * @param {Number} numberOfProducers
     * @param {Array} upstreamItemProductions
     */
    _updateInternalState(collectedByHand, provided, recipe, building, numberOfProducers, upstreamItemProductions) {
        this.collectedByHand = collectedByHand;
        this.provided = provided;
        this.recipe = recipe;
        this.building = building;
        this.numberOfProducers = numberOfProducers;
        this.upstreamItemProductions = upstreamItemProductions;
    }
}

/**
 *
 * @param {ItemRequest} itemRequest
 */
export const createNewItemProduction = (itemRequest) => {
    return new ItemProduction(uuidv4(), itemRequest);
}
