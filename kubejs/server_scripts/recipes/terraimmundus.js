ServerEvents.recipes((e) => {
    //netherite to meteorite
    e.remove({ output: 'minecraft:netherite_scrap' });
    e.remove({ id: 'minecraft:netherite_ingot' });
    e.remove({ id: 'caverns_and_chasms:necromium_ingot' });
    e.remove({ id: 'thermal:machines/smelter/smelter_alloy_netherite' });


    let remove = ['sculkhorde:baked_potato_of_purity', 'sculkhorde:beef_of_purity', 'sculkhorde:chicken_of_purity', 'sculkhorde:pork_of_purity', 'sculkhorde:bread_of_purity']

    remove.forEach((item) => {
        e.remove({ output: item });
    });

    e.recipes.thermal.smelter(
        [
            Item.of('minecraft:netherite_ingot').withChance(1.5),
            Item.of('caverns_and_chasms:silver_nugget').withChance(0.5),
        ],
        'minecraft:netherite_scrap',
    );
    e.recipes.thermal.pulverizer(
        [
            Item.of('thermal:netherite_dust').withChance(1.25),
            Item.of('thermal:silver_dust').withChance(0.05),
        ],
        'minecraft:netherite_scrap',
    );
    e.recipes.thermal.pulverizer(
        [
            Item.of('thermal:netherite_dust').withChance(2),
            Item.of('gravel').withChance(0.2),
            Item.of('thermal:silver_dust').withChance(0.1),
        ],
        'minecraft:ancient_debris',
        0.5,
        4000,
    );
    e.recipes.thermal.smelter(
        [
            Item.of('netherite_ingot').withChance(1),
            Item.of('thermal:rich_slag').withChance(0.2),
            Item.of('caverns_and_chasms:silver_ingot').withChance(0.2),
        ],
        'minecraft:ancient_debris',
        0.5,
        3200,
    );

    e.shaped('elytra', ['ABA', 'ABA', 'A A'], {
        A: 'phantom_membrane',
        B: 'caverns_and_chasms:living_flesh',
    });
    e.recipes.thermal.refinery(
        [
            Fluid.of('thermal:latex', 100),
            Item.of('ghast_tear').withChance(0.75),
        ],
        Fluid.of('kubejs:ashen_sap', 200),
    );

    e.shapeless('4x soul_sand', [
        '4x #minecraft:sand',
        'sculkhorde:crying_souls',
        '2x #forge:dusts/sulfur'
    ]);

    e.shaped('8x crying_obsidian', ['AAA', 'ABA', 'AAA'], {
        A: 'obsidian',
        B: 'dragon_breath',
    });

    e.recipes.thermal.smelter('4x netherrack', ['2x redstone', '3x gravel']);

    //Cleansing Blaze
    e.remove({ id: 'minecraft:blaze_powder' });
    e.remove({ id: 'thermal:machines/pulverizer/pulverizer_blaze_rod' });
    e.remove({ id: 'quarkdelight:cutting/pickaxe/blaze_lantern' });
    e.remove({ id: 'thermal:chiller_rod_cast' });
    e.remove({ id: 'sculkhorde:essence_of_purity' });
    e.recipes.thermal.smelter(
        Item.of('sculkhorde:essence_of_purity').withChance(2),
        ['3x #terraimmundus:dust_or_ingot/gold', '2x amethyst_shard'],
    );

    e.recipes.thermal.smelter_catalyst(
        'scguns:vehement_coal',
        1.5,
        3,
        0.25,
        0,
        0.25,
    );
    e.remove({
        id: 'thermal:machines/smelter/smelter_catalyst_blaze_powder',
    });

    e.shapeless('3x blaze_powder', [
        'scguns:vehement_coal',
        'sculkhorde:sculk_resin',
        'sculkhorde:essence_of_purity',
    ]);

    e.replaceInput({}, 'blaze_rod', 'gold_ingot');

    e.recipes.thermal.smelter_catalyst(
        'caverns_and_chasms:spinel',
        3,
        3,
        2,
        0,
        1,
    );

    //Bundles my beloved.
    e.remove({ id: 'caverns_and_chasms:bundle' });
    e.shapeless('bundle', [
        ['#supplementaries:ropes', 'string'],
        ['supplementaries:flax'],
    ]);

    e.replaceInput(
        { id: 'quark:oddities/crafting/backpack' },
        '#forge:chests/wooden',
        '#supplementaries:sacks',
    );

    e.replaceInput({ output: 'minecraft:campfire' }, '#minecraft:coals', [
        '#minecraft:coals',
        'farmersdelight:straw',
    ]);

    e.remove({
        id: 'quark:tweaks/crafting/utility/chests/mixed_chest_wood_but_without_exclusions',
    });

    //2 depth meters. reusing texture of this one for the spore meter
    e.remove({ id: 'supplementaries:altimeter' });
    e.shaped(Item.of('kubejs:sporemeter'), [' A ', 'ABA', ' A '], {
        A: '#forge:ingots/gold',
        B: 'ender_pearl',
    });

    e.shaped('saddle', [' A ', 'ABA'], {
        A: '#forge:leather',
        B: '#forge:ingots/iron',
    });

    e.shaped('4x soul_soil', ['AA', 'AA'], {
        A: 'soul_sand',
    });

    e.custom({
        type: 'farmersdelight:cutting',
        ingredients: [
            {
                tag: 'minecraft:wool',
            },
        ],
        result: [
            {
                count: 4,
                item: 'minecraft:string',
            },
        ],
        tool: {
            tag: 'forge:shears',
        },
    });

    e.custom({
        type: 'sculkhorde:soul_harvesting',
        ingredients: [
            {
                item: 'caverns_and_chasms:zirconia',
            },
        ],
        output: {
            count: 1,
            item: 'minecraft:echo_shard',
        },
    });

    e.remove({ id: 'suppsquared:copper_lantern_2' });
    e.remove({ id: 'suppsquared:copper_lantern' });

    e.remove({ id: 'suppsquared:brass_lantern' });
    e.shaped('suppsquared:brass_lantern', ['B', 'A'], {
        A: '#forge:ingots/brass',
        B: 'torch',
    });

    e.replaceInput(
        { id: 'minecraft:ender_eye' },
        'blaze_powder',
        'caverns_and_chasms:living_flesh',
    );

    e.remove({ id: 'minecraft:fire_charge' });
    e.remove({ id: 'scguns:fire_charge_from_sheol' });

    e.replaceInput(
        { id: 'minecraft:magma_cream' },
        'blaze_powder',
        'scguns:vehement_coal',
    );
    e.replaceOutput(
        { input: 'minecraft:magma_cream' },
        'blaze_powder',
        'scguns:vehement_coal',
    );

    e.shapeless('4x fire_charge', [
        '#forge:gunpowder',
        '#minecraft:coals',
        'thermal:rosin',
    ]);

    e.replaceInput(
        { id: 'automobility:dash_panel' },
        'blaze_powder',
        'redstone',
    );
    e.replaceInput(
        { id: 'brewinandchewin:heating_cask' },
        'blaze_powder',
        'scguns:vehement_coal',
    );
    e.replaceInput(
        { id: 'thermal:fire_tnt' },
        'blaze_powder',
        'scguns:vehement_coal',
    );
    e.replaceInput(
        { id: 'thermal:fire_grenade_4' },
        'blaze_powder',
        'scguns:vehement_coal',
    );
    e.replaceInput(
        { id: 'scguns:hellfire_bomb' },
        'blaze_powder',
        'scguns:vehement_coal',
    );

    e.shapeless('flint', ['gravel', 'brush']).damageIngredient('brush', 1);

    e.replaceInput(
        { id: 'sculkhorde:soul_harvester' },
        'sculk_shrieker',
        'nether_star',
    );

    const griefer_armor_parts = [
        'helmet',
        'chestplate',
        'leggings',
        'boots',
    ].forEach((part) => {
        e.remove({ id: 'savage_and_ravage:griefer_' + part });
        e.smithing(
            'savage_and_ravage:griefer_' + part,
            'thermal:cured_rubber',
            'iron_' + part,
            'savage_and_ravage:blast_proof_plating',
        );
    });

    e.shapeless('farmersdelight:wheat_dough', [
        'water_bucket',
        'wheat',
    ]).keepIngredient('water_bucket');

    //C&C tin -> meteorite
    const tin_replace = [
        'caverns_and_chasms:packing_container',
        'caverns_and_chasms:aegis',
        'caverns_and_chasms:refractor',
        'caverns_and_chasms:hoop',
        'caverns_and_chasms:winch',
        'caverns_and_chasms:ricochet_arrow',
        'scguns_cnc:ricoshot_round',
        'caverns_and_chasms:tin_bulb',
        'caverns_and_chasms:tin_bulb',
        'caverns_and_chasms:tin_chain',
        'caverns_and_chasms:tin_bars',
        'caverns_and_chasms:chiseled_tin_bricks',
        'caverns_and_chasms:tin_brick_wall',
        'caverns_and_chasms:tin_brick_slab',
        'caverns_and_chasms:tin_brick_stairs',
        'caverns_and_chasms:tin_bricks',
        'caverns_and_chasms:tin_block',
        'caverns_and_chasms:raw_tin_block',
        'caverns_and_chasms:deepslate_tin_ore',
        'caverns_and_chasms:tin_ore',
        'caverns_and_chasms:tinplate',
        'caverns_and_chasms:tin_ingot',
        'caverns_and_chasms:tinplate_block',
        'caverns_and_chasms:packing_container',
        'caverns_and_chasms:aegis',
        'caverns_and_chasms:scatterer',
        'caverns_and_chasms:splurter',
        'caverns_and_chasms:storage_duct_hatch',
        'caverns_and_chasms:storage_duct',
        'caverns_and_chasms:refractor',
        'caverns_and_chasms:resistor',
        'caverns_and_chasms:hoop',
        'caverns_and_chasms:winch',
        'caverns_and_chasms:ricochet_arrow',
        'caverns_and_chasms:bouncer',
        'caverns_and_chasms:cylindrite',
        'caverns_and_chasms:cassiterite',

    ];

    tin_replace.forEach((item) => {
        e.replaceInput({ output: item }, '#forge:raw_materials/tin', 'caverns_and_chasms:raw_tin')
        e.replaceInput({ output: item }, '#forge:ingots/tin', 'caverns_and_chasms:tin_ingot')
        e.replaceInput({ output: item }, '#forge:nuggets/tin', 'caverns_and_chasms:tin_nugget')
        e.replaceInput({ output: item }, '#forge:storage_blocks/tin', 'caverns_and_chasms:tin_block')
        e.replaceInput({ output: item }, '#forge:storage_blocks/raw_tin', 'caverns_and_chasms:raw_tin_block')
    })

    e.smelting('caverns_and_chasms:tin_ingot', 'caverns_and_chasms:raw_tin').xp(0.7)
    e.blasting('caverns_and_chasms:tin_ingot', 'caverns_and_chasms:raw_tin').xp(0.7)
    e.blasting('caverns_and_chasms:tin_block', 'caverns_and_chasms:raw_tin_block').xp(0.7 * 9)

    e.replaceOutput({}, 'thermal:sapphire', 'caverns_and_chasms:zirconia')

    e.recipes.thermal.pulverizer([Item.of('kubejs:titanium_dust').withChance(2), Item.of('gravel').withChance(0.2), Item.of('thermal:apatite').withChance(.5)], '#forge:ores/titanium')


    e.recipes.thermal.smelter([Item.of('caverns_and_chasms:tin_ingot').withChance(1), Item.of('thermal:apatite').withChance(.8), Item.of('thermal:rich_slag').withChance(.2)], '#forge:ores/titanium')

    e.recipes.thermal.smelter(
        [
            Item.of('caverns_and_chasms:tin_ingot').withChance(1.25),
            Item.of('minecraft:iron_nugget').withChance(0.75),
        ],
        'caverns_and_chasms:raw_tin',
    );
    e.recipes.thermal.pulverizer(
        [
            Item.of('kubejs:titanium_dust').withChance(1.25),
            Item.of('thermal:iron_dust').withChance(0.05),
        ],
        'caverns_and_chasms:raw_tin',
    );

    e.recipes.thermal.smelter(['caverns_and_chasms:tin_ingot'], ['kubejs:titanium_dust'])

    e.remove({ id: 'caverns_and_chasms:tin_ingot_from_smelting_raw_tin' })
    e.remove({ id: 'caverns_and_chasms:tin_ingot_from_blasting_raw_tin' })
    e.shapeless('caverns_and_chasms:zirconia', ['thermal:sapphire'])

    e.recipes.thermal.bottler('4x minecraft:torch', [
        Fluid.of('thermal:creosote', 100),
        '#forge:rods/wooden',
    ]);
    e.remove({ id: 'scguns:blaze_fuel' })
    e.shapeless('scguns:blaze_fuel', ['scguns:empty_tank', '3x blaze_powder'])

    e.remove({ id: 'minecraft:golden_apple' })
    e.shaped('minecraft:golden_apple', ['AAA', 'ABA', 'AAA'], {
        A: 'minecraft:apple',
        B: 'sculkhorde:essence_of_purity'
    })

    e.remove({ id: 'ftbfiltersystem:smart_filter' })

    e.remove({ id: 'caverns_and_chasms:storage_duct' })
    e.shaped('4x caverns_and_chasms:storage_duct', [
        'A A',
        'B B',
        'A A'
    ], {
        A: 'caverns_and_chasms:tin_ingot',
        B: 'caverns_and_chasms:tin_block'
    })

    e.remove({ id: 'alexsmobs:flint_n_steel_dropbear_claw' })
    e.replaceInput({ id: 'alexsmobs:tendon_whip' }, 'alexsmobs:dropbear_claw', '#forge:nuggets/iron')

    e.shaped('kubejs:tin_pickaxe', [
        'AAA',
        ' B ',
        ' B '
    ], {
        A: 'caverns_and_chasms:tin_ingot',
        B: '#forge:rods/wooden'
    })

    e.shaped('kubejs:tin_shovel', [
        ' A ',
        ' B ',
        ' B '
    ], {
        A: 'caverns_and_chasms:tin_ingot',
        B: '#forge:rods/wooden'
    })

    e.shaped('kubejs:tin_axe', [
        'AA',
        'AB',
        ' B'
    ], {
        A: 'caverns_and_chasms:tin_ingot',
        B: '#forge:rods/wooden'
    })

    e.shaped('kubejs:tin_hoe', [
        'AA',
        ' B',
        ' B'
    ], {
        A: 'caverns_and_chasms:tin_ingot',
        B: '#forge:rods/wooden'
    })

    e.shaped('kubejs:tin_sword', [
        'A',
        'A',
        'B'
    ], {
        A: 'caverns_and_chasms:tin_ingot',
        B: '#forge:rods/wooden'
    })

    e.shaped('kubejs:tin_helmet', [
        'AAA',
        'A A'
    ], {
        A: 'caverns_and_chasms:tin_ingot',
    })

    e.shaped('kubejs:tin_chestplate', [
        'A A',
        'AAA',
        'AAA'
    ], {
        A: 'caverns_and_chasms:tin_ingot',
    })

    e.shaped('kubejs:tin_leggings', [
        'AAA',
        'A A',
        'A A'
    ], {
        A: 'caverns_and_chasms:tin_ingot',
    })

    e.shaped('kubejs:tin_boots', [
        'A A',
        'A A'
    ], {
        A: 'caverns_and_chasms:tin_ingot',
    })

    const netherite_upgrades = {
        'kubejs:tin_pickaxe': 'minecraft:netherite_pickaxe',
        'kubejs:tin_shovel': 'minecraft:netherite_shovel',
        'kubejs:tin_axe': 'minecraft:netherite_axe',
        'kubejs:tin_hoe': 'minecraft:netherite_hoe',
        'kubejs:tin_sword': 'minecraft:netherite_sword',
        'kubejs:tin_helmet': 'minecraft:netherite_helmet',
        'kubejs:tin_chestplate': 'minecraft:netherite_chestplate',
        'kubejs:tin_leggings': 'minecraft:netherite_leggings',
        'kubejs:tin_boots': 'minecraft:netherite_boots',
        'kubejs:tin_greatsword': 'moonsweaponry:netherite_greatsword',
        'kubejs:tin_halberd': 'moonsweaponry:netherite_halberd',
        'kubejs:tin_hammer': 'moonsweaponry:netherite_hammer',
        'kubejs:tin_katana': 'moonsweaponry:netherite_katana',
        'kubejs:tin_rapier': 'moonsweaponry:netherite_rapier',
        'kubejs:tin_scythe': 'moonsweaponry:netherite_scythe',
        'kubejs:tin_warglaive': 'moonsweaponry:netherite_warglaive',
        'kubejs:tin_mace': 'moonsweaponry:netherite_mace',
        'kubejs:tin_spear': 'moonsweaponry:netherite_spear',
    }

    for (const [key, value] of Object.entries(netherite_upgrades)) {
        e.smithing(value, 'minecraft:netherite_upgrade_smithing_template', key, '#forge:ingots/netherite');
        e.smithing(value.replace("moonsweaponry", "kubejs").replace("netherite", "necromium").replace("minecraft", "caverns_and_chasms"), 'minecraft:netherite_upgrade_smithing_template', key.replace("moonsweaponry", "kubejs").replace("netherite", "necromium").replace("minecraft", "caverns_and_chasms"), '#forge:ingots/necromium');
        e.custom({
            type: 'minecraft:anvil_repair',
            baseItem: key,
            repairItem: 'caverns_and_chasms:tin_ingot',
        })
    }

    e.remove({ mod: 'grapplemod' })

    e.shaped('grapplemod:grapplinghook', ['ABC', 'BCC', 'CCC'], {
        A: '#forge:ingots/iron',
        B: '#forge:nuggets/iron',
        C: 'farmersdelight:rope'
    })

    e.remove({ id: 'alexsmobs:squid_grapple' })

    e.shapeless(Item.of('grapplemod:grapplinghook', '{Damage:0,custom:{angle:20.0d,attract:0b,attractradius:3.0d,crc32:3711581742L,detachonkeyrelease:0b,doublehook:0b,enderstaff:0b,hookgravity:1.0d,maxlen:200.0d,motor:0b,motoracceleration:0.2d,motordampener:0b,motormaxspeed:4.0d,motorwhencrouching:0b,motorwhennotcrouching:1b,oneropepull:0b,phaserope:0b,playermovementmult:1.0d,pullbackwards:1b,reelin:1b,repel:0b,repelforce:1.0d,rocket:0b,rocket_active_time:0.5d,rocket_force:1.0d,rocket_refuel_ratio:15.0d,rocket_vertical_angle:0.0d,smartdoublemotor:1b,smartmotor:0b,sneakingangle:10.0d,sneakingverticalthrowangle:0.0d,sticky:0b,throwspeed:2.0d,verticalthrowangle:0.0d}}'),
        [
            'grapplemod:grapplinghook',
            '3x alexsmobs:lost_tentacle'
        ])

    e.shaped('kubejs:backpack_expansion', [
        'ABA',
        'BCB',
        'ABA'
    ], {
        A: ['minecraft:leather', 'farmersdelight:canvas'],
        B: 'thermal:cured_rubber',
        C: 'thermal:rose_gold_gear'
    })

    e.remove({ id: 'backpacked:backpack' })
    e.shaped('backpacked:backpack', [
        'ABA',
        'CDC',
        'ABA'
    ], {
        A: 'minecraft:leather',
        B: 'supplementaries:flax',
        C: 'thermal:invar_ingot',
        D: 'farmersdelight:rope'
    })

    e.remove({ id: 'sculkhorde:ferriscite' })
    e.remove({ id: 'sculkhorde:diascite' })

    e.custom({
        type: 'sculkhorde:soul_harvesting',
        ingredients: [
            {
                item: 'kubejs:inert_diascite',
            },
        ],
        output: {
            count: 1,
            item: 'sculkhorde:diascite',
        },
    });

    e.custom({
        type: 'sculkhorde:soul_harvesting',
        ingredients: [
            {
                item: 'kubejs:inert_ferriscite',
            },
        ],
        output: {
            count: 1,
            item: 'sculkhorde:ferriscite',
        },
    });
});
