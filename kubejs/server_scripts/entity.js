EntityEvents.death('skeleton', (event) => {
    if (event.getSource().getType() == 'lava') {
        let { x, y, z } = event.entity;
        event.server.runCommandSilent(
            `summon minecraft:wither_skeleton ${x} ${y} ${z}`
        );
    }
});

PlayerEvents.tick((event) => {
    const {
        player,
        player: { chestArmorItem, legsArmorItem, headArmorItem, feetArmorItem },
    } = event;
    // Fires event once a second
    if (!(player.age % 20 === 0)) return;

    if (
        chestArmorItem.id === 'thermal:hazmat_chestplate' &&
        legsArmorItem.id === 'thermal:hazmat_leggings' &&
        headArmorItem.id === 'thermal:hazmat_helmet' &&
        feetArmorItem.id === 'thermal:hazmat_boots'
    ) {
        // Apply/remove potion effects
        player.potionEffects.add('sculkhorde:purity', 200, 0, false, false);
    }
});

const repairUpdateFrequency = 150; //in ticks.
const repairChance = 0; // 1-repairChance = % so this is 100%
const repairAmount = 2;
const xpCost = 1; // xp pont per repair.

PlayerEvents.tick((event) => {
    const {
        player,
        player: { xpLevel, xp },
    } = event;
    let repair = true;

    //clever way to reduce frequency I saw from amerryelk's weight system script.
    if (player.age % repairUpdateFrequency !== 0) return;

    player.inventory.allItems.forEach((item) => {
        //check if the item is not air, is enchanted with mending, is damaged, the player has enough xp, and is not mining a block.
        if (
            repair &&
            item.hasEnchantment('allurement:reforming', 1) &&
            item.isDamaged() &&
            (xp > 0 ||
                (xpLevel > 0 && xp == 0 && Math.random() > repairChance)) &&
            !player.isMiningBlock()
        ) {
            item.damageValue -= repairAmount;
            player.giveExperiencePoints(-xpCost);
            repair = false;
        }
    });
});

const mosquito_biomes = [
    'minecraft:swamp',
    'minecraft:mangrove_swamp',
    'environmental:marsh',
    'minecraft:jungle',
    'minecraft:bamboo_jungle',
    'minecraft:sparse_jungle',
    'atmospheric:rainforest',
    'atmospheric:rainforest_basin',
    'hybrid_beta:rainforest',
    'atmospheric:sparse_rainforest',
    'atmospheric:sparse_rainforest_basin',
];

EntityEvents.checkSpawn('minecraft:spider', (event) => {
    let entity = event.entity;
    let biome = event.level
        .getBiome(entity.blockPosition())
        .key()
        .location()
        .toString();

    if (
        mosquito_biomes.includes(biome) &&
        event.level.canSeeSky(entity.blockPosition()) && Math.random() > 0.33
    ) {
        let newguy = event.level.createEntity('alexsmobs:crimson_mosquito');

        newguy.setPosition(entity.x, entity.y, entity.z);
        newguy.spawn();
        entity.discard();
        event.cancel();
    }
});

EntityEvents.checkSpawn('minecraft:slime', (event) => {
    let { entity, x, y, z } = event;

    if (y < -16) {
        let newguy = event.level.createEntity('minecraft:magma_cube');
        entity.getEntityData()
        newguy.setPosition(x, y, z);
        newguy.spawn();
        newguy.mergeNbt({ Size: Math.floor(Math.random() * 3) })
        entity.discard();
        event.cancel();
    }
});

/**
 * Linearly interpolates between two numbers.
 *
 * @param {number} a The start value.
 * @param {number} b The end value.
 * @param {number} t The interpolation factor (typically between 0 and 1).
 * @returns {number} The interpolated value.
 */
function lerp(a, b, t) {
    return a + t * (b - a);
}

function getWitherSkeletonSpawnChance(y) {
    return Math.min(lerp(0, 1, y / -32), 1);
}

EntityEvents.checkSpawn('minecraft:skeleton', (event) => {
    let { entity, x, y, z } = event;

    if (getWitherSkeletonSpawnChance(y) >= Math.random()) {
        let newguy = event.level.createEntity('minecraft:wither_skeleton');
        newguy.setItemSlot('mainhand', 'minecraft:stone_sword')

        newguy.setPosition(x, y, z);
        newguy.spawn();
        entity.discard();
        event.cancel();
    }
});

EntityEvents.spawned('minecraft:pillager', (event) => {
    let entity = event.entity;
    let spawn_type = entity.getNbt().get('forge:spawn_type');

    if (spawn_type == 'PATROL') {
        entity.tags.add('MobGunner');
        entity.tags.add('ProgressionGunner');
    }
});

EntityEvents.spawned('minecraft:vindicator', (event) => {
    let entity = event.entity;
    let spawn_type = entity.getNbt().get('forge:spawn_type');

    if (spawn_type == 'PATROL') {
        entity.tags.add('MobGunner');
        entity.tags.add('ProgressionGunner');
    }
});

