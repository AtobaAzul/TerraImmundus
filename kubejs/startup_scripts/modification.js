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
                item.setAttackDamage(damage - 1 + 0.5); //-1 becuase for some reason the actual damage number in-game is 1 higher.
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

});


