import { ItemProduction } from '../src/ItemProduction';
import { ItemRequest } from '../src/ItemRequest';
import { calculateItemProduction, findItemProductionById } from '../src/Tools';
import { v4 as uuidv4 } from 'uuid';

let ironOreProductionId = uuidv4();
let ironOreProduction = new ItemProduction(ironOreProductionId, new ItemRequest('iron_ore', 90));
ironOreProduction.setProductionDetails('mining_impure', 'miner_mk1', 3, []);

let ironIngotProductionId = uuidv4();
let ironIngotProduction = new ItemProduction(ironIngotProductionId, new ItemRequest('iron_ingot', 90));
ironIngotProduction.setProductionDetails('iron_ingot', 'smelter', 3, [ironOreProduction]);

let ironPlateProductionId = uuidv4();
let ironPlateProduction = new ItemProduction(ironPlateProductionId, new ItemRequest('iron_plate', 60));
ironPlateProduction.setProductionDetails('iron_plate', 'constructor', 3, [ironIngotProduction]);

let limestoneProductionId = uuidv4();
let limestoneProduction = new ItemProduction(limestoneProductionId, new ItemRequest('limestone', 90));
limestoneProduction.setProductionDetails('mining_impure', 'miner_mk1', 3, []);

let waterProductionId = uuidv4();
let waterProduction = new ItemProduction(waterProductionId, new ItemRequest('water', 75));
waterProduction.setProductionDetails('water', 'water_extractor', 0.63, []);

let concreteProductionId = uuidv4();
let concreteProduction = new ItemProduction(concreteProductionId, new ItemRequest('concrete', 60));
concreteProduction.setProductionDetails('wet_concrete', 'refinery', 0.75, [limestoneProduction, waterProduction]);

describe('calculateItemProduction', () => {
    test('top item production is found by id', () => {
        expect(findItemProductionById(ironOreProduction, ironOreProductionId)).toBe(ironOreProduction);
    });

    test('second item production is found by id', () => {
        expect(findItemProductionById(ironPlateProduction, ironIngotProductionId)).toBe(ironIngotProduction);
    });

    test('third item production is found by id', () => {
        expect(findItemProductionById(ironPlateProduction, ironOreProductionId)).toBe(ironOreProduction);
    });

    test('"left" item production is found by id', () => {
        expect(findItemProductionById(concreteProduction, limestoneProductionId)).toBe(limestoneProduction);
    });

    test('"right" item production is found by id', () => {
        expect(findItemProductionById(concreteProduction, waterProductionId)).toBe(waterProduction);
    });
});