const SWAP_DEFS = {
    "minecraft:wooden_sword": [
        "moonsweaponry:wooden_greatsword",
        "moonsweaponry:wooden_halberd",
        "moonsweaponry:wooden_hammer",
        "moonsweaponry:wooden_katana",
        "moonsweaponry:wooden_rapier",
        "moonsweaponry:wooden_scythe",
        "moonsweaponry:wooden_warglaive",
        "moonsweaponry:wooden_mace",
        "moonsweaponry:wooden_spear",
    ],

    "minecraft:stone_sword": [
        "moonsweaponry:stone_greatsword",
        "moonsweaponry:stone_halberd",
        "moonsweaponry:stone_hammer",
        "moonsweaponry:stone_katana",
        "moonsweaponry:stone_rapier",
        "moonsweaponry:stone_scythe",
        "moonsweaponry:stone_warglaive",
        "moonsweaponry:stone_mace",
        "moonsweaponry:stone_spear",
        "farmersdelight:flint_knife",
        "minecraft:stone_axe",
        "minecrat:stone_sword",
        "caverns_and_chasms:copper_sword",
        "caverns_and_chasms:copper_axe",
        "ccww:copper_greatsword",
        "ccww:copper_halberd",
        "ccww:copper_hammer",
        "ccww:copper_katana",
        "ccww:copper_rapier",
        "ccww:copper_scythe",
        "ccww:copper_warglaive",
        "ccww:copper_mace",
        "ccww:copper_spear",
    ],

    "minecraft:iron_sword": [
        "moonsweaponry:iron_greatsword",
        "moonsweaponry:iron_halberd",
        "moonsweaponry:iron_hammer",
        "moonsweaponry:iron_katana",
        "moonsweaponry:iron_rapier",
        "moonsweaponry:iron_scythe",
        "moonsweaponry:iron_warglaive",
        "moonsweaponry:iron_mace",
        "moonsweaponry:iron_spear",
        "farmersdelight:iron_knife",
        "scguns:anthralite_sword",
        "scguns:anthralite_axe",
        "kubejs:anthralite_sword",
        "minecraft:iron_sword",
        "minecraft:iron_axe",
        "kubejs:anthralite_axe",
        "kubejs:anthralite_greatsword",
        "kubejs:anthralite_halberd",
        "kubejs:anthralite_hammer",
        "kubejs:anthralite_katana",
        "kubejs:anthralite_rapier",
        "kubejs:anthralite_scythe",
        "kubejs:anthralite_warglaive",
        "kubejs:anthralite_mace",
        "kubejs:anthralite_spear",
        "ccww:copper_greatsword",
        "ccww:copper_halberd",
        "ccww:copper_hammer",
        "ccww:copper_katana",
        "ccww:copper_rapier",
        "ccww:copper_scythe",
        "ccww:copper_warglaive",
        "ccww:copper_mace",
        "ccww:copper_spear",
        "caverns_and_chasms:copper_sword",
        "caverns_and_chasms:copper_axe",
    ],
    "minecraft:golden_sword": [
        "moonsweaponry:golden_greatsword",
        "moonsweaponry:golden_halberd",
        "moonsweaponry:golden_hammer",
        "moonsweaponry:golden_katana",
        "moonsweaponry:golden_rapier",
        "moonsweaponry:golden_scythe",
        "moonsweaponry:golden_warglaive",
        "moonsweaponry:golden_mace",
        "moonsweaponry:golden_spear",
        "farmersdelight:golden_knife",
        "minecraft:golden_sword",
        "minecraft:golden_axe",
    ],
    "minecraft:diamond_sword": [
        "moonsweaponry:diamond_greatsword",
        "moonsweaponry:diamond_halberd",
        "moonsweaponry:diamond_hammer",
        "moonsweaponry:diamond_katana",
        "moonsweaponry:diamond_rapier",
        "moonsweaponry:diamond_scythe",
        "moonsweaponry:diamond_warglaive",
        "moonsweaponry:diamond_mace",
        "moonsweaponry:diamond_spear",
        "farmersdelight:diamond_knife",
        "minecraft:diamond_sword",
        "minecraft:diamond_axe",
        "kubejs:tin_sword",
        "kubejs:tin_axe",
        "kubejs:tin_greatsword",
        "kubejs:tin_halberd",
        "kubejs:tin_hammer",
        "kubejs:tin_katana",
        "kubejs:tin_rapier",
        "kubejs:tin_scythe",
        "kubejs:tin_warglaive",
        "kubejs:tin_mace",
        "kubejs:tin_spear",
    ],
    "caverns_and_chasms:silver_sword": [
        "caverns_and_chasms:silver_axe",
        "ccww:silver_greatsword",
        "ccww:silver_halberd",
        "ccww:silver_hammer",
        "ccww:silver_katana",
        "ccww:silver_rapier",
        "ccww:silver_scythe",
        "ccww:silver_warglaive",
        "ccww:silver_mace",
        "ccww:silver_spear",
    ],
    "caverns_and_chasms:copper_sword": [
        "caverns_and_chasms:copper_sword",
        "caverns_and_chasms:copper_axe",
        "ccww:copper_greatsword",
        "ccww:copper_halberd",
        "ccww:copper_hammer",
        "ccww:copper_katana",
        "ccww:copper_rapier",
        "ccww:copper_scythe",
        "ccww:copper_warglaive",
        "ccww:copper_mace",
        "ccww:copper_spear",
    ]
}

