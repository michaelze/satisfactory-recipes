<template>
    <div>
        <v-row justify="center">
            <v-col cols="auto">
                <v-card elevation="1" width="20em">
                    <v-card-title>{{ formattedRequestedAmountPerMinute }} "{{ item.name }}" per minute</v-card-title>

                    <v-card-subtitle>
                        Min. conveyor requirement: {{ transportationRequirementInput.conveyor.name }}
                        <span v-if="transportationRequirementInput.capacityExceeded">(exceeded)</span>
                    </v-card-subtitle>

                    <v-card-text v-if="itemProduction.collectedByHand === true">
                        <v-row>
                            <v-col>
                                This item must be collected by hand.
                            </v-col>
                        </v-row>
                    </v-card-text>

                    <v-card-text v-else-if="itemProduction.provided === true">
                        <v-row>
                            <v-col>
                                This item must be provided to the factory.
                            </v-col>
                        </v-row>
                    </v-card-text>

                    <v-card-text v-else>
                        <v-row>
                            <v-col>
                                <v-select v-model="recipeId" label="Recipe"
                                    :disabled="item.recipes.size == 1"
                                    :items="Array.from(item.recipes.values())" item-value="id" item-text="name"></v-select>
                            </v-col>
                        </v-row>
                        <v-row no-gutters>
                            <v-col>Amount: {{ recipe.amount  }}</v-col>
                        </v-row>
                        <v-row no-gutters>
                            <v-col>Production time: {{ recipe.productionTime  }}s; Prod/Minute: {{ recipe.productionsPerMinute }}</v-col>
                        </v-row>
                        <v-row no-gutters v-if="recipe.ingredients.length > 0">
                            <v-col cols="4">Ingredients:</v-col>
                            <v-col>
                                <div v-for="ingredient in recipe.ingredients" v-bind:key="ingredient.item">{{ ingredient.amount }}x <ItemName v-bind:itemId="ingredient.item"></ItemName></div>
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col cols="8">
                                <v-select v-model="buildingId" label="Building"
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
                <ItemProductionComponent v-bind:itemProduction="upstreamItemProduction" v-bind:providedItems="providedItems"></ItemProductionComponent>
            </v-col>
        </v-row>
    </div>
</template>

<style>
</style>

<script>
import { DATA } from '../src/SatisfactoryDataAccess';
import { ItemProduction } from '../src/ItemProduction';
import { calculateItemProduction, calculateTransportationRequirement } from '../src/Tools';

export default {
    name: 'ItemProductionComponent',

    props: {
        itemProduction: ItemProduction,
        providedItems: Array
    },

    data() {
        return {
            itemProductionId: this.itemProduction.id,
            recipeId: this.itemProduction.recipe,
            buildingId: this.itemProduction.building
        };
    },

    watch: {
        recipeId: function() {
            this.$store.commit('global/updateItemProductionRecipeId', {
                itemProductionId: this.itemProductionId,
                recipeId: this.recipeId,
                providedItems: this.providedItems
            });
        },
        buildingId: function() {
            this.$store.commit('global/updateItemProductionBuildingId', {
                itemProductionId: this.itemProductionId,
                buildingId: this.buildingId,
                providedItems: this.providedItems
            });
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
        transportationRequirementInput: function() {
            return calculateTransportationRequirement(this.itemProduction.itemRequest.amountPerMinute);
        },
        formattedRequestedAmountPerMinute: function() {
            return Math.round(this.itemProduction.itemRequest.amountPerMinute * 100) / 100;
        },
        formattedNumberOfProducers: function() {
            return Math.round(this.itemProduction.numberOfProducers * 100) / 100;
        }
    }
}
</script>
