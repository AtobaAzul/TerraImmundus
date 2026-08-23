
function randomColorNbt() {
    let randomColor = Math.floor(Math.random() * 16777215).toString(16)
    let decimal = parseInt(randomColor, 16)
    return `display:{color:${decimal}}`
}

LootJS.modifiers((e) => {
    e.addLootTypeModifier(LootType.CHEST)
        .replaceLoot(
            'minecraft:diamond',
            'minecraft:emerald',
        )
        .replaceLoot(
            'minecraft:ancient_debris',
            'minecraft:netherite_scrap',
        );

    DIAMOND_STUFF.forEach((loot) => {
        e.addLootTypeModifier(LootType.CHEST)
            .not((n) => {
                n.biome('minecraft:deep_dark');
            })
            .not((n) => {
                n.anyStructure(
                    [
                        '#betterstrongholds:better_strongholds',
                    ],
                    false,
                );
            })
            .anyDimension('minecraft:overworld')
            .modifyLoot(Item.of(loot), (item) => {
                item.setDamageValue(
                    Math.floor(item.getMaxDamage() * 0.9),
                );

                return item;
            });
    });

    e.addLootTableModifier(/.*/)
        .removeLoot('scguns:blueprint_scrap')
        .removeLoot(/.*_flare/);

    e.addBlockLootModifier(
        'overworldquartzore:quartz_ore',
    ).replaceLoot(
        'overworldquartzore:quartz_fragment',
        'quartz',
    );
    e.addBlockLootModifier(
        'overworldquartzore:deepslate_quartz_ore',
    ).replaceLoot(
        'overworldquartzore:quartz_fragment',
        'quartz',
    );

    e.addLootTableModifier(/.*/).replaceLoot(
        'scguns:diamond_steel_blend',
        'lapis_lazuli',
    );
    e.addLootTableModifier(/.*/).replaceLoot(
        'scguns:treated_iron_blend',
        'scguns:anthralite_ingot',
    );

    e.addLootTableModifier(/.*/).replaceLoot(
        'scguns:sulfur_chunk',
        'thermal:sulfur',
    );

    e.addLootTableModifier(/.*/).replaceLoot(
        'scguns:sulfur_dust',
        'thermal:sulfur_dust',
    );

    e.addLootTableModifier(/.*/).removeLoot(
        'relics:arrow_quiver',
    );

    //redo sniffer loot
    e.addLootTableModifier(
        'minecraft:gameplay/sniffer_digging',
    )
        .removeLoot(ItemFilter.ALWAYS_TRUE)
        .addWeightedLoot(
            [1, 2],
            [
                'quark:ancient_sapling',
                'minecraft:torchflower_seeds',
                'minecraft:pitcher_pod',
                'farmersrespite:coffee_berries',
                'minecraft:nether_wart',
                'farmersrespite:tea_seeds',
            ],
        );

    e.addLootTableModifier(
        'minecraft:gameplay/sniffer_digging',
    ).apply((ctx) => {
        let block = ctx.level.getBlock(
            ctx.getBlockPos().below(),
        ).id;
        if (block == 'minecraft:grass') {
            ctx.addLoot(Item.of('minecraft:seeds'));
        }
    });

    e.addLootTableModifier(/.*/).removeLoot(
        'relics:infinity_ham',
    );

    e.addLootTableModifier(
        'minecraft:gameplay/sniffer_digging',
    )
        .randomChance(0.1)
        .addWeightedLoot(AVAILABLE_RELICS);

    e.addEntityLootModifier(
        'sculkhorde:sculk_enderman',
    ).addWeightedLoot([1, 3], ['echo_shard']);

    e.addEntityLootModifier(SCULK_ENTITIES).addWeightedLoot(
        [0, 2],
        ['sob:sculk_tendril'],
    );

    //wtf???? I updated SH and pig sstarted dropping sculk???
    e.addEntityLootModifier('minecraft:pig').removeLoot(
        'sob:sculk_tendril',
    );

    let template_loot_tables = [
        'minecraft:chests/village/village_armorer',
        'minecraft:chests/village/village_weaponsmith',
        'minecraft:chests/village/village_toolsmith',
    ].forEach((table) => {
        e.addLootTableModifier(table).addWeightedLoot(
            [0, 2],
            [
                'minecraft:netherite_upgrade_smithing_template',
            ],
        );
    });

    e.addLootTypeModifier(LootType.CHEST)
        .randomChance(0.1)
        .replaceLoot(
            '#minecraft:saplings',
            'thermal:rubberwood_sapling',
        );

    let archaelogy_loot = AVAILABLE_RELICS;
    archaelogy_loot.push(
        Item.of('caverns_and_chasms:zirconia'),
    );

    e.addLootTableModifier(/.*archaelogy.*/)
        .randomChance(0.25)
        .removeLoot(ItemFilter.ALWAYS_TRUE)
        .addWeightedLoot(archaelogy_loot);

    e.addLootTableModifier(
        'minecraft:chests/village/village_armorer',
    )
        .randomChance(0.25)
        .addWeightedLoot(
            [0, 1],
            [
                'minecraft:wayfinder_armor_trim_smithing_template',
                'minecraft:raiser_armor_trim_smithing_template',
                'minecraft:shaper_armor_trim_smithing_template',
                'minecraft:host_armor_trim_smithing_template',
                'minecraft:rib_armor_trim_smithing_template',
                'caverns_and_chasms:exile_armor_trim_smithing_template',
                'minecraft:snout_armor_trim_smithing_template',
                'minecraft:eye_armor_trim_smithing_template',
                'minecraft:spire_armor_trim_smithing_template',
            ],
        );

    e.addLootTableModifier(
        'betterjungletemples:chests/treasure',
    ).addLoot('sniffer_egg');

    e.addLootTableModifier(/.*/).replaceLoot(
        'supplementaries:rope',
        'farmersdelight:rope',
    );

    e.addLootTableModifier(
        'betterstrongholds:chests/armoury',
    )
        .randomChance(0.1)
        .addLoot('alexsmobs:mimicream');

    //caravan loot

    //general
    e.addLootTableModifier(/classic_caravans:cargo\/.*/)
        .randomChance(0.15)
        .addLoot('caverns_and_chasms:zirconia');

    e.addLootTableModifier(/classic_caravans:cargo\/.*/)
        .randomChance(0.1)
        .addWeightedLoot(archaelogy_loot);

    e.addLootTableModifier(
        'caravans:caravans/cargo/exotics',
    )
        .addAlternativesLoot(
            LootEntry.of('quark:ancient_sapling').when(
                (c) => c.randomChance(0.2),
            ),
            LootEntry.of('nether_wart').when((c) =>
                c.randomChance(0.2),
            ),
            LootEntry.of('pitcher_pod').when((c) =>
                c.randomChance(0.2),
            ),
            LootEntry.of('torchflower_seeds').when((c) =>
                c.randomChance(0.2),
            ),
            LootEntry.of(
                'supplementaries:antique_ink',
            ).when((c) => c.randomChance(0.5)),
            LootEntry.of(Item.of('glow_ink_sack', 4)).when(
                (c) => c.randomChance(0.5),
            ),
            LootEntry.of(
                'upgrade_aquatic:trasher_tooth',
            ).when((c) => c.randomChance(0.3)),
            LootEntry.of(Item.of('trident')).when((c) =>
                c.randomChance(0.2),
            ),
        )
        .matchLoot('minecraft:trident')
        .damage([0.3, 0.5])
        .enchantRandomly();

    e.addLootTableModifier(
        'caravans:caravans/cargo/fur',
    ).addWeightedLoot([3, 5], true, [
        'alexsmobs:kangaroo_hide',
        'rabbit_hide',
        'alexsmobs:bison_fur',
        'environmental:yak_hair',
    ]);

    e.addLootTableModifier(
        'caravans:caravans/cargo/fish',
    ).addWeightedLoot([5, 10], true, [
        'salmon',
        'miners_delight:squid',
    ]);

    e.addLootTableModifier(
        'caravans:caravans/cargo/clay',
    ).addWeightedLoot([10, 16], true, ['nether_brick']);

    e.addLootTableModifier(
        'caravans:caravans/cargo/alchemy',
    )
        .addWeightedLoot([2, 8], true, [
            'ghast_tear',
            'blaze_powder',
            'nether_wart',
            'dragon_breath',
            'sculkhorde:essence_of_purity',
        ])
        .addWeightedLoot([8, 16], true, [
            'minecraft:glass_bottle',
        ]);

    e.addLootTableModifier(
        'caravans:caravans/cargo/sugar_cane',
    ).addWeightedLoot([5, 10], true, [
        'supplementaries:candy',
        'honey_bottle',
        'honeycomb',
    ]);

    e.addLootTableModifier(
        'caravans:caravans/cargo/harvest',
    ).addWeightedLoot([8, 16], true, [
        'supplementaries:flax',
        'farmersdelight:rice',
        'farmersdelight:cabbage',
        'farmersdelight:tomato',
        'farmersdelight:onion',
        'sob:peanut',
    ]);

    e.addLootTableModifier(
        'caravans:caravans/cargo/cocoa',
    ).addWeightedLoot([8, 16], true, [
        'farmersrespite:black_tea_leaves',
        'farmersrespite:yellow_tea_leaves',
        'farmersrespite:green_tea_leaves',
        'farmersrespite:tea_seeds',
        'farmersrespite:coffee_beans',
        'brewinandchewin:cocoa_fudge',
    ]);

    e.addEntityLootModifier('magma_cube')
        .randomChanceWithLooting(0.1, 3)
        .addLoot('magma_cream');

    e.addLootTableModifier(/.*/).modifyLoot(
        ItemFilter.ALWAYS_TRUE,
        (item) => {
            for (const [
                base,
                replaceable,
            ] of Object.entries(WEAPON_MAP)) {
                if (item.id === base) {
                    let nbt = item.nbt;
                    return Item.of(
                        replaceable[
                        Math.floor(
                            Math.random() *
                            replaceable.length,
                        )
                        ],
                        1,
                        nbt,
                    );
                }
            }
            return item;
        },
    );

    e.addLootTableModifier(/.*/)
        .removeLoot('scguns:gun_parts_mold')
        .removeLoot('scguns:large_casing_mold')
        .removeLoot('scguns:blaze_fuel')
        .replaceLoot(
            'scguns:medium_brass_casing',
            'scguns:medium_copper_casing',
        )
        .replaceLoot(
            'scguns:small_brass_casing',
            'scguns:small_copper_casing',
        );

    e.addBlockLootModifier('scguns:supply_crate')
        .replaceLoot(
            'scguns:compact_advanced_round',
            'scguns:compact_copper_round',
        )
        .replaceLoot(
            'scguns:advanced_round',
            'scguns:standard_copper_round',
        )
        .replaceLoot(
            'scguns:ramrod_round',
            'scguns:powder_and_ball',
        )
        .replaceLoot('scguns:microjet', 'scguns:grapeshot');

    e.addBlockLootModifier('scguns:ancient_brass_block')
        .removeLoot(/.*/)
        .addWeightedLoot([1, 3], true, [
            'scguns:ancient_brass',
        ]);

    e.addBlockLootModifier(
        'supplementaries:wild_flax',
    ).addLoot('supplementaries:flax');

    e.addBlockLootModifier(
        'thermal:sapphire_ore',
    ).replaceLoot(
        'thermal:sapphire',
        'caverns_and_chasms:zirconia',
    );
    e.addBlockLootModifier(
        'thermal:deepslate_sapphire_ore',
    ).replaceLoot(
        'thermal:sapphire',
        'caverns_and_chasms:zirconia',
    );

    e.addLootTableModifier(/.*/).replaceLoot(
        'caverns_and_chasms:tin_ingot',
        'caverns_and_chasms:raw_tin',
    );

    const AMMO_DROP_BLACKLIST = [
        "scguns_cnc:hunger",
        "scguns_cnc:pulse_core"
    ]

    e.addLootTableModifier(/.*/).apply((ctx) => {
        /** @type { Internal.ItemStack} */
        let holdingGun = undefined;


        if (!ctx.entity || ctx.getPlayer() == ctx.entity) return;

        //check if the entity is holding a gun
        ctx.entity.handSlots.forEach((slot) => {
            if (slot.getItem() instanceof $GunItem) {
                holdingGun = slot;
            }
        });

        if (holdingGun) {
            /** @type { Internal.GunItem} */
            let gunItem = holdingGun.getItem();

            //get the reload item
            let ammoItem = gunItem.getGun().getReloads().getReloadItem().id;

            if (AMMO_DROP_BLACKLIST.includes(ammoItem)) {
                return;
            }

            //remove arrows, if there's any.
            ctx.removeLoot('#minecraft:arrows');

            //add it to the loot table
            ctx.addLoot(LootEntry.of(Item.of(ammoItem), Math.floor(Math.random() * 5) + 2)); //with some randomization
        }
    });

    e.addEntityLootModifier('sculkhorde:sculk_witch').randomChance(0.5).addLoot('alexsmobs:soul_heart')
    e.addEntityLootModifier('minecraft:wither_skeleton').randomChance(0.1).addLoot('alexsmobs:bone_serpent_tooth')
    e.addLootTableModifier('minecraft:chests/ancient_city').randomChance(0.5).addLoot('alexsmobs:soul_heart')

    const randomWeapons = [
        'moonsweaponry:stone_greatsword',
        'moonsweaponry:stone_halberd',
        'moonsweaponry:stone_hammer',
        'moonsweaponry:stone_katana',
        'moonsweaponry:stone_rapier',
        'moonsweaponry:stone_scythe',
        'moonsweaponry:stone_spear',
        'minecraft:stone_sword',
    ];

    e.addLootTableModifier('minecraft:chests/spawn_bonus_chest')
        .removeLoot(ItemFilter.ALWAYS_TRUE)
        .addLoot([
            'minecraft:stone_pickaxe',
            'minecraft:stone_axe',
            'farmersdelight:flint_knife',
            'grapplemod:grapplinghook',
        ])
        .addWeightedLoot([12, 24], true, [
            Item.of('minecraft:bread').withChance(60),
            Item.of('minecraft:torch').withChance(40),
        ])
        .addWeightedLoot(1, false, [
            Item.of('scguns:musket').withChance(60),
            Item.of('scguns:longarm').withChance(60),
        ])
        .addWeightedLoot([24, 32], true, [
            Item.of('scguns:powder_and_ball')
        ])
        .addLoot('minecraft:map')
        .functions('minecraft:map', (f) => {
            f.customFunction({
                function: 'minecraft:exploration_map',
                decoration: 'red_x',
                destination: 'nova_structures:tavern',
                zoom: 2,
                skip_existing_chunks: false,
            });
            f.customFunction({
                function: 'minecraft:set_name',
                name: 'Tavern Map',
            });
        })
        .apply((ctx) => {
            let armorColor = randomColorNbt()

            ctx.addLoot(
                Item.of(
                    'minecraft:leather_helmet',
                    `{${armorColor}}`,
                ),
            );
            ctx.addLoot(
                Item.of(
                    'minecraft:leather_chestplate',
                    `{${armorColor}}`,
                ),
            );
            ctx.addLoot(
                Item.of(
                    'minecraft:leather_leggings',
                    `{${armorColor}}`,
                ),
            );
            ctx.addLoot(
                Item.of(
                    'minecraft:leather_boots',
                    `{${armorColor}}`,
                ),
            );

            ctx.addLoot(randomWeapons[Math.floor(Math.random() * randomWeapons.length)]);

            ctx.addLoot(
                Item.of(
                    'minecraft:bundle',
                    `{${randomColorNbt()}}`,
                ),
            );
        })
})

