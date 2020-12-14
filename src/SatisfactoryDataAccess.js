import {SatisfactoryData}  from './SatisfactoryData';
import { Building } from './Building';
import { Item } from './Item';

export class SatisfactoryDataAccess {

    constructor() {
        this.buildings = new Map(SatisfactoryData.buildings.map(building => [building.id, new Building(building)]));
        this.items = new Map(SatisfactoryData.items.map(item => [item.id, new Item(item)]));
    }
}

export const DATA = new SatisfactoryDataAccess();