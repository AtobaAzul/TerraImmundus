ServerEvents.recipes((e) => {
    e.remove({ mod: 'pipez' });

    e.shaped('8x pipez:energy_pipe', [' A ', 'DDD', ' A '], {
        A: 'thermal:cured_rubber',
        D: 'minecraft:copper_ingot',
    });
    e.shaped('16x pipez:fluid_pipe', ['ABA'], {
        A: 'thermal:lead_ingot',
        B: 'thermal:lead_gear',
    });

    e.shaped('pipez:improved_upgrade', ['ABA', 'CDC', 'ABA'], {
        A: 'minecraft:lapis_lazuli',
        B: 'minecraft:glass',
        C: 'minecraft:redstone',
        D: 'thermal:lead_gear',
    });
    e.shaped('pipez:advanced_upgrade', ['ABA', 'CDC', 'ABA'], {
        A: 'minecraft:obsidian',
        B: 'minecraft:quartz',
        C: 'thermal:rose_gold_gear',
        D: 'pipez:improved_upgrade',
    });
    e.shaped('pipez:ultimate_upgrade', ['ABA', 'CDC', 'ABA'], {
        A: 'thermal:ruby',
        B: '#thermal:glass/hardened',
        C: 'thermal:emerald_gear',
        D: 'pipez:advanced_upgrade',
    });
    e.shaped('pipez:filter_destination_tool', ['AAA', 'BBB', 'ABA'], {
        A: 'thermal:iron_plate',
        B: 'minecraft:redstone',
    });
    e.shaped('pipez:wrench', [' A ', ' BA', 'B  '], {
        A: '#forge:ingots/silver',
        B: 'minecraft:stick',
    });

    e.shapeless('8x pipez:item_pipe', ['caverns_and_chasms:storage_duct'])

    e.shaped('caverns_and_chasms:storage_duct', ['AAA', 'A A', 'AAA'], {
        A: 'pipez:item_pipe',
    })

    e.shaped('16x pipez:item_pipe', ['ABA'], {
        A: 'caverns_and_chasms:tin_ingot',
        B: 'caverns_and_chasms:tin_block',
    })
});