const OXIDATION_STATES = [
    "exposed",
    "weathered",
    "oxidized"
]

EntityEvents.spawned((event) => {
    const entity = event.entity;
    const handslots = entity.handSlots;

    if (
        entity.type == 'minecraft:player' ||
        entity.type == 'minecraft:armor_stand'
    )
        return;

    handslots.forEach((item) => {
        if (item == null) return;
        let nbt = item.nbt
        let new_item_id
        for (let [base, swaps] of Object.entries(SWAP_DEFS)) {
            if (item.id.match(new RegExp(base) || item.id.match(new RegExp(base.replace("sword", "axe"))))) {
                new_item_id = swaps[Math.floor(Math.random() * swaps.length)]
                if (new_item_id.match(/(caverns_and_chasms|ccww):.*copper/) && Math.random() < 0.66) {
                    //randomly oxidize
                    new_item_id = new_item_id.split(":")[0] + ":" + OXIDATION_STATES[Math.floor(Math.random() * OXIDATION_STATES.length)] + "_" + new_item_id.split(":")[1]
                }
                if (Item.of(new_item_id).is(Item.empty)) {
                    console.warn(new_item_id + " not found")
                }
            }
        }

        if (new_item_id && !Item.of(new_item_id).is(Item.empty)) {
            entity.setItemSlot('mainhand', Item.of(new_item_id, nbt));
        }

        if (
            entity.type != 'quark:forgotten' &&
            item != null &&
            item.isEnchanted() &&
            Math.random() > 0.5
        ) {
            item.addTagElement(
                'quark:RuneColor',
                RUNIC_ETCHING_COLORS[
                Math.floor(Math.random() * RUNIC_ETCHING_COLORS.length)
                ]
            );
        }
    });
});

const exp_vals = [17, 37, 73, 149, 307, 617];

/**
 * Spawns a glowing item entity at the given position
 * @param {Internal.Level} level - the level to spawn the entity in
 * @param {number} x - the x coordinate of the entity
 * @param {number} y - the y coordinate of the entity
 * @param {number} z - the z coordinate of the entity
 */
function spawn_nether_star(level, x, y, z) {
    let item_entity = level.createEntity('item');
    item_entity.item = Item.of('minecraft:nether_star');
    item_entity.setPosition(x + Math.random(), y, z + Math.random());
    item_entity.spawn();
    item_entity.setGlowing(true);

    for (let i = 0; i <= Math.floor(Math.random() * 10 + 10); i++) {
        let xp_orb = level.createEntity('experience_orb');
        xp_orb.setNbt({
            value: exp_vals[Math.floor(Math.random() * exp_vals.length)],
        });
        xp_orb.setPosition(x + Math.random(), y, z + Math.random());
        xp_orb.spawn();

        let relic_orb = level.createEntity('relics:relic_experience_orb');
        relic_orb.setNbt({
            value: exp_vals[Math.floor(Math.random() * exp_vals.length)],
        });
        relic_orb.setPosition(x + Math.random(), y, z + Math.random());
        relic_orb.spawn();
    }
}

EntityEvents.death('wither', (event) => {
    let { level, entity } = event;
    let { x, y, z } = entity;

    spawn_nether_star(level, x, y, z);
    event.server.scheduleInTicks(20, () =>
        spawn_nether_star(level, x + 10, y + 50, z - 10)
    );
});

let healthBuffMap = {
    "sculkhorde:sculk_enderman": 400
}

EntityEvents.spawned(Object.keys(healthBuffMap), event => {
    let { level: { dimension }, entity, entity: { type } } = event
    let healthBuff = healthBuffMap[type] || 0
    let baseHealth = entity.maxHealth
    let newMaxHealth = baseHealth + healthBuff

    entity.modifyAttribute("minecraft:generic.max_health", "health_buff_id", newMaxHealth - entity.maxHealth, "addition")

    entity.health = newMaxHealth
})

PlayerEvents.loggedIn((event) => {
    if (
        !event.player.persistentData.givenStartLoot &&
        event.level.server.worldData.worldGenOptions().generateBonusChest()
    ) {
        event.player.persistentData.givenStartLoot = true;
        event.server.runCommandSilent(
            `loot give ${event.player.name.string} loot minecraft:chests/spawn_bonus_chest`
        );
    }
});