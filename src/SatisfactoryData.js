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
            "id": "assembler",
            "name": "Assembler",
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
            "recipes": []
        },
        {
            "id": "leaves",
            "name": "Leaves",
            "recipes": []
        },
        {
            "id": "mycelia",
            "name": "Mycelia",
            "recipes": []
        },
        {
            "id": "alien_carapace",
            "name": "Alien Carapace",
            "recipes": []
        },
        {
            "id": "alien_organs",
            "name": "Alien Organs",
            "recipes": []
        },
        {
            "id": "biomass",
            "name": "Biomass",
            "recipes": [
                {
                    "id": "biomass_leaves",
                    "name": "Biomass (Leaves)",
                    "production_time": 5,
                    "amount": 5,
                    "ingredients": [
                        {
                            "item": "leaves",
                            "amount": 10
                        }
                    ],
                    "buildings": ["constructor"]
                },
                {
                    "id": "biomass_wood",
                    "name": "Biomass (Wood)",
                    "production_time": 4,
                    "amount": 20,
                    "ingredients": [
                        {
                            "item": "wood",
                            "amount": 4
                        }
                    ],
                    "buildings": ["constructor"]
                },
                {
                    "id": "biomass_mycelia",
                    "name": "Biomass (Mycelia)",
                    "production_time": 4,
                    "amount": 10,
                    "ingredients": [
                        {
                            "item": "mycelia",
                            "amount": 4
                        }
                    ],
                    "buildings": ["constructor"]
                },
                {
                    "id": "biomass_alien_carapace",
                    "name": "Biomass (Alien Carapace)",
                    "production_time": 4,
                    "amount": 100,
                    "ingredients": [
                        {
                            "item": "alien_carapace",
                            "amount": 1
                        }
                    ],
                    "buildings": ["constructor"]
                },
                {
                    "id": "biomass_alien_organs",
                    "name": "Biomass (Alien Organs)",
                    "production_time": 8,
                    "amount": 200,
                    "ingredients": [
                        {
                            "item": "alien_organs",
                            "amount": 1
                        }
                    ],
                    "buildings": ["constructor"]
                }
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
            "id": "limestone",
            "name": "Limestone",
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
            "id": "concrete",
            "name": "Concrete",
            "recipes": [
                {
                    "id": "concrete",
                    "name": "Concrete",
                    "production_time": 4,
                    "amount": 1,
                    "ingredients": [
                        {
                            "item": "limestone",
                            "amount": 3
                        }
                    ],
                    "buildings": ["constructor"]
                },
                // TODO add rubber concrete
                {
                    "id": "wet_concrete",
                    "name": "Wet Concrete",
                    "production_time": 3,
                    "amount": 4,
                    "ingredients": [
                        {
                            "item": "limestone",
                            "amount": 6
                        },
                        {
                            "item": "water",
                            "amount": 5
                        }
                    ],
                    "buildings": ["refinery"]
                }
                // TODO add fine concrete
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
            "id": "wire",
            "name": "Wire",
            "recipes": [
                {
                    "id": "wire",
                    "name": "Wire",
                    "production_time": 4,
                    "amount": 2,
                    "ingredients": [
                        {
                            "item": "copper_ingot",
                            "amount": 1
                        }
                    ],
                    "buildings": ["constructor"]
                },
                // TODO add fused wire
                {
                    "id": "iron_wire",
                    "name": "Iron Wire",
                    "production_time": 24,
                    "amount": 9,
                    "ingredients": [
                        {
                            "item": "iron_ingot",
                            "amount": 5
                        }
                    ],
                    "buildings": ["constructor"]
                }
                // TODO add caterium wire
            ]
        },
        {
            "id": "cable",
            "name": "Cable",
            "recipes": [
                {
                    "id": "cable",
                    "name": "Cable",
                    "production_time": 2,
                    "amount": 1,
                    "ingredients": [
                        {
                            "item": "wire",
                            "amount": 2
                        }
                    ],
                    "buildings": ["constructor"]
                }
                // TODO add coated cable
                // TODO add rubber cable
                // TODO add quickwire cable
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
        },
        {
            "id": "reinforced_iron_plate",
            "name": "Reinforced Iron Plate",
            "recipes": [
                {
                    "id": "reinforced_iron_plate",
                    "name": "Reinforced Iron Plate",
                    "production_time": 12,
                    "amount": 1,
                    "ingredients": [
                        {
                            "item": "iron_plate",
                            "amount": 6
                        },
                        {
                            "item": "screw",
                            "amount": 12
                        }
                    ],
                    "buildings": ["assembler"]
                },
                // TODO add adhered iron plate
                {
                    "id": "bolted_iron_plate",
                    "name": "Bolted Iron Plate",
                    "production_time": 12,
                    "amount": 3,
                    "ingredients": [
                        {
                            "item": "iron_plate",
                            "amount": 18
                        },
                        {
                            "item": "screw",
                            "amount": 50
                        }
                    ],
                    "buildings": ["assembler"]
                },
                {
                    "id": "stitched_iron_plate",
                    "name": "Stitched Iron Plate",
                    "production_time": 32,
                    "amount": 3,
                    "ingredients": [
                        {
                            "item": "iron_plate",
                            "amount": 10
                        },
                        {
                            "item": "wire",
                            "amount": 20
                        }
                    ],
                    "buildings": ["assembler"]
                }
            ]
        },
        {
            "id": "modular_frame",
            "name": "Modular Frame",
            "recipes": [
                {
                    "id": "modular_frame",
                    "name": "Modular Frame",
                    "production_time": 60,
                    "amount": 2,
                    "ingredients": [
                        {
                            "item": "reinforced_iron_plate",
                            "amount": 3
                        },
                        {
                            "item": "iron_rod",
                            "amount": 12
                        }
                    ],
                    "buildings": ["assembler"]
                },
                {
                    "id": "bolted_frame",
                    "name": "Bolted Frame",
                    "production_time": 24,
                    "amount": 2,
                    "ingredients": [
                        {
                            "item": "reinforced_iron_plate",
                            "amount": 3
                        },
                        {
                            "item": "screw",
                            "amount": 56
                        }
                    ],
                    "buildings": ["assembler"]
                },
                {
                    "id": "steeled_frame",
                    "name": "Steeled Frame",
                    "production_time": 60,
                    "amount": 3,
                    "ingredients": [
                        {
                            "item": "reinforced_iron_plate",
                            "amount": 2
                        },
                        {
                            "item": "steel_pipe",
                            "amount": 10
                        }
                    ],
                    "buildings": ["assembler"]
                }
            ]
        },
        {
            "id": "stator",
            "name": "Stator",
            "recipes": [
                {
                    "id": "stator",
                    "name": "Stator",
                    "production_time": 12,
                    "amount": 1,
                    "ingredients": [
                        {
                            "item": "steel_pipe",
                            "amount": 3
                        },
                        {
                            "item": "wire",
                            "amount": 8
                        }
                    ],
                    "buildings": ["assembler"]
                }
                // TODO add quickwire stator
            ]
        },
        {
            "id": "automated_wiring",
            "name": "Automated Wiring",
            "recipes": [
                {
                    "id": "automated_wiring",
                    "name": "Automated Wiring",
                    "production_time": 24,
                    "amount": 1,
                    "ingredients": [
                        {
                            "item": "stator",
                            "amount": 1
                        },
                        {
                            "item": "cable",
                            "amount": 20
                        }
                    ],
                    "buildings": ["assembler"]
                }
                // TODO add high-speed wiring
            ]
        }
    ]
};