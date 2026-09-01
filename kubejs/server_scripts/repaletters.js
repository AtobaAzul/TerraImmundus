
/** @type { Object<string, Array[Object<Internal.Block_, Internal.Block_>>]} */
const structure_repaletter = {
    //'structure': {'block_to_replace': 'replacement_block'}
    //or weighted
    //'structure': {
    //'block_to_replace': [{data: 'replacement_block_1', weight: 1}, {data: 'replacement_block_2', weight: 1}]    }

    //DOESN'T WORK!!!!!
    //'#minecraft:ruined_portal': { 'minecraft:netherrack': 'minecraft:blackstone' }
    '#terraimmundus:all_structures': {
        'minecraft:soul_sand': 'caverns_and_chasms:rocky_dirt',
        'minecraft:soul_soil': 'caverns_and_chasms:rocky_dirt'
    },
    'scguns:osgood_lab_outpost': {
        'minecraft:granite': 'caverns_and_chasms:granite_bricks',
        'minecraft:brick_slab': 'caverns_and_chasms:granite_brick_slab',
        'minecraft:bricks': 'caverns_and_chasms:granite_bricks',
        'minecraft:stone': 'caverns_and_chasms:cobblestone_bricks'
    },
    'scguns:osgood_lab': {
        'minecraft:granite': 'caverns_and_chasms:granite_bricks',
        'minecraft:brick_slab': 'caverns_and_chasms:granite_brick_slab',
        'minecraft:bricks': 'caverns_and_chasms:granite_bricks',
        'minecraft:stone': 'caverns_and_chasms:cobblestone_bricks'
    },
    'sculkhorde:sculk_tomb_main': {
        'minecraft:bookshelf': 'atmospheric:grimwood_bookshelf',
        'minecraft:oak_slab': 'atmospheric:grimwood_slab',
        'minecraft:dark_oak_slab': 'atmospheric:grimwood_slab',
        'minecraft:dark_oak_planks': 'atmospheric:grimwood_planks',
        'minecraft:dark_oak_stairs': 'atmospheric:grimwood_stairs',
        'minecraft:stripped_dark_oak_log': 'atmospheric:stripped_grimwood_log',
        'minecraft:iron_bars': 'caverns_and_chasms:tin_bars',
        'minecraft:stone': 'minecraft:polished_blackstone',
        'minecraft:oak_sign': 'minecraft:spruce_sign',
        'minecraft:polished_deepslate': 'minecraft:polished_blackstone',
        'minecraft:polished_deepslate_stairs': 'minecraft:polished_blackstone_stairs',
        'minecraft:ladder': 'woodworks:spruce_ladder',
        'minecraft:smooth_stone': [{ data: 'quark:iron_plate', weight: 1 }, { data: 'quark:rusty_iron_plate', weight: 3 }],
        'minecraft:stone_bricks': 'caverns_and_chasms:iron_bricks',
        'minecraft:stone_brick_wall': 'caverns_and_chasms:iron_brick_wall',
        'minecraft:stone': 'minecraft:polished_blackstone',
        'minecraft:andesite': 'minecraft:polished_blackstone',
        'minecraft:polished_deepslate_slab': 'minecraft:polished_blackstone_slab',
    },
    'scguns:asgharian_tower': {
        'minecraft:prismarine_wall': 'scguns:ashgarian_brick_wall',
        'minecraft:oxidized_cut_copper': [{ data: 'scguns:mossy_asgharian_tiles', weight: 1 }, { data: 'scguns:asgharian_tiles', weight: 1 }],
        'minecraft:dark_prismarine': [{ data: 'scguns:mossy_asgharian_tiles', weight: 1 }, { data: 'scguns:asgharian_tiles', weight: 1 }],
        'minecraft:dark_prismarine_stairs': 'scguns:asgharian_brick_stairs',
        'minecraft:dark_prismarine_slab': 'scguns:asgharian_brick_slab',
    },
    'nova_structures:witch_villa': {
        'minecraft:cobblestone': 'caverns_and_chasms:cobblestone_bricks',
        'minecraft:cobblestone_slab': 'caverns_and_chasms:cobblestone_brick_slab',
        'minecraft:cobblestone_stairs': 'caverns_and_chasms:cobblestone_brick_stairs',
        'minecraft:mossy_cobblestone': 'caverns_and_chasms:mossy_cobblestone_bricks',
        'minecraft:cobblestone_wall': 'caverns_and_chasms:cobblestone_brick_wall',
        'minecraft:cobbled_deepslate': 'caverns_and_chasms:cobbled_deepslate_bricks',
        'minecraft:cobbled_deepslate_slab': 'caverns_and_chasms:cobbled_deepslate_brick_slab',
        'minecraft:cobbled_deepslate_stairs': 'caverns_and_chasms:cobbled_deepslate_brick_stairs',
    },
    'nova_structures:underground_house': {
        'minecraft:oak_planks': 'caverns_and_chasms:azalea_planks',
        'minecraft:oak_stairs': 'caverns_and_chasms:azalea_stairs',
        'minecraft:oak_slab': 'caverns_and_chasms:azalea_slab',
        'minecraft:oak_fence': 'caverns_and_chasms:azalea_fence',
    },
    'nova_structures:creeping_crypt': {
        'minecraft:polished_andesite': 'caverns_and_chasms:andesite_bricks',
        'minecraft:polished_andesite_slab': 'caverns_and_chasms:andesite_brick_slab',
        'minecraft:polished_andesite_stairs': 'caverns_and_chasms:andesite_brick_stairs',
    },
    'nova_structures:undead_crypt': {
        'minecraft:polished_andesite': 'caverns_and_chasms:andesite_bricks',
        'minecraft:polished_andesite_slab': 'caverns_and_chasms:andesite_brick_slab',
        'minecraft:polished_andesite_stairs': 'caverns_and_chasms:andesite_brick_stairs',
    },
    'betterstrongholds:stronghold': {
        'minecraft:cyan_terracotta': 'quark:myalite',
        'minecraft:nether_brick_wall': 'quark:myalite_wall',
        'minecraft:nether_brick_fence': 'quark:myalite_wall',
        'minecraft:nether_brick_stairs': 'quark:myalite_stairs',
    },
    'explorify:mausoleum': {
        'minecraft:oxidized_copper': 'caverns_and_chasms:tuff_bricks',
    }
};

