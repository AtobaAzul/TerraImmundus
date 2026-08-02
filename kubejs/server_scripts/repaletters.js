
/** @type { Object<string, Array[Object<Internal.Block_, Internal.Block_>>]} */
const structure_repaletter = {
    //'structure': [{'block_to_replace': 'replacement_block'}]
    //'structure': {'block_to_replace': 'replacement_block'}
    //DOESN'T WORK!!!!!
    //'#minecraft:ruined_portal': { 'minecraft:netherrack': 'minecraft:blackstone' }
    '#terraimmundus:all_structures': [{'minecraft:soul_sand': 'caverns_and_chasms:rocky_dirt'}, {'minecraft:soul_soil': 'caverns_and_chasms:rocky_dirt'}]
    
};

function createSimpleRepaletterData(structure, block_to_replace, replacement_block) {
    return {
        repaletter: {
            type: 'blueprint:simple',
            replaces_block: block_to_replace,
            replaces_with: replacement_block,
        },
        structures: structure,
    };
}

ServerEvents.highPriorityData( (event) => {
    for (let [structure, swaps] of Object.entries(structure_repaletter)) {
        if (!Array.isArray(swaps)) {
            swaps = [swaps];
        }

        for (let swap of swaps) {
            let name = structure.split(':')[1];
            let data = Object.entries(swap)[0];

            let replaces_block = data[0];
            let replaces_block_name = replaces_block.split(':')[1];

            let replaces_with = data[1];
            let replaces_with_name = replaces_with.split(':')[1];

            event.addJson(
                `terraimmundus:blueprint/structure_repaletters/replace_${replaces_block_name}_with_${replaces_with_name}_in_${name}.json`,
                createSimpleRepaletterData(structure, replaces_block, replaces_with),
            );
        }
    }
});
