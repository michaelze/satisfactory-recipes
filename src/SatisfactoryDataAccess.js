import { Building } from './Building';
import { Conveyor } from './Conveyor';
import { Item } from './Item';
import { SatisfactoryData }  from './SatisfactoryData';

export class SatisfactoryDataAccess {

    constructor() {
        this.conveyors = SatisfactoryData.conveyors.map(conveyor => new Conveyor(conveyor));
        this.buildings = new Map(SatisfactoryData.buildings.map(building => [building.id, new Building(building)]));
        this.items = new Map(SatisfactoryData.items.map(item => [item.id, new Item(item)]));
    }
}

export const DATA = new SatisfactoryDataAccess();