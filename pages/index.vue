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
          <ItemProductionComponent v-bind:itemProduction="itemProduction" v-bind:providedItems="providedItems" v-bind:key="itemProduction.id"></ItemProductionComponent>
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
      providedItems: ['iron_ingot', 'copper_ingot', 'steel_ingot'],
      items: Array.from(DATA.items.values()).sort((left, right) => {
        let leftName = left.name.toUpperCase();
        let rightName = right.name.toUpperCase();
        if (leftName < rightName) {
          return -1;
        }
        if (leftName > rightName) {
          return 1;
        }
        return 0;
      })
    };
  },
  computed: {
    itemProduction: function() {
      return this.$store.state.global.itemProduction;
    }
  },
  watch: {
    selectedItem: function() {
      this.$store.commit('global/initItemProduction', {
        item: this.selectedItem,
        requestedAmountPerMinute: this.requestedAmountPerMinute,
        providedItems: this.providedItems
      });
    },
    requestedAmountPerMinute: function() {
      this.$store.commit('global/updateItemProduction', {
        requestedAmountPerMinute: parseFloat(this.requestedAmountPerMinute),
        providedItems: this.providedItems
      });
    },
    providedItems: function() {
      this.$store.commit('global/updateItemProduction', {
        requestedAmountPerMinute: parseFloat(this.requestedAmountPerMinute),
        providedItems: this.providedItems
      });
    }
  }
}
</script>
