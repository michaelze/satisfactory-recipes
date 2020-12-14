

<template>
  <div>
    <v-row justify="center" align="center">
      <v-col>
        <v-select v-model="selectedItem" :items="items" item-text="name" item-value="id"></v-select>
        <v-text-field v-model="requestedAmountPerMinute" label="Amount per minute"></v-text-field>
      </v-col>
    </v-row>
    <v-row v-if="itemProduction">
      <v-col>
        <ItemProductionComponent v-bind:itemProduction="itemProduction"></ItemProductionComponent>
      </v-col>
    </v-row>
  </div>
</template>

<script>

import ItemProductionComponent from '../components/ItemProductionComponent';

import {DATA} from '../src/SatisfactoryDataAccess';
import {ItemProduction} from '../src/ItemProduction';
import {ItemRequest} from '../src/ItemRequest';
import {RequestResolver} from '../src/RequestResolver';
import {uuidv4} from '../src/Tools';

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
  methods: {
    resolveItemRequest: function() {
      let itemRequest = new ItemRequest(this.selectedItem, parseFloat(this.requestedAmountPerMinute));

      let requestResolver = new RequestResolver(DATA);

      let itemProduction = requestResolver.resolveItemRequest(itemRequest, []);
      this.itemProduction = itemProduction;
    }
  },
  watch: {
    selectedItem: function(newValue) {
      if (!newValue || !this.requestedAmountPerMinute) {
        this.itemProduction = null;
      }
      let itemRequest  = new ItemRequest(this.selectedItem, parseFloat(this.requestedAmountPerMinute));
      let itemProduction = new ItemProduction(uuidv4(), itemRequest, null, null, 0, []);
      let requestResolver = new RequestResolver(DATA);
      requestResolver.updateItemProduction(itemProduction);
      this.itemProduction = itemProduction;
    },
    requestedAmountPerMinute: function(newValue) {
      this.itemProduction.itemRequest.amountPerMinute = parseFloat(newValue);
      let requestResolver = new RequestResolver(DATA);
      requestResolver.updateItemProduction(this.itemProduction);
    }
  }
}
</script>
