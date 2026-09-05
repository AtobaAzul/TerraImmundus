ServerEvents.recipes((e) => {
    e.remove({id: 'puritytemplate:smithing/blade_of_purity'})

    e.remove({id: /ccww:necromium_.*/})

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
            ['moonsweaponry:diamond_' + type, 'kubejs:tin_' + type],
            '#forge:ingots/necromium'
        );
        e.smithing(
            `kubejs:anthralite_${type}`,
            'minecraft:leather',
            'moonsweaponry:iron_' + type,
            '#forge:ingots/anthralite'
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

    //tin is a bit different
    e.shaped(`kubejs:tin_greatsword`, [' A ', ' A ', 'ABA'], {
        A: 'caverns_and_chasms:tin_ingot',
        B: '#forge:rods/wooden',
    });

    e.shaped(`kubejs:tin_halberd`, ['  A', ' BA', 'B  '], {
        A: 'caverns_and_chasms:tin_ingot',
        B: '#forge:rods/wooden',
    });

    e.shaped(`kubejs:tin_hammer`, [' AA', ' BA', 'B  '], {
        A: 'caverns_and_chasms:tin_ingot',
        B: '#forge:rods/wooden',
    });

    e.shaped(`kubejs:tin_katana`, ['  A', ' A ', 'B  '], {
        A: 'caverns_and_chasms:tin_ingot',
        B: '#forge:rods/wooden',
    });

    e.shaped(`kubejs:tin_rapier`, ['BAA'], {
        A: 'caverns_and_chasms:tin_ingot',
        B: '#forge:rods/wooden',
    });

    e.shaped(`kubejs:tin_scythe`, [' AA', ' BA', 'B A'], {
        A: 'caverns_and_chasms:tin_ingot',
        B: '#forge:rods/wooden',
    });

    e.shaped(`kubejs:tin_warglaive`, ['  A', ' BA', 'AA '], {
        A: 'caverns_and_chasms:tin_ingot',
        B: '#forge:rods/wooden',
    });

    e.shaped(`kubejs:tin_mace`, [' A ', 'ABA', ' B '], {
        A: 'caverns_and_chasms:tin_ingot',
        B: '#forge:rods/wooden',
    });

    e.shaped(`kubejs:tin_spear`, ['  A', ' B ', 'B  '], {
        A: 'caverns_and_chasms:tin_ingot',
        B: '#forge:rods/wooden',
    });
});
