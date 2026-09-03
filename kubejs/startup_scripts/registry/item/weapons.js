// priority: -100

StartupEvents.registry('item', (event) => {

    for (const [material, defs] of Object.entries(WEAPON_DEFS)) {
        for (const [type, stats] of Object.entries(defs)) {
            let item = event.create(`${material}_${type}`, 'sword');
            item.attackDamageBonus(0);

            switch (material) {
                case 'necromium':
                    item.tier(NECROMIUM_TIER);
                    item.attackDamageBaseline(stats.damage - 5);

                    break;
                case 'purity':
                    item.tier('netherite');
                    item.attackDamageBaseline(stats.damage - 5);
                    break;
                case 'silver':
                    item.tier(SILVER_TIER);
                    item.attackDamageBaseline(stats.damage - 3);

                    break;
                case 'anthralite':
                    item.tier('anthralite')

                    item.attackDamageBaseline(stats.damage - 3);
                    break;
                case 'tin':
                    item.tier('tin');
                    item.attackDamageBaseline(stats.damage - 3);
                    break;
            }

            let speed = stats.speed;

            if (speed == undefined) {
                speed = 0
            }

            switch (type) {
                case 'greatsword':
                    item.speedBaseline(0.8 - 4 + speed);
                    break;
                case 'halberd':
                    item.speedBaseline(1.3 - 4 + speed);
                    break;
                case 'hammer':
                    item.speedBaseline(1.1 - 4 + speed);
                    break;
                case 'katana':
                    item.speedBaseline(1.8 - 4 + speed);
                    break;
                case 'rapier':
                    item.speedBaseline(2 - 4 + speed);
                    break;
                case 'scythe':
                    item.speedBaseline(1.2 - 4 + speed);
                    break;
                case 'warglaive':
                    item.speedBaseline(2.1 - 4 + speed);
                    break;
                case 'mace':
                    item.speedBaseline(1.2 - 4 + speed);
                    break;
                case 'spear':
                    item.speedBaseline(1.7 - 4 + speed);
                    break;
            }

            if (stats.durability !== undefined) {
                item.maxDamage(stats.durability);
            }

            item.maxStackSize(1);
            item.tag('terraimmundus:' + type + 's');

            if (type != 'rapier') {
                GenerateModelData(
                    type,
                    material,
                    material == 'necromium' || material == 'purity' || material == `anthralite`
                        ? true
                        : false
                );
            }

            if (stats.name !== undefined) {
                item.displayName(stats.name);
            }

            if (material == 'purity') {
                item.rarity('epic');
            }
        }
    }
});

function GenerateModelData(type, material, use_netherite) {
    let basic_item_model = {
        parent: 'minecraft:item/handheld',
        textures: {
            layer0: `kubejs:item/${material}_${type}`,
        },
    };

    let item_model = {
        parent: 'minecraft:item/handheld',
        loader: 'forge:separate_transforms',
        textures: {
            layer0: `kubejs:item/${material}_${type}`,
        },
        base: {
            parent: `kubejs:item/${material}_${type}_handheld`,
        },
        perspectives: {
            gui: basic_item_model,
            fixed: basic_item_model,
            ground: basic_item_model,
        },
    };

    let held_model = {
        parent: `moonsweaponry:item/iron_${type}_handheld`,
        textures: {
            layer0: `kubejs:item/${material}_${type}_handheld`,
            0: `kubejs:item/${material}_${type}_handheld`,
            particle: `kubejs:item/${material}_${type}_handheld`,
        },
    };

    if (use_netherite) {
        held_model = {
            parent: `moonsweaponry:item/netherite_${type}_handheld`,
            textures: {
                layer0: `kubejs:item/${material}_${type}_handheld`,
                0: `kubejs:item/${material}_${type}_handheld`,
                particle: `kubejs:item/${material}_${type}_handheld`,
            },
        };
    }

    //WINDOWS FUCKING DEFENDER IS DELETING THIS FILE BECAUSE OF THESE.
    JsonIO.write(
        `kubejs/assets/kubejs/models/item/${material}_${type}_handheld.json`,
        held_model
    );
    JsonIO.write(
        `kubejs/assets/kubejs/models/item/${material}_${type}.json`,
        item_model
    );
}
