// priority: 100

const $BlockInfestationSystem = Java.loadClass(
    'com.github.sculkhorde.systems.infestation_systems.block_infestation_system.BlockInfestationSystem'
);
const $HitResultType = Java.loadClass(
    'net.minecraft.world.phys.HitResult$Type'
);
const $FireRoundEntity = Java.loadClass(
    'top.ribs.scguns.entity.projectile.FireRoundEntity'
);
const $CursorSurfacePurifierEntity = Java.loadClass(
    'com.github.sculkhorde.common.entity.infection.CursorSurfacePurifierEntity'
);
const $MobEffectInstance = Java.loadClass(
    'net.minecraft.world.effect.MobEffectInstance'
);
const $ModMobEffects = Java.loadClass(
    'com.github.sculkhorde.core.ModMobEffects'
);

const $EntityAlgo = Java.loadClass(
    'com.github.sculkhorde.util.EntityAlgorithms'
);

const $BladeOfPurity = Java.loadClass(
    'com.github.sculkhorde.common.item.BladeOfPurityItem'
);

const $Tiers = Java.loadClass('net.minecraft.world.item.Tiers');

const $ItemProperties = Java.loadClass(
    'net.minecraft.world.item.Item$Properties'
);

const $Rarity = Java.loadClass('net.minecraft.world.item.Rarity');

const $LivingEntity = Java.loadClass('net.minecraft.world.entity.LivingEntity');
const $ItemEntity = Java.loadClass('net.minecraft.world.entity.item.ItemEntity');
const $ModSavedData = Java.loadClass('com.github.sculkhorde.core.ModSavedData');
const $SculkHorde = Java.loadClass('com.github.sculkhorde.core.SculkHorde');
const $Player = Java.loadClass('net.minecraft.world.entity.player.Player');

const NEW_RAW_NUGGET_MATERIALS = [
    'anthralite',
    'zinc',
    'nickel',
    'tin',
    'silver',
];

const NEW_ROUGH_GEMS = ['ruby', 'sapphire', 'cinnabar', 'apatite'];

const NEW_DUST_DEF = {
    //anthralite: 'Anthralite Dust',
    zinc: 'Zinc Dust',
    diamond_steel: 'Diamond Steel Blend',
    treated_brass: 'Treated Brass Blend',
    scorched: 'Damascus Steel Blend',
    brass: 'Brass Blend',
    spinel: 'Spinel Dust',
    necromium: 'Necromium Blend',
    depleted_diamond_steel: 'Depleted Diamond Steel Blend',
};

//Purity weapons
const PURITY_WEAPON_DEFS = {
    greatsword: { damage: 13, name: 'Purebrand', speed: 0.8 },
    halberd: { damage: 8, name: 'Purity Harbinger', speed: 1.3 },
    hammer: { damage: 10, name: 'Pure Mallet', speed: 1.1 },
    katana: { damage: 6, name: 'Onimaru', speed: 1.8 },
    rapier: { damage: 5, name: 'Purified Needle', speed: 2 },
    scythe: { damage: 9, name: 'Holy Reaper', speed: 1.2 },
    warglaive: { damage: 5, name: 'Edges of Salvation', speed: 2.1 },
    mace: { damage: 9, name: 'Morning Star', speed: 1.2 },
    spear: { damage: 6, name: 'Tipping Point', speed: 1.7 },
};

const WEAPON_DEFS = {
    //+0.5 damage - doesn't actually work at registry, see below on the modification event.
    anthralite: {
        greatsword: { damage: 11, durability: 600 },
        halberd: { damage: 7, durability: 600 },
        hammer: { damage: 9, durability: 600 },
        katana: { damage: 5, durability: 600 },
        rapier: { damage: 4, durability: 600 },
        scythe: { damage: 8, durability: 600 },
        warglaive: { damage: 4, durability: 600 },
        mace: { damage: 8, durability: 600 },
        spear: { damage: 5, durability: 600 },
    },
    tin: {
        greatsword: { damage: 11, durability: 800, speed: 0.2, name: "Titanium Greatsword" },
        halberd: { damage: 7, durability: 800, speed: 0.2, name: "Titanium Halberd" },
        hammer: { damage: 9, durability: 800, speed: 0.2, name: "Titanium Hammer" },
        katana: { damage: 5, durability: 800, speed: 0.2, name: "Titanium Katana" },
        rapier: { damage: 4, durability: 800, speed: 0.2, name: "Titanium Rapier" },
        scythe: { damage: 8, durability: 800, speed: 0.2, name: "Titanium Scythe" },
        warglaive: { damage: 4, durability: 800, speed: 0.2, name: "Titanium Warglaive" },
        mace: { damage: 8, durability: 800, speed: 0.2, name: "Titanium Mace" },
        spear: { damage: 5, durability: 800, speed: 0.2, name: "Titanium Spear" },
    },
};

