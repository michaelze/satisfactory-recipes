import {DATA} from './SatisfactoryDataAccess';
import {ItemProduction, createNewItemProduction} from './ItemProduction';
import {ItemRequest} from './ItemRequest';
import {TransportationRequirement} from './TransportationRequirement';

/**
 *
 * @param {ItemProduction} itemProduction
 * @param {Array} providedItems
 */
export const calculateItemProduction = (itemProduction, providedItems) => {
  let itemId = itemProduction.itemRequest.item;
  let item = DATA.items.get(itemId);

  if (item.collectedItem) {
    itemProduction.setCollectedByHand();
    return;
  }

  if (providedItems.includes(itemId)) {
    itemProduction.setProvided();
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

/**
 * @param {Number} itemsToTransportPerMinute
 */
export const calculateTransportationRequirement = (itemsToTransportPerMinute) => {
  let capacityExceeded = false;
  let minimumRequiredConveyor = DATA.conveyors.find((conveyor) => {
    return conveyor.capacity >= itemsToTransportPerMinute;
  });

  if (!minimumRequiredConveyor) {
    capacityExceeded = true;
    minimumRequiredConveyor = DATA.conveyors[DATA.conveyors.length - 1];
  }

  return new TransportationRequirement(minimumRequiredConveyor, capacityExceeded);
}

/**
 *
 * @param {ItemProduction} itemProduction
 * @param {String} id
 */
export const findItemProductionById = (itemProduction, id) => {
  if (itemProduction.id === id) {
    return itemProduction;
  }

  for (let i = 0; i < itemProduction.upstreamItemProductions.length; i++) {
    let upstreamItemProduction = itemProduction.upstreamItemProductions[i];
    let upstreamItemProductionMatchingById = findItemProductionById(upstreamItemProduction, id);
    if (upstreamItemProductionMatchingById) {
      return upstreamItemProductionMatchingById;
    }
  }

  return null;
}

/**
 *
 * @param {ItemProduction} itemProduction
 */
export const sumUpTotalLeafInput = (itemProduction) => {

  let leafInput = new Map();


  if (itemProduction.upstreamItemProductions.length == 0) {
    // we are a leaf item production
    let itemRequest = itemProduction.itemRequest;
    updateTotalInputMap(leafInput, itemRequest.item, itemRequest.amountPerMinute);
  }


  itemProduction.upstreamItemProductions.forEach(upstreamItemProduction => {
    let upstreamLeafInput = sumUpTotalLeafInput(upstreamItemProduction);
    mergeTotalInputMap(leafInput, upstreamLeafInput);
  });

  return leafInput;
}

const updateTotalInputMap = (map, item, amountPerMinute) => {
  if (!map.has(item)) {
    map.set(item, 0);
  }
  map.set(item, map.get(item) + amountPerMinute);
}

const mergeTotalInputMap = (map, mapToMerge) => {
  for (let iter = mapToMerge.entries(), next = iter.next(); !next.done; next = iter.next()) {
    updateTotalInputMap(map, next.value[0], next.value[1]);
  }
}
