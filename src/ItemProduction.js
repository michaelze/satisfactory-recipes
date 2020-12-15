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
        this.recipe = null;
        this.building = null;
        this.numberOfProducers = 0;
        this.upstreamItemProductions = [];
    }

    setCollectedByHand() {
        this._updateInternalState(true, null, null, 0, []);
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
        this._updateInternalState(false, recipe, building, numberOfProducers, upstreamItemProductions);
    }

    /**
     * @param {Boolean} collectedByHand
     * @param {String} recipe
     * @param {String} building
     * @param {Number} numberOfProducers
     * @param {Array} upstreamItemProductions
     */
    _updateInternalState(collectedByHand, recipe, building, numberOfProducers, upstreamItemProductions) {
        this.collectedByHand = collectedByHand;
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
