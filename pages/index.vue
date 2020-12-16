<template>
  <v-row>
    <v-col cols="2">
      <v-autocomplete v-model="selectedItem" label="Item" :items="items" item-text="name" item-value="id"></v-autocomplete>
      <v-text-field v-model="requestedAmountPerMinute" label="Amount per minute"></v-text-field>
      <v-autocomplete v-model="providedItems" label="Provided items" :items="items" item-text="name" item-value="id" multiple chips deletable-chips small-chips></v-autocomplete>
    </v-col>
    <v-col>
      <v-row justify="center" align="center">
        <v-col>
        </v-col>
      </v-row>
      <v-row v-if="itemProduction">
        <v-col>
          <ItemProductionComponent v-bind:itemProduction="itemProduction" v-bind:providedItems="providedItems"></ItemProductionComponent>
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>

<script>

import ItemProductionComponent from '../components/ItemProductionComponent';

import {DATA} from '../src/SatisfactoryDataAccess';
import {ItemProduction, createNewItemProduction} from '../src/ItemProduction';
import {ItemRequest} from '../src/ItemRequest';
import {calculateItemProduction} from '../src/Tools';

export default {
  components: {
    ItemProductionComponent
  },
  data() {
    return {
      selectedItem: '',
      requestedAmountPerMinute: 60,
      providedItems: [],
      itemProduction: null,
      buildings: Array.from(DATA.buildings.values()),
      items: Array.from(DATA.items.values())
    };
  },
  watch: {
    selectedItem: function(newValue) {
      if (!newValue || !this.requestedAmountPerMinute) {
        this.itemProduction = null;
      }
      let itemRequest  = new ItemRequest(this.selectedItem, parseFloat(this.requestedAmountPerMinute));
      let itemProduction = createNewItemProduction(itemRequest);
      calculateItemProduction(itemProduction, this.providedItems);
      this.itemProduction = itemProduction;
    },
    requestedAmountPerMinute: function(newValue) {
      this.itemProduction.setRequestedAmountPerMinute = parseFloat(newValue);
      calculateItemProduction(this.itemProduction, this.providedItems);
    },
    providedItems: function(newValue) {
      calculateItemProduction(this.itemProduction, newValue)
    }
  }
}
</script>