function createRepaletterData(structure, repaletters) {
    return {
        structures: structure,
        repaletter: repaletters
    }
}

function createSimpleRepaletter(block_to_replace, replacement_block) {
    return {
        type: 'blueprint:simple',
        replaces_block: block_to_replace,
        replaces_with: replacement_block,
    }
}

function createWeightedRepaletter(block_to_replace, replacement_blocks) {
    return {
        type: 'blueprint:weighted',
        replaces_blocks: block_to_replace,
        replaces_with: replacement_blocks,
    }
}

ServerEvents.highPriorityData((event) => {
    for (let [structure, swaps] of Object.entries(structure_repaletter)) {
        let name = structure.split(':')[1];

        for (let [oldBlock, newBlock] of Object.entries(swaps)) {
            if (Array.isArray(newBlock)) {
                event.addJson(`terraimmundus:blueprint/structure_repaletters/${name}_replace_${oldBlock.split(':')[1]}_with_${newBlock[0].data.split(':')[1]}.json`, createRepaletterData(structure, createWeightedRepaletter(oldBlock, newBlock)))
            } else {
                event.addJson(`terraimmundus:blueprint/structure_repaletters/${name}_replace_${oldBlock.split(':')[1]}_with_${newBlock.split(':')[1]}.json`, createRepaletterData(structure, createSimpleRepaletter(oldBlock, newBlock)))
            }
        }
    }
});
