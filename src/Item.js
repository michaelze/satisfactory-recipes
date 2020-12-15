import {Recipe} from './Recipe';

export class Item {

    constructor(data) {
        this.id = data.id;
        this.name = data.name;
        this.collectedItem = data.recipes.length === 0;
        this.recipes = new Map(data.recipes.map(recipe => [recipe.id, new Recipe(recipe)]));
    }
}
