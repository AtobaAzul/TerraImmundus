ItemEvents.modification((event) => {
    event.modify('minecraft:enchanted_book', (item) => {
        item.maxStackSize = 64;
    });
    event.modify('quark:ancient_tome', (item) => {
        item.maxStackSize = 64;
    });

    event.modify('sculkhorde:blade_of_purity', (item) => {
        item.attackSpeed = 1.6 - 4;
    });

    let anthralite_damage_map = {
        greatsword: 11,
        halberd: 7,
        hammer: 9,
        katana: 5,
        rapier: 4,
        scythe: 8,
        warglaive: 4,
        mace: 8,
        spear: 5,
    };

    for (let [type, damage] of Object.entries(
        anthralite_damage_map,
    )) {
        event.modify(
            `kubejs:anthralite_${type}`,
            (item) => {
                item.setAttackDamage(damage + 0.5); //-1 becuase for some reason the actual damage number in-game is 1 higher.
            },
        );


        event.modify(`kubejs:tin_${type}`, (item) => {
            item.setAttackDamage(damage - 1 + 0.5); //-1 becuase for some reason the actual damage number in-game is 1 higher.
        });
    }

    event.modify('wither_skeleton_skull', (item) => {
        item.fireResistant = true;
    });

    event.modify('kubejs:purity_sap_bucket', (item) => {
        item.setCraftingRemainder('minecraft:bucket');
    });

    event.modify(`kubejs:tin_sword`, (item) => {
        item.setAttackDamage(6 - 1 + 0.5); //-1 becuase for some reason the actual damage number in-game is 1 higher.
        item.setAttackSpeed(-2.2);
    });

    event.modify(`kubejs:tin_axe`, (item) => {
        item.setAttackDamage(9 - 1); //-1 becuase for some reason the actual damage number in-game is 1 higher.
    });


    UNCOMMON_ITEMS.forEach((_item) => {
        event.modify(_item, (item) => {
            item.rarity = 'uncommon';
        });
    });

    SCULK_ITEMS.forEach((_item) => {
        event.modify(_item, (item) => {
            item.rarity = 'scguns.deep_dark';
        });
    });

    RARE_ITEMS.forEach((_item) => {
        event.modify(_item, (item) => {
            item.rarity = 'rare';
        });
    });

    EPIC_ITEMS.forEach((_item) => {
        event.modify(_item, (item) => {
            item.rarity = 'epic';
        });
    });

    SCORCHED_RARITY.forEach((_item) => {
        event.modify(_item, (item) => {
            item.rarity = 'scguns.scorched';
        });
    });

    event.modify('minecraft:golden_apple', (item) => {
        item.foodProperties = (food) => {
            food.effect('minecraft:absorption', 20 * 60 * 2, 0, 1);
        };
    });

    event.modify('minecraft:golden_carrot', (item) => {
        item.foodProperties = (food) => {
            food.effect('minecraft:night_vision', 20 * 60 * 2, 0, 1);
        };
    });

    //anthralite rework
    const anthralite_tools = [
        'scguns:anthralite_pickaxe',
        'scguns:anthralite_axe',
        'scguns:anthralite_shovel',
        'scguns:anthralite_hoe',
        'scguns:anthralite_sword',
        'scguns:anthralite_knife',
    ];

    const armor_rebalance = {
        'scguns:anthralite_respirator': {
            armorKnockbackResistance: 0.05,
            armorProtection: 2,
            armorToughness: 0,
            maxDamage: 500,
        },
        'scguns:anthralite_chestplate': {
            armorKnockbackResistance: 0.05,
            armorProtection: 8,
            armorToughness: 0,
            maxDamage: 800,
        },
        'scguns:anthralite_leggings': {
            armorKnockbackResistance: 0.05,
            armorProtection: 6,
            armorToughness: 0,
            maxDamage: 700,
        },
        'scguns:anthralite_boots': {
            armorKnockbackResistance: 0.05,
            armorProtection: 3,
            armorToughness: 0,
            maxDamage: 400,
        },
        'scguns:anthralite_helmet': {
            armorKnockbackResistance: 0.05,
            armorProtection: 3,
            armorToughness: 0,
            maxDamage: 500,
        },
        'chainmail_helmet': {
            maxDamage: 500,
        },
        'chainmail_chestplate': {
            maxDamage: 800,
            armorProtection: 6
        },
        'chaimmail_leggings': {
            maxDamage: 700,
            armorProtection: 5

        },
        'chainmail_boots': {
            maxDamage: 400,
            armorProtection: 2
        },
        'scguns:adrien_helm': {
            maxDamage: 500 * 1.2,
            armorProtection: 3,
            armorKnockbackResistance: 0.025
        },
        'scguns:adrien_chestplate': {
            maxDamage: 800 * 1.2,
            armorProtection: 7,
            armorKnockbackResistance: 0.025
        },
        'scguns:adrien_leggings': {
            maxDamage: 700 * 1.2,
            armorProtection: 6,
            armorKnockbackResistance: 0.025
        },
        'scguns:adrien_boots': {
            maxDamage: 700 * 1.2,
            armorProtection: 3,
            armorKnockbackResistance: 0.025
        },
        'scguns:treated_brass_helmet': {
            maxDamage: 407 * 1.2

        },
        'scguns:treated_brass_chestplate': {
            armorProtection: 9,
            maxDamage: 592 * 1.2
        },
        'scguns:treated_brass_leggings': {
            armorProtection: 7,
            maxDamage: 555 * 1.2
        },
        'scguns:treated_brass_boots': {
            maxDamage: 481 * 1.2
        },
        'scguns:diamond_steel_helmet': {
            maxDamage: 407 * 0.9
        },
        'scguns:diamond_steel_chestplate': {
            maxDamage: 592 * 0.9
        },
        'scguns:diamond_steel_leggings': {
            maxDamage: 555 * 0.9
        },
        'scguns:diamond_steel_boots': {
            maxDamage: 481 * 0.9
        }
    }


    anthralite_tools.forEach(tool => {
        event.modify(tool, item => {
            item.tier = 'anthralite'
        })
    })

    //fix axe/sword damage manually because axe damage is capped at 9.
    const anthralite_base_damage = {
        axe: 9.5,
        sword: 7.5,
        pickaxe: 5.5,
        shovel: 6
    }

    for (let [tool, damage] of Object.entries(anthralite_base_damage)) {
        event.modify('scguns:anthralite_' + tool, item => {
            item.setAttackDamage(damage - 1);
        })
    }

    const uuids = {
        'scguns:adrien_helm': "a865635f-e7b0-4981-ba70-e00b97ac8d1d",
        'scguns:adrien_chestplate': "f4349b65-43d5-45b9-919b-075cd82f13dc",
        'scguns:adrien_leggings': "edcdffb2-1b23-4c94-a030-0fe91d8474bd",
        'scguns:adrien_boots': "766c801f-917a-4597-89b3-4ed260a416f7",
        'scguns:diamond_steel_helmet': ["0f28fb4d-1cf6-4449-87d5-0ba3de3b532c", "8010bc0d-28b9-410a-8817-5d81a6ec92cc"],
        "scguns:diamond_steel_chestplate": ["cf0d5630-c6ae-4330-9e3a-9aa23f358d81", "aacfa135-37b7-4bfc-b038-74760fabba4d"],
        'scguns:diamond_steel_leggings': ["c0135a15-7b3c-4cb2-9d4c-f38720bd6d6e", "532cc71d-34e2-4615-9ec9-c0f8f2a69b2e"],
        "scguns:diamond_steel_boots": ["efd28ad5-61ad-4986-a156-c9d4cea54a47", "bcfbe347-2118-4853-a356-702cba56f575"]
    }

    for (let [armor, data] of Object.entries(armor_rebalance)) {
        event.modify(armor, item => {
            for (let [key, value] of Object.entries(data)) {
                item[key] = value
            }

            if (armor.includes('adrien')) {
                item.addAttribute('generic.attack_damage', uuids[armor], armor.split(":")[1] + " damage boost", 1, 'addition')
            }
        })
    }

    //diascite/ferriscite tier increase to netherite
    const sculk_tools = [
        'sculkhorde:ferriscite_pickaxe',
        'sculkhorde:ferriscite_axe',
        'sculkhorde:ferriscite_shovel',
        'sculkhorde:ferriscite_hoe',
        'sculkhorde:diascite_pickaxe',
        'sculkhorde:diascite_axe',
        'sculkhorde:diascite_shovel',
        'sculkhorde:diascite_hoe',
    ];

    sculk_tools.forEach(tool => {
        event.modify(tool, item => {
            item.tier = "netherite"
        })
    })
});


