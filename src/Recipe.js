import {Ingredient} from './Ingredient';

export class Recipe {
    constructor(data) {
        this.id = data.id;
        this.name = data.name;
        this.productionTime = data.production_time;
        this.productionsPerMinute = 60 / this.productionTime;
        this.amount = data.amount;
        this.ingredients = data.ingredients.map((ingredient) => new Ingredient(ingredient));
        this.buildings = data.buildings;
    }
}