const NECROMIUM_TIER = Java.loadClass('com.teamabnormals.caverns_and_chasms.core.other.CCTiers').CCItemTiers.NECROMIUM
const SILVER_TIER = Java.loadClass('com.teamabnormals.caverns_and_chasms.core.other.CCTiers').CCItemTiers.SILVER

const UNCOMMON_ITEMS = [
    'minecraft:netherite_block',
    'supplementaries:netherite_door',
    'supplementaries:netherite_trapdoor',
    'minecraft:ancient_debris',
    'minecraft:netherite_shovel',
    'minecraft:netherite_pickaxe',
    'minecraft:netherite_axe',
    'minecraft:netherite_hoe',
    'minecraft:netherite_sword',
    'minecraft:netherite_helmet',
    'minecraft:netherite_chestplate',
    'minecraft:netherite_leggings',
    'minecraft:netherite_boots',
    'caverns_and_chasms:netherite_horse_armor',
    'moonsweaponry:netherite_greatsword',
    'moonsweaponry:netherite_halberd',
    'moonsweaponry:netherite_hammer',
    'moonsweaponry:netherite_katana',
    'moonsweaponry:netherite_rapier',
    'moonsweaponry:netherite_scythe',
    'moonsweaponry:netherite_warglaive',
    'moonsweaponry:netherite_mace',
    'moonsweaponry:netherite_spear',
    'caverns_and_chasms:netherite_nugget',
    'minecraft:netherite_scrap',
    'minecraft:netherite_ingot',
    'minecraft:netherite_upgrade_smithing_template',
    'thermal:netherite_dust',
    'thermal:netherite_gear',
    'thermal:netherite_plate',
    'thermal:netherite_coin',
    'scguns:netherite_respirator',
    'scguns:netherite_bayonet',
    'farmersdelight:netherite_knife',
    'scguns:mokova',
    'scguns:mak_mkii',
    'scguns:railworker',
    'scguns:turnpike',
    'scguns:killer_23',
    'scguns:homemaker',
    'scguns_cnc:fusillade',
    'scguns:kalaskah',
    'scguns:basker',
    'scguns:tl_runner',
    'scguns:stigg',
    'thermal:steel_block',
    'thermal:steel_ingot',
    'thermal:steel_nugget',
    'thermal:steel_dust',
    'thermal:steel_gear',
    'thermal:steel_plate',
    'thermal:steel_coin',
    'scguns:treated_iron_lamp',
    'scguns:treated_iron_bars',
    'scguns:treated_iron_grate',
    'scguns:treated_iron_grate_pane',
    'scguns:treated_iron_gun_frame',
    'kubejs:steel_gun_barrel',
    'kubejs:steel_heavy_gun_barrel',
    'caverns_and_chasms:necromium_block',
    'caverns_and_chasms:necromium_shovel',
    'caverns_and_chasms:necromium_pickaxe',
    'caverns_and_chasms:necromium_axe',
    'caverns_and_chasms:necromium_hoe',
    'caverns_and_chasms:necromium_sword',
    'caverns_and_chasms:necromium_helmet',
    'caverns_and_chasms:necromium_chestplate',
    'caverns_and_chasms:necromium_leggings',
    'caverns_and_chasms:necromium_boots',
    'caverns_and_chasms:necromium_horse_armor',
    'caverns_and_chasms:necromium_nugget',
    'caverns_and_chasms:necromium_ingot',
    'scguns_cnc:small_necromium_casing',
    'scguns_cnc:medium_necromium_casing',
    'scguns_cnc:necromium_gun_frame',
    'abnormals_delight:necromium_knife',
    'kubejs:necromium_dust',
    'kubejs:necromium_greatsword',
    'kubejs:necromium_halberd',
    'kubejs:necromium_hammer',
    'kubejs:necromium_katana',
    'kubejs:necromium_rapier',
    'kubejs:necromium_scythe',
    'kubejs:necromium_warglaive',
    'kubejs:necromium_mace',
    'kubejs:necromium_spear',
    'scguns:treated_brass_tiles_stairs',
    'scguns:treated_brass_tiles_slab',
    'scguns:chiseled_treated_brass_block',
    'scguns:treated_brass_lamp',
    'scguns:treated_brass_grate',
    'scguns:treated_brass_grate_pane',
    'scguns:treated_brass_boots',
    'scguns:treated_brass_leggings',
    'scguns:treated_brass_chestplate',
    'scguns:treated_brass_helmet',
    'v_slab_compat:scguns/treated_brass_tiles_vertical_slab',
    'v_slab_compat:scguns/cut_treated_brass_vertical_slab',
    'scguns:treated_brass_tiles',
    'scguns:cut_treated_brass_slab',
    'scguns:cut_treated_brass_stairs',
    'scguns:cut_treated_brass',
    'scguns:treated_brass_plates',
    'scguns:treated_brass_block',
    'kubejs:treated_brass_dust',
    'scguns:treated_brass_gun_frame',
    'scguns:treated_brass_ingot',
    'v_slab_compat:scguns/cut_diamond_steel_vertical_slab',
    'v_slab_compat:scguns/diamond_steel_tiles_vertical_slab',
    'scguns:diamond_steel_ingot',
    'scguns:small_diamond_steel_casing',
    'scguns:medium_diamond_steel_casing',
    'scguns:diamond_steel_gun_frame',
    'scguns:diamond_steel_block',
    'scguns:diamond_steel_panel',
    'scguns:chiseled_diamond_steel_block',
    'scguns:diamond_steel_tiles',
    'scguns:diamond_steel_tiles_stairs',
    'scguns:diamond_steel_tiles_slab',
    'scguns:cut_diamond_steel',
    'scguns:cut_diamond_steel_stairs',
    'scguns:cut_diamond_steel_slab',
    'scguns:diamond_steel_lamp',
    'scguns:diamond_steel_pillar',
    'scguns:diamond_steel_bars',
    'scguns:diamond_steel_grate',
    'scguns:diamond_steel_grate_pane',
    'kubejs:diamond_steel_dust',
    'sculkhorde:essence_of_purity',
    'sculkhorde:pure_souls',
    'sculkhorde:infestation_ward_block',
    'puritytemplate:purity_upgrade_smithing_template',
    'scguns:diamond_steel_helmet',
    'scguns:diamond_steel_chestplate',
    'scguns:diamond_steel_leggings',
    'scguns:diamond_steel_boots',
    'scguns:stiletto',
];

