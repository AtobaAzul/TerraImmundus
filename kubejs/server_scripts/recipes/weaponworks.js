ServerEvents.recipes((e) => {
    e.remove({ id: 'puritytemplate:smithing/blade_of_purity' })

    e.remove({ id: /ccww:necromium_.*/ })

    let weapon_types = [
        'greatsword',
        'halberd',
        'hammer',
        'katana',
        'rapier',
        'scythe',
        'warglaive',
        'mace',
        'spear',
    ].forEach((type) => {
        e.smithing(
            `ccww:necromium_${type}`,
            'minecraft:netherite_upgrade_smithing_template',
            ['moonsweaponry:diamond_' + type, 'kubejs:anthralite_' + type],
            '#forge:ingots/necromium'
        );

        e.smithing(
            `ccww:silver_${type}`,
            'minecraft:leather',
            ['moonsweaponry:iron_' + type, '#ccww:copper_' + type],
            '#forge:ingots/silver'
        );

        e.smithing(
            `moonsweaponry:golden_${type}`,
            'minecraft:leather',
            ['moonsweaponry:iron_' + type, '#ccww:copper_' + type],
            '#forge:ingots/gold'
        );

        e.smithing(
            `kubejs:tin_${type}`,
            'minecraft:leather',
            ['moonsweaponry:diamond_' + type, 'kubejs:anthralite_' + type],
            'caverns_and_chasms:tin_block'
        );

        e.smithing(
            `kubejs:purity_${type}`,
            'puritytemplate:purity_upgrade_smithing_template',
            [`moonsweaponry:netherite_${type}`, 'kubejs:necromium_' + type],
            'sculkhorde:soulite_shard'
        );
    });

    e.remove({ id: 'sculkhorde:blade_of_purity' });
    e.smithing(
        `sculkhorde:blade_of_purity`,
        'puritytemplate:purity_upgrade_smithing_template',
        [`netherite_sword`, 'caverns_and_chasms:necromium_sword'],
        'sculkhorde:soulite_shard'
    );

    

});
