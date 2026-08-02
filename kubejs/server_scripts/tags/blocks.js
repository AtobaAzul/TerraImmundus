ServerEvents.tags('block', (event) => {
    //event.add('minecraft:stone_ore_replaceables', ['basalt', 'blackstone']);
    event.add('minecraft:deepslate_ore_replaceables', ['basalt', 'blackstone']);

    //irks me so much i'm fixing it
    event.add('minecraft:overworld_carver_replaceables', [
        'minecraft:snow_block',
    ]);

    event.add('sculkhorde:wards_against_infestation', [
        'atmospheric:crustose',
        'atmospheric:crustose_log',
        'atmospheric:crustose_path',
        'quark:blaze_lantern',
        'minecraft:fire',
        'kubejs:purity_sap',
        'minecraft:water',
        'minecraft:lava'
    ]);
    event.remove('scguns:sculk_blocks', /.*/);

    event.add('minecraft:needs_diamond_tool', [
        /.*sapphire.*/,
        /.*apatite.*/,
        /.*ruby.*/,
        /.*amethyst.*/,
        /.*nickel.*/,
        /.*zinc.*/,
        /.*lapis.*/,
        /.*quartz.*/,
    ]);

    event.remove('minecraft:needs_iron_tool', [/.*lead.*/]);
    event.remove('minecraft:needs_wooden', [/.*deepslate.*/]);
    event.remove('minecraft:needs_stone_tool', [/.*lapis.*/]);

    event.add('minecraft:needs_stone_tool', [/.*lead.*/]);

    event.remove('minecraft:needs_stone_tool', 'scguns:gun_bench');
    event.remove('minecraft:mineable/pickaxe', 'scguns:gun_bench');
    event.add('minecraft:mineable/axe', 'scguns:gun_bench');

    event.add('minecraft:needs_iron_tool', [
        'thermal:tin_ore',
        'thermal:deepslate_tin_ore',
        'thermal:raw_tin_block',
        'thermal:tin_block',
        /.*deepslate.*/,
        /.*basalt.*/,
        /.*blackstone.*/,
        /.*tuff.*/,
    ]);

    event.add('sculkhorde:sculk_raid_target/high_priority', [
        'thermal:dynamo_disenchantment',
        'thermal:dynamo_gourmand',
        'thermal:dynamo_stirling',
        'thermal:dynamo_compression',
        'thermal:dynamo_magmatic',
        'thermal:dynamo_numismatic',
        'thermal:dynamo_lapidary',
        'thermal:energy_cell',
        'thermal:machine_sawmill',
        'thermal:machine_insolator',
        'thermal:machine_centrifuge',
        'thermal:machine_crucible',
        'thermal:machine_chiller',
        'thermal:machine_refinery',
        'thermal:machine_pyrolyzer',
        'thermal:machine_bottler',
        'thermal:machine_brewer',
        'thermal:machine_crafter',
        '#minecraft:doors',
        /refinedstorage:.*controller/,
    ]);

    event.add('sculkhorde:sculk_raid_target/medium_priority', [
        'farmersrespite:kettle',
        'sawmill:sawmill',
        'brewinandchewin:keg',
        'farmersdelight:skillet',
        'farmersdelight:cooking_pot',
        'scguns:gun_bench',
        'quark:crate',
        'caverns_and_chasms:cupric_campfire',
        'minecraft:soul_campfire',
        'quark:blackstone_furnace',
        'quark:deepslate_furnace',
        'clayworks:kiln',
        'miners_delight:copper_pot',
        'thermal:machine_press',
        'thermal:machine_smelter',
        'thermal:machine_pulverizer',
        'thermal:machine_furnace',
        'thermal:device_potion_diffuser',
        'thermal:device_nullifier',
        'thermal:device_xp_condenser',
        'thermal:device_collector',
        'thermal:device_rock_gen',
        'thermal:device_water_gen',
        'thermal:device_composter',
        'thermal:device_fisher',
        'thermal:device_tree_extractor',
    ]);

    event.add('sculkhorde:sculk_raid_target/low_priority', '#forge:chests');
    event.remove('caverns_and_chasms:deflects_projectiles', 'caverns_and_chasms:roller_door')

    event.add('forge:needs_netherite_tool', [
        'thermal:sapphire_ore',
        'thermal:deepslate_sapphire_ore',
        /.*soulite.*/
    ])

    event.add('minecraft:soul_fire_base_blocks', /.*sulfur.*/)

    event.removeAll('caverns_and_chasms:tin_ores')

    event.remove('forge:ores/tin', [
        'caverns_and_chasms:tin_ore',
        'caverns_and_chasms:deepslate_tin_ore',
        'caverns_and_chasms:cylindrite_tin_ore',
        'caverns_and_chasms:cassiterite_tin_ore',
    ])

    event.add('forge:ores/titanium', [
        'caverns_and_chasms:tin_ore',
        'caverns_and_chasms:deepslate_tin_ore',
        'caverns_and_chasms:cylindrite_tin_ore',
        'caverns_and_chasms:cassiterite_tin_ore',
    ])

    event.add('caverns_and_chasms:deflects_projectiles', [
        'caverns_and_chasms:tin_ore',
        'caverns_and_chasms:deepslate_tin_ore',
        'caverns_and_chasms:cylindrite_tin_ore',
        'caverns_and_chasms:cassiterite_tin_ore',
        'pipez:item_pipe'
    ])

    event.add('caverns_and_chasms:weaker_deflect_velocity', [
        'caverns_and_chasms:tin_ore',
        'caverns_and_chasms:deepslate_tin_ore',
        'caverns_and_chasms:cylindrite_tin_ore',
        'caverns_and_chasms:cassiterite_tin_ore',
    ])


    event.remove('minecraft:needs_diamond_tool', [
        'caverns_and_chasms:tin_ore',
        'caverns_and_chasms:deepslate_tin_ore',
        'caverns_and_chasms:cylindrite_tin_ore',
        'caverns_and_chasms:cassiterite_tin_ore'
    ])


    event.add('minecraft:needs_iron_tool', [
        'caverns_and_chasms:tin_ore',
        'caverns_and_chasms:deepslate_tin_ore',
        'caverns_and_chasms:cylindrite_tin_ore',
        'caverns_and_chasms:cassiterite_tin_ore'
    ])
});
