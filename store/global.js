import { ItemRequest } from '../src/ItemRequest';
import { createNewItemProduction } from '../src/ItemProduction';
import { calculateItemProduction, findItemProductionById } from '../src/Tools';

export const state = () => ({
    itemProduction: null
});

export const mutations = {
    resetItemProduction(state) {
        state.itemProduction = null;
    },

    initItemProduction(state, payload) {
        if (!payload.item || !payload.requestedAmountPerMinute) {
            // TODO can we call resetItemProduction here?
            state.itemProduction = null;
        }
        let itemRequest  = new ItemRequest(payload.item, parseFloat(payload.requestedAmountPerMinute));
        let itemProduction = createNewItemProduction(itemRequest);
        calculateItemProduction(itemProduction, payload.providedItems);
        state.itemProduction = null;
        state.itemProduction = itemProduction;
    },

    updateItemProduction(state, payload) {
        if (state.itemProduction) {
            state.itemProduction.itemRequest.amountPerMinute = payload.requestedAmountPerMinute;
            calculateItemProduction(state.itemProduction, payload.providedItems);
        }
    },

    updateItemProductionRecipeId(state, payload) {
        let itemProductionToUpdate = findItemProductionById(state.itemProduction, payload.itemProductionId);
        itemProductionToUpdate.recipe = payload.recipeId;
        calculateItemProduction(itemProductionToUpdate, payload.providedItems);
    },

    updateItemProductionBuildingId(state, payload) {
        let itemProductionToUpdate = findItemProductionById(state.itemProduction, payload.itemProductionId);
        itemProductionToUpdate.building = payload.buildingId;
        calculateItemProduction(itemProductionToUpdate, payload.providedItems);
    }
};
