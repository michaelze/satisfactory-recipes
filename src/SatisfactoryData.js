// use json formatting here for easier import/export from/to other tools
export const SatisfactoryData = {

    "conveyors": [
        {
            "id": "mk1",
            "name": "Mk.1",
            "capacity": "60"
        },
        {
            "id": "mk2",
            "name": "Mk.2",
            "capacity": "120"
        },
        {
            "id": "mk3",
            "name": "Mk.3",
            "capacity": "270"
        },
        {
            "id": "mk4",
            "name": "Mk.4",
            "capacity": "480"
        },
        {
            "id": "mk5",
            "name": "Mk.5",
            "capacity": "780"
        }
    ],

    "buildings": [
        {
            "id": "miner_mk1",
            "name": "Miner MK1",
            "rate": 1
        },
        {
            "id": "miner_mk2",
            "name": "Miner MK2",
            "rate": 2
        },
        {
            "id": "miner_mk3",
            "name": "Miner MK3",
            "rate": 4
        },
        {
            "id": "smelter",
            "name": "Smelter",
            "rate": 1
        },
        {
            "id": "refinery",
            "name": "Refinery",
            "rate": 1
        },
        {
            "id": "foundry",
            "name": "Foundry",
            "rate": 1
        },
        {
            "id": "constructor",
            "name": "Constructor",
            "rate": 1
        },
        {
            "id": "water_extractor",
            "name": "Water Extractor",
            "rate": 1
        }
    ],

    "items": [
        {
            "id": "wood",
            "name": "Wood",
            "recipes": [
            ]
        },
        {
            "id": "iron_ore",
            "name": "Iron Ore",
            "recipes": [
                {
                    "id": "mining_impure",
                    "name": "Impure Mining",
                    "production_time": 2,
                    "amount": 1,
                    "ingredients": [],
                    "buildings": ["miner_mk1", "miner_mk2", "miner_mk3"]
                },
                {
                    "id": "mining_normal",
                    "name": "Normal Mining",
                    "production_time": 1,
                    "amount": 1,
                    "ingredients": [],
                    "buildings": ["miner_mk1", "miner_mk2", "miner_mk3"]
                },
                {
                    "id": "mining_pure",
                    "name": "Pure Mining",
                    "production_time": 0.5,
                    "amount": 1,
                    "ingredients": [],
                    "buildings": ["miner_mk1", "miner_mk2", "miner_mk3"]
                }
            ]
        },
        {
            "id": "copper_ore",
            "name": "Copper Ore",
            "recipes": [
                {
                    "id": "mining_impure",
                    "name": "Impure Mining",
                    "production_time": 2,
                    "amount": 1,
                    "ingredients": [],
                    "buildings": ["miner_mk1", "miner_mk2", "miner_mk3"]
                },
                {
                    "id": "mining_normal",
                    "name": "Normal Mining",
                    "production_time": 1,
                    "amount": 1,
                    "ingredients": [],
                    "buildings": ["miner_mk1", "miner_mk2", "miner_mk3"]
                },
                {
                    "id": "mining_pure",
                    "name": "Pure Mining",
                    "production_time": 0.5,
                    "amount": 1,
                    "ingredients": [],
                    "buildings": ["miner_mk1", "miner_mk2", "miner_mk3"]
                }
            ]
        },
        {
            "id": "coal",
            "name": "Coal",
            "recipes": [
                {
                    "id": "mining_impure",
                    "name": "Impure Mining",
                    "production_time": 2,
                    "amount": 1,
                    "ingredients": [],
                    "buildings": ["miner_mk1", "miner_mk2", "miner_mk3"]
                },
                {
                    "id": "mining_normal",
                    "name": "Normal Mining",
                    "production_time": 1,
                    "amount": 1,
                    "ingredients": [],
                    "buildings": ["miner_mk1", "miner_mk2", "miner_mk3"]
                },
                {
                    "id": "mining_pure",
                    "name": "Pure Mining",
                    "production_time": 0.5,
                    "amount": 1,
                    "ingredients": [],
                    "buildings": ["miner_mk1", "miner_mk2", "miner_mk3"]
                },
                {
                    "id": "biocoal",
                    "name": "Biocoal",
                    "production_time": 8,
                    "amount": 6,
                    "ingredients": [
                        {
                            "item": "biomass",
                            "amount": 5
                        }
                    ],
                    "buildings": ["constructor"]
                },
                {
                    "id": "charcoal",
                    "name": "Charcoal",
                    "production_time": 4,
                    "amount": 10,
                    "ingredients": [
                        {
                            "item": "wood",
                            "amount": 1
                        }
                    ],
                    "buildings": ["constructor"]
                }
            ]
        },
        {
            "id": "iron_ingot",
            "name": "Iron Ingot",
            "recipes": [
                {
                    "id": "iron_ingot",
                    "name": "Iron Ingot",
                    "production_time": 2,
                    "amount": 1,
                    "ingredients": [
                        {
                            "item": "iron_ore",
                            "amount": 1
                        }
                    ],
                    "buildings": ["smelter"]
                },
                {
                    "id": "iron_ingot_pure",
                    "name": "Pure Iron Ingot",
                    "production_time": 12,
                    "amount": 13,
                    "ingredients": [
                        {
                            "item": "iron_ore",
                            "amount": 7
                        },
                        {
                            "item": "water",
                            "amount": 4
                        }
                    ],
                    "buildings": ["refinery"]
                },
                {
                    "id": "iron_ingot_alloy",
                    "name": "Iron Alloy Ingot",
                    "production_time": 6,
                    "amount": 5,
                    "ingredients": [
                        {
                            "item": "iron_ore",
                            "amount": 2
                        },
                        {
                            "item": "copper_ore",
                            "amount": 2
                        }
                    ],
                    "buildings": ["foundry"]
                }
            ]
        },
        {
            "id": "copper_ingot",
            "name": "Copper Ingot",
            "recipes": [
                {
                    "id": "copper_ingot",
                    "name": "Copper Ingot",
                    "production_time": 2,
                    "amount": 1,
                    "ingredients": [
                        {
                            "item": "copper_ore",
                            "amount": 1
                        }
                    ],
                    "buildings": ["smelter"]
                },
                {
                    "id": "copper_ingot_pure",
                    "name": "Pure Copper Ingot",
                    "production_time": 24,
                    "amount": 15,
                    "ingredients": [
                        {
                            "item": "copper_ore",
                            "amount": 6
                        },
                        {
                            "item": "water",
                            "amount": 4
                        }
                    ],
                    "buildings": ["refinery"]
                },
                {
                    "id": "copper_ingot_alloy",
                    "name": "Iron Alloy Ingot",
                    "production_time": 12,
                    "amount": 20,
                    "ingredients": [
                        {
                            "item": "copper_ore",
                            "amount": 10
                        },
                        {
                            "item": "iron_ore",
                            "amount": 5
                        }
                    ],
                    "buildings": ["foundry"]
                }
            ]
        },
        {
            "id": "iron_plate",
            "name": "Iron Plate",
            "recipes": [
                {
                    "id": "iron_plate",
                    "name": "Iron Plate",
                    "production_time": 6,
                    "amount": 2,
                    "ingredients": [
                        {
                            "item": "iron_ingot",
                            "amount": 3
                        }
                    ],
                    "buildings": ["constructor"]
                }
            ]
        },
        {
            "id": "iron_rod",
            "name": "Iron Rod",
            "recipes": [
                {
                    "id": "iron_rod",
                    "name": "Iron Rod",
                    "production_time": 4,
                    "amount": 1,
                    "ingredients": [
                        {
                            "item": "iron_ingot",
                            "amount": 1
                        }
                    ],
                    "buildings": ["constructor"]
                },
                {
                    "id": "steel_rod",
                    "name": "Steel Rod",
                    "production_time": 5,
                    "amount": 4,
                    "ingredients": [
                        {
                            "item": "steel_ingot",
                            "amount": 1
                        }
                    ],
                    "buildings": ["constructor"]
                }
            ]
        },
        {
            "id": "screw",
            "name": "Screw",
            "recipes": [
                {
                    "id": "screw",
                    "name": "Screw",
                    "production_time": 6,
                    "amount": 4,
                    "ingredients": [
                        {
                            "item": "iron_rod",
                            "amount": 1
                        }
                    ],
                    "buildings": ["constructor"]
                },
                {
                    "id": "casted_screw",
                    "name": "Casted Screw",
                    "production_time": 24,
                    "amount": 20,
                    "ingredients": [
                        {
                            "item": "iron_ingot",
                            "amount": 5
                        }
                    ],
                    "buildings": ["constructor"]
                },
                {
                    "id": "steel_screw",
                    "name": "Steel Screw",
                    "production_time": 12,
                    "amount": 52,
                    "ingredients": [
                        {
                            "item": "steel_beam",
                            "amount": 1
                        }
                    ],
                    "buildings": ["constructor"]
                }
            ]
        },
        {
            "id": "steel_ingot",
            "name": "Steel Ingot",
            "recipes": [
                {
                    "id": "steel_ingot",
                    "name": "Steel Ingot",
                    "production_time": 4,
                    "amount": 3,
                    "ingredients": [
                        {
                            "item": "iron_ore",
                            "amount": 3
                        },
                        {
                            "item": "coal",
                            "amount": 3
                        }
                    ],
                    "buildings": ["foundry"]
                }
            ]
        },
        {
            "id": "steel_beam",
            "name": "Steel Beam",
            "recipes": [
                {
                    "id": "steel_beam",
                    "name": "Steel Beam",
                    "production_time": 4,
                    "amount": 1,
                    "ingredients": [
                        {
                            "item": "steel_ingot",
                            "amount": 4
                        }
                    ],
                    "buildings": ["foundry"]
                }
            ]
        },
        {
            "id": "steel_pipe",
            "name": "Steel Pipe",
            "recipes": [
                {
                    "id": "steel_pipe",
                    "name": "Steel Pipe",
                    "production_time": 6,
                    "amount": 2,
                    "ingredients": [
                        {
                            "item": "steel_ingot",
                            "amount": 3
                        }
                    ],
                    "buildings": ["foundry"]
                }
            ]
        },
        {
            "id": "water",
            "name": "Water",
            "recipes": [
                {
                    "id": "water",
                    "name": "Water",
                    "production_time": 1,
                    "amount": 2,
                    "ingredients": [],
                    "buildings": ["water_extractor"]
                }
            ]
        }
    ]
};