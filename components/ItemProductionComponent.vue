<template>
    <div>
        <v-row justify="center">
            <v-col cols="auto">
                <v-card elevation="1" width="20em">
                    <v-card-title>{{ formattedRequestedAmountPerMinute }} "{{ item.name }}" per minute</v-card-title>

                    <v-card-text v-if="itemProduction.collectedByHand === true">
                        <v-row>
                            <v-col>
                                This item must be collected by hand
                            </v-col>
                        </v-row>
                    </v-card-text>

                    <v-card-text v-if="itemProduction.collectedByHand === false">
                        <v-row>
                            <v-col>
                                <v-select v-model="itemProduction.recipe" label="Recipe"
                                    :disabled="item.recipes.size == 1"
                                    :items="Array.from(item.recipes.values())" item-value="id" item-text="name"></v-select>
                            </v-col>
                        </v-row>
                        <v-row no-gutters>
                            <v-col>Amount: {{ recipe.amount  }}</v-col>
                        </v-row>
                        <v-row no-gutters>
                            <v-col>Production time: {{ recipe.productionTime  }}, Prod/Minute: {{ recipe.productionsPerMinute }}</v-col>
                        </v-row>
                        <v-row no-gutters>
                            <v-col cols="4">Ingredients:</v-col>
                            <v-col>
                                <div v-for="ingredient in recipe.ingredients">{{ ingredient.amount }}x {{ resolveItemName(ingredient.item) }}</div>
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col cols="8">
                                <v-select v-model="itemProduction.building" label="Building"
                                    :disabled="recipe.buildings.length == 1"
                                    :items="buildings" item-value="id" item-text="name"></v-select>
                            </v-col>
                            <v-col cols="4">
                                <v-text-field disabled :value="'x ' + formattedNumberOfProducers"></v-text-field>
                            </v-col>
                        </v-row>
                        <v-row no-gutters>
                            <v-col>Production rate: {{ building.rate }}</v-col>
                        </v-row>
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>

        <v-row justify="center">
            <v-col v-for="upstreamItemProduction in itemProduction.upstreamItemProductions" v-bind:key="upstreamItemProduction.id" cols="auto">
                <ItemProductionComponent v-bind:itemProduction="upstreamItemProduction"></ItemProductionComponent>
            </v-col>
        </v-row>
    </div>
</template>

<style>
</style>

<script>
import {DATA} from '../src/SatisfactoryDataAccess';
import {ItemProduction} from '../src/ItemProduction';
import {calculateItemProduction} from '../src/Tools';

export default {
    name: 'ItemProductionComponent',

    props: {
        itemProduction: ItemProduction
    },

    data() {
        return {
        };
    },

    watch: {
        'itemProduction.recipe': function() {
            // TODO reference providedItems here
            calculateItemProduction(this.itemProduction);
        },
        'itemProduction.building': function() {
            // TODO reference providedItems here
            calculateItemProduction(this.itemProduction);
        }
    },

    computed: {
        item: function() {
            return DATA.items.get(this.itemProduction.itemRequest.item);
        },
        recipe: function() {
            return this.item.recipes.get(this.itemProduction.recipe);
        },
        building: function() {
            return DATA.buildings.get(this.itemProduction.building);
        },
        buildings: function() {
            return this.recipe.buildings.map(building => {
                return { id: building, name: DATA.buildings.get(building).name}
            });
        },
        formattedRequestedAmountPerMinute: function() {
            return Math.round(this.itemProduction.itemRequest.amountPerMinute * 100) / 100;
        },
        formattedNumberOfProducers: function() {
            return Math.round(this.itemProduction.numberOfProducers * 100) / 100;
        }
    },

    methods: {
        resolveItemName: function(itemId) {
            return DATA.items.get(itemId).name;
        }
    }
}
</script>