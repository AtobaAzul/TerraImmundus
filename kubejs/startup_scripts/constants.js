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
    //slowness infliction
    necromium: {
        greatsword: { damage: 13, durability: 2032 },
        halberd: { damage: 8, durability: 2032 },
        hammer: { damage: 10, durability: 2032 },
        katana: { damage: 6, durability: 2032 },
        rapier: { damage: 5, durability: 2032 },
        scythe: { damage: 9, durability: 2032 },
        warglaive: { damage: 5, durability: 2032 },
        mace: { damage: 9, durability: 2032 },
        spear: { damage: 6, durability: 2032 },
    },
    // -1 base damage compared to wood, BUT deals equal to iron wwith magic damage
    silver: {
        greatsword: { damage: 8, durability: 158 },
        halberd: { damage: 5, durability: 158 },
        hammer: { damage: 7, durability: 158 },
        katana: { damage: 3, durability: 158 },
        rapier: { damage: 2, durability: 158 },
        scythe: { damage: 6, durability: 158 },
        warglaive: { damage: 2, durability: 158 },
        mace: { damage: 6, durability: 158 },
        spear: { damage: 3, durability: 158 },
    },
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
