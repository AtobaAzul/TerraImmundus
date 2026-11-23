ServerEvents.recipes((e) => {
    //make silver/gold tools upgrades
    const tool_types = [
        'axe',
        'pickaxe',
        'shovel',
        'hoe',
        'sword',
        'helmet',
        'chestplate',
        'leggings',
        'boots'
    ]

    tool_types.forEach(type => {
        e.remove({ output: 'caverns_and_chasms:silver_' + type })
        e.remove({ output: 'minecraft:golden_' + type })

        let suffix = type == `boots` || type == `leggings` ? '' : 's'

        e.smithing(
            `minecraft:golden_${type}`,
            'minecraft:leather',
            ['minecraft:iron_' + type, '#caverns_and_chasms:copper_' + type + suffix],
            '#forge:ingots/gold'
        );

        e.smithing(
            `caverns_and_chasms:silver_${type}`,
            'minecraft:leather',
            ['minecraft:iron_' + type, '#caverns_and_chasms:copper_' + type + suffix],
            '#forge:ingots/silver'
        );



        e.smithing(
            `kubejs:tin_${type}`,
            'minecraft:leather',
            ['minecraft:diamond_' + type, 'scguns:anthralite_' + type],
            'caverns_and_chasms:tin_block'
        );
    })


    //rework anthralite armor/tools into its own thing instead of iron upgrade
    const remove = [
        'scguns:anthralite_pickaxe',
        'scguns:anthralite_axe',
        'scguns:anthralite_shovel',
        'scguns:anthralite_hoe',
        'scguns:anthralite_sword',
        'scguns:anthralite_knife',
        'scguns:anthralite_helmet',
        'scguns:anthralite_chestplate',
        'scguns:anthralite_leggings',
        'scguns:anthralite_boots',
        'scguns:anthralite_bayonet',
    ];

    remove.forEach(item => {
        e.remove({ output: item })
    })

    e.shaped('scguns:anthralite_pickaxe', [
        'AAA',
        ' B ',
        ' B '
    ], {
        A: '#forge:ingots/anthralite',
        B: '#forge:rods/wooden'
    })

    e.shaped('scguns:anthralite_axe', [
        'AA',
        'AB',
        ' B'
    ], {
        A: '#forge:ingots/anthralite',
        B: '#forge:rods/wooden'
    })

    e.shaped('scguns:anthralite_shovel', [
        'A',
        'B',
        'B'
    ], {
        A: '#forge:ingots/anthralite',
        B: '#forge:rods/wooden'
    })

    e.shaped('scguns:anthralite_hoe', [
        'AA',
        ' B',
        ' B'
    ], {
        A: '#forge:ingots/anthralite',
        B: '#forge:rods/wooden'
    })

    e.shaped('scguns:anthralite_sword', [
        'A',
        'A',
        'B'
    ], {
        A: '#forge:ingots/anthralite',
        B: '#forge:rods/wooden'
    })

    e.shaped('scguns:anthralite_knife', [
        'A',
        'B'
    ], {
        A: '#forge:ingots/anthralite',
        B: '#forge:rods/wooden'
    })

    e.shaped('scguns:anthralite_bayonet', [
        ' A',
        'B '
    ], {
        A: '#forge:ingots/anthralite',
        B: '#forge:rods/wooden'
    })

    e.shaped('scguns:anthralite_helmet', [
        'AAA',
        'A A'
    ], {
        A: '#forge:ingots/anthralite'
    })


    e.shaped('scguns:anthralite_chestplate', [
        'A A',
        'AAA',
        'AAA'
    ], {
        A: '#forge:ingots/anthralite'
    })


    e.shaped('scguns:anthralite_leggings', [
        'AAA',
        'A A',
        'A A'
    ], {
        A: '#forge:ingots/anthralite'
    })


    e.shaped('scguns:anthralite_boots', [
        'A A',
        'A A'
    ], {
        A: '#forge:ingots/anthralite'
    })

    //Weaponworks anthralite
    e.shaped(`kubejs:anthralite_greatsword`, [' A ', ' A ', 'ABA'], {
        A: '#forge:ingots/anthralite',
        B: '#forge:rods/wooden',
    });

    e.shaped(`kubejs:anthralite_halberd`, ['  A', ' BA', 'B  '], {
        A: '#forge:ingots/anthralite',
        B: '#forge:rods/wooden',
    });

    e.shaped(`kubejs:anthralite_hammer`, [' AA', ' BA', 'B  '], {
        A: '#forge:ingots/anthralite',
        B: '#forge:rods/wooden',
    });

    e.shaped(`kubejs:anthralite_katana`, ['  A', ' A ', 'B  '], {
        A: '#forge:ingots/anthralite',
        B: '#forge:rods/wooden',
    });

    e.shaped(`kubejs:anthralite_rapier`, ['BAA'], {
        A: '#forge:ingots/anthralite',
        B: '#forge:rods/wooden',
    });

    e.shaped(`kubejs:anthralite_scythe`, [' AA', ' BA', 'B A'], {
        A: '#forge:ingots/anthralite',
        B: '#forge:rods/wooden',
    });

    e.shaped(`kubejs:anthralite_warglaive`, ['  A', ' BA', 'AA '], {
        A: '#forge:ingots/anthralite',
        B: '#forge:rods/wooden',
    });

    e.shaped(`kubejs:anthralite_mace`, [' A ', 'ABA', ' B '], {
        A: '#forge:ingots/anthralite',
        B: '#forge:rods/wooden',
    });

    e.shaped(`kubejs:anthralite_spear`, ['  A', ' B ', 'B  '], {
        A: '#forge:ingots/anthralite',
        B: '#forge:rods/wooden',
    });

    //chainmail stuff

    const armor_parts = [
        'helmet',
        'chestplate',
        'leggings',
        'boots',
    ].forEach((part) => {
        e.remove({ id: 'savage_and_ravage:griefer_' + part });
        e.smithing(
            'savage_and_ravage:griefer_' + part,
            'thermal:cured_rubber',
            ['chainmail_' + part, 'scguns:scrap_' + part],
            'savage_and_ravage:blast_proof_plating',
        );

        let adrien_part = part == 'helmet' ? 'helm' : part
        e.remove({ id: 'scguns:adrien_' + adrien_part });
        e.smithing(
            'scguns:adrien_' + adrien_part,
            'thermal:cured_rubber',
            ['chainmail_' + part, 'scguns:scrap_' + part],
            '#forge:ingots/steel',
        );

        e.remove({ output: 'scguns:diamond_steel_' + part })
        e.remove({ output: 'scguns:treated_brass_' + part })
        e.smithing(
            `scguns:diamond_steel_${part}`,
            'minecraft:leather',
            ['minecraft:netherite_' + part, 'caverns_and_chasms:necromium_' + part],
            'scguns:diamond_steel_ingot'
        );

          e.smithing(
            `scguns:treated_brass_${part}`,
            'minecraft:leather',
            ['minecraft:netherite_' + part, 'caverns_and_chasms:necromium_' + part],
            'scguns:treated_brass_ingot'
        );

    });

    //cheapening diascite/ferriscite stuff
    const sculk_tool_types = [
        'axe',
        'pickaxe',
        'shovel',
        'hoe',
    ]

    sculk_tool_types.forEach(type => {
        e.remove({ output: 'sculkhorde:ferriscite_' + type })
        e.remove({ output: 'sculkhorde:diascite_' + type })


        e.smithing(
            'sculkhorde:diascite_' + type,
            'sculkhorde:soulite_shard',
            ['minecraft:netherite_' + type, 'caverns_and_chasms:necromium_' + type],
            'sculkhorde:diascite',
        );

        e.smithing(
            'sculkhorde:ferriscite_' + type,
            'sculkhorde:soulite_shard',
            ['minecraft:netherite_' + type, 'caverns_and_chasms:necromium_' + type],
            'sculkhorde:ferriscite',
        );
    })

});
