ServerEvents.tags('item', (event) => {
    event.add('forge:dusts/niter', 'scguns:niter_dust');
    event.remove('forge:dusts/niter', 'thermal:niter_dust');
    event.add('scguns:niter_glass', /.*niter_glass.*/);

    let dust_or = [
        'constantan',
        'signalum',
        'lumium',
        'enderium',
        'diamond_steel',
        'zinc',
        'brass',
        'scorched',
        'anthralite',
        'treated_brass',
        'iron',
        'copper',
        'gold',
        'silver',
        'netherite',
        'necromium',
        'constantan',
        'invar',
        'electrum',
        'bronze',
        'rose_gold',
        'steel',
        'nickel',
        'lead',
        'tin',
        'depleted_diamond_steel',
    ].forEach((material) => {
        event.add(
            `terraimmundus:dust_or_ingot/${material}`,
            new RegExp(`.*:${material}_(dust|ingot)`)
        );
        event.add(
            `forge:ingots/${material}`,
            new RegExp(`.*:${material}_ingot`)
        ); //because some of these aren't tagged!!
        event.add(`forge:dusts/${material}`, new RegExp(`.*:${material}_dust`));

        //small exclusion
        event.remove('terraimmundus:dust_or_ingot/tin', 'caverns_and_chasms:tin_ingot')
    });

    event.add('terraimmundus:dust_or_ingot/brass', ['scguns:ancient_brass']);

    event.add('terraimmundus:dust_or_ingot/quartz', [
        'quartz',
        'thermal:quartz_dust',
    ]);
    event.add('terraimmundus:dust_or_ingot/spinel', [
        'caverns_and_chasms:spinel',
        'kubejs:spinel_dust',
    ]);
    event.add('terraimmundus:dust_or_ingot/diamond', [
        'diamond',
        'thermal:diamond_dust',
    ]);
    event.add('forge:raw_materials', 'scbrass:raw_zinc');
    event.add('forge:raw_materials/zinc', 'scbrass:raw_zinc');

    event.add('scguns:standard_bullet_material', [
        'iron_ingot',
        'thermal:lead_ingot',
    ]);

    event.add('sculkhorde:infested_block', INFESTED_BLOCKS);

    event.add('forge:ores/zinc', [
        'scbrass:zinc_ore',
        'scbrass:deepslate_zinc_ore',
    ]);


    event.add('terraimmundus:swords', ['#minecraft:swords']);
    event.add('terraimmundus:greatswords', /.*greatsword.*/);
    event.add('terraimmundus:halberds', /.*halberd.*/);
    event.add('terraimmundus:hammers', /.*hammer.*/);
    event.add('terraimmundus:rapiers', /.*rapier.*/);
    event.add('terraimmundus:scythes', /.*scythe.*/);
    event.add('terraimmundus:spears', /.*spear.*/);
    event.add('terraimmundus:warglaives', /.*warglaive.*/);
    event.add('terraimmundus:katanas', /.*katana.*/);
    event.add('terraimmundus:maces', /.*mace.*/);

    event.remove('terraimmundus:hammers', 'kubejs:firing_hammer')

    event.remove('scguns:standard_bullet_material', /.*/);
    event.remove('scguns:advanced_bullet_material', /.*/);
    event.add('scguns:advanced_bullet_material', [
        '#forge:ingots/steel',
        '#forge:ingots/invar',
    ]);
    event.add('scguns:standard_bullet_material', [
        '#forge:ingots/anthralite',
        '#forge:ingots/lead',
    ]);

    event.remove('scguns:stan_bullet_tips', /.*/);
    event.add('scguns:stan_bullet_tips', [
        'scguns:standard_bullet',
    ]);
    event.remove('scguns:advanced_bullet_tips', /.*/);
    event.add('scguns:advanced_bullet_tips', ['scguns:hardened_bullet']);

    event.add('thermal:crafting/dies', /scguns:.*_mold/);

    event.add('forge:ingots/brass', 'scguns:ancient_brass');

    event.add('scguns:weak_compost', [
        'sob:sculk_tendril',
        'minecraft:moss_carpet',
    ]);

    let types = [
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
        event.add('terraimmundus:purity_weapon', `kubejs:purity_${type}`);
    });

    event.add('scguns:geothermal_vent_output', 'thermal:sulfur_dust');

    event.add('guardvillagers:convertible_guard_items', [
        '#scguns:antique_gun_tier',
        '#scguns:frontier_gun_tier',
        '#scguns:copper_gun_tier',
        '#scguns:iron_gun_tier',
        '#scguns:ocean_gun_tier',
        '#scguns:wrecker_gun_tier',
        '#scguns:diamond_steel_gun_tier',
        '#scguns:treated_brass_gun_tier',
        '#scguns:piglin_gun_tier',
        '#scguns:deep_dark_gun_tier',
        '#scguns:end_gun_tier',
        '#scguns:scorched_gun_tier',
    ]);

    event.add('scguns_cnc:increased_casing_drop_chance', ['scguns:small_diamond_steel_casing', 'scguns:medium_diamond_steel_casing', 'scguns:shulker_casing'])

    event.remove('forge:ingots/tin', 'caverns_and_chasms:tin_ingot')
    event.remove('forge:nuggets/tin', 'caverns_and_chasms:tin_nugget')
    event.remove('forge:storage_blocks/tin', 'caverns_and_chasms:tin_block')
    event.remove('forge:storage_blocks/raw_tin', 'caverns_and_chasms:raw_tin_block')
    event.remove('forge:raw_materials/tin', 'caverns_and_chasms:raw_tin')

    event.removeAllTagsFrom(/.*cc_compat.*/)
    event.removeAllTagsFrom(/.*ingot_placed.*/)

    event.add('caverns_and_chasms:slowness_inflicting_items', /kubejs:necromium.*/)
    event.remove('caverns_and_chasms:slowness_inflicting_items', 'kubejs:necromium_dust')

    event.add('terraimmundus:any_titanium_equipment', /kubejs:tin_.*/)
    event.remove('terraimmundus:any_titanium_equipment', 'kubejs:tin_dust')

    event.add('minecraft:soul_fire_base_blocks', ['thermal:sulfur', 'thermal:sulfur_dust'])

    event.add("scguns:firearm", ['#scguns:antique_gun_tier', '#scguns:frontier_gun_tier', '#scguns:copper_gun_tier', '#scguns:iron_gun_tier', '#scguns:ocean_gun_tier', '#scguns:wrecker_gun_tier', '#scguns:diamond_steel_gun_tier', '#scguns:gravekeeper_gun_tier', '#scguns:treated_brass_gun_tier', '#scguns:vault_gun_tier', '#scguns:piglin_gun_tier', ' #scguns:deep_dark_gun_tier', '#scguns:end_gun_tier', '#scguns:scorched_gun_tier'])

    event.add('terraimmundus:any_weapon', /(minecraft.*|moonsweaponry.*|kubejs.*)(.*katana.*|.*sword.*|.*scythe.*|.*rapier.*|.*halberd.*|.*warglaive.*|.*mace.*|.*hammer.*)/)
    event.remove('terraimmundus:any_weapon', 'kubejs:firing_hammer')

    event.add('terraimmundus:basic_dynamos', ['thermal:dynamo_gourmand', 'thermal:dynamo_stirling', 'thermal:dynamo_lapidary'])

    event.add('terraimmundus:any_anthralite_equipment', ['scguns:anthralite_pickaxe', 'scguns:anthralite_axe', 'scguns:anthralite_shovel', 'scguns:anthralite_hoe', 'scguns:anthralite_sword', 'scguns:anthralite_knife', 'scguns:anthralite_helmet', 'scguns:anthralite_boots', 'scguns:anthralite_chestplate', 'scguns:anthralite_leggings', 'scguns:anthralite_bayonet', 'kubejs:anthralite_greatsword', 'kubejs:anthralite_halberd', 'kubejs:anthralite_hammer', 'kubejs:anthralite_katana', 'kubejs:anthralite_rapier', 'kubejs:anthralite_scythe', 'kubejs:anthralite_warglaive', 'kubejs:anthralite_mace', 'kubejs:anthralite_spear'])

    event.removeAll('caverns_and_chasms:tin_ores')

    event.remove('forge:ores/tin', [
        'caverns_and_chasms:tin_ore',
        'caverns_and_chasms:deepslate_tin_ore',
        'caverns_and_chasms:cylindrite_tin_ore',
        'caverns_and_chasms:cassiterite_tin_ore'
    ])

    event.add('forge:ores/titanium', [
        'caverns_and_chasms:tin_ore',
        'caverns_and_chasms:deepslate_tin_ore',
        'caverns_and_chasms:cylindrite_tin_ore',
        'caverns_and_chasms:cassiterite_tin_ore',
    ])

    event.add('terraimmundus:any_necromium_equipment', ['#caverns_and_chasms:slowness_inflicting_items', /caverns_and_chasms:necromium_(helmet|chestplate|leggings|boots)/])


    event.add('terraimmundus:any_golden_apple', ['minecraft:enchanted_golden_apple', 'minecraft:golden_apple'])

    event.add('terraimmundus:any_augment', /thermal:.*augment.*/)

    event.add('terraimmundus:sculk_shrooms', ['sculkhorde:small_shroom', 'sculkhorde:sculk_shroom_culture'])

    event.add('terraimmundus:any_diamond_steel', ['scguns:diamond_steel_ingot', 'scguns:depleted_diamond_steel_ingot'])

    event.add('terraimmundus:any_copper_equipment', /caverns_and_chasms:.*copper_(axe|sword|pickaxe|shovel|hoe|helmet|chestplate|leggings|boots)/)

    event.add('terraimmundus:any_item_disc', ['refinedstorage:1k_storage_disk', 'refinedstorage:4k_storage_disk', 'refinedstorage:16k_storage_disk'])
});