const SCULK_ITEMS = [
    'sculkhorde:sculk_sweeper_sword',
    'sculkhorde:diascite_axe',
    'sculkhorde:diascite_pickaxe',
    'sculkhorde:ferriscite_hoe',
    'sculkhorde:ferriscite_shovel',
    'sculkhorde:ferriscite_axe',
    'sculkhorde:ferriscite_pickaxe',
    'sculkhorde:diascite',
    'sculkhorde:ferriscite',
    'sculkhorde:depleted_soulite_block',
    'sculkhorde:soulite_block',
    'sculkhorde:budding_soulite_block',
    'sculkhorde:soulite_core_block',
    'sculkhorde:soulite_shard',
    'sculkhorde:chunk_o_brain',
    'sculkhorde:soulite_bud_block',
    'sculkhorde:soulite_cluster',
    'sculkhorde:deep_green_music_disc',
    'sculkhorde:blind_and_alone_music_disc',
    'sculkhorde:diascite_hoe',
    'sculkhorde:diascite_shovel',
];

const EPIC_ITEMS = [
    'caverns_and_chasms:zirconia',
    'caverns_and_chasms:zirconia_lamp',
    'caverns_and_chasms:zirconia_block',
];

const SCORCHED_RARITY = ['kubejs:scorched_dust'];

global.REPAIR_DEFS = {
    //repair item/tag: 
}