<template>
  <v-row>
    <v-col cols="2">
      <v-select v-model="selectedItem" label="Item" :items="items" item-text="name" item-value="id"></v-select>
      <v-text-field v-model="requestedAmountPerMinute" label="Amount per minute"></v-text-field>
    </v-col>
    <v-col>
      <v-row justify="center" align="center">
        <v-col>
        </v-col>
      </v-row>
      <v-row v-if="itemProduction">
        <v-col>
          <ItemProductionComponent v-bind:itemProduction="itemProduction"></ItemProductionComponent>
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
      calculateItemProduction(itemProduction);
      this.itemProduction = itemProduction;
    },
    requestedAmountPerMinute: function(newValue) {
      this.itemProduction.setRequestedAmountPerMinute = parseFloat(newValue);
      calculateItemProduction(this.itemProduction);
    }
  }
}
</script>
