// priority: 256

const rowCollumnMap = {
    '00': 'gun_top_internal_1',
    '01': 'gun_top_internal_2',
    '02': 'gun_top_barrel_1',
    '03': 'gun_top_barrel_2',
    10: 'gun_internal_1',
    11: 'gun_internal_2',
    12: 'gun_barrel_1',
    13: 'gun_barrel_2',
    20: 'gun_grip',
    21: 'IGNORED',
    22: 'gun_magazine',
    23: 'IGNORED',
};

function _convertRowAndCollumnToKey(row, column) {
    return rowCollumnMap[
        row.toString() + column.toString()
    ];
}

function convertToGunBenchRecipe(result, pattern, key) {
    const json = {
        type: 'scguns:gun_bench',
        result: {
            item: result,
            count: 1,
        },
        ingredients: {},
    };

    for (let i = 0; i < pattern.length; i++) {
        let row = pattern[i];
        for (let _i = 0; _i < row.length; _i++) {
            let char = row[_i];
            if (key[char]) {
                let ingredientKey =
                    _convertRowAndCollumnToKey(i, _i);
                if (ingredientKey != 'IGNORED') {
                    json.ingredients[ingredientKey] =
                        Ingredient.of(key[char]).toJson();
                }
            }
        }
    }

    return json;
}

PlayerEvents.loggedIn((event) => {
    if (!event.player.persistentData.givenStartLoot) {
        event.player.persistentData.givenStartLoot = true;
        event.player.give(Item.of('ftbquests:book'));

        if (event.level.server.worldData.worldGenOptions().generateBonusChest()) {
            event.server.runCommandSilent(`loot give ${event.player.name.string} loot minecraft:chests/spawn_bonus_chest`);
        }
    }
});


LevelEvents.loaded((event) => {
    if (event.level.persistentData.borderSetup) return

    event.level.persistentData.borderSetup = true

    event.level.persistentData.oldBorderSize = event.level.worldBorder.size

    event.level.worldBorder.setSize(6000)
})

const $FluidState = Java.loadClass('net.minecraft.world.level.material.FluidState')
const $Mth = Java.loadClass('net.minecraft.util.Mth')
LevelEvents.tick(event => {
    const level = event.level
    const SCULK_DEFEATED = $ModSavedData.getSaveData().getHordeState().toString() == 'DEFEATED'
    const SCULK_STARTED = $ModSavedData.getSaveData().getHordeState().toString() == 'ACTIVE'

    if (SCULK_STARTED && !level.persistentData.sculkSpawnSet) {
        let dist = 1500

        for (let tries = 0; tries < 20; tries++) {
            let x = $Mth.randomBetween(level.random, -1000, 1000)
            let z = $Mth.randomBetween(level.random, -1000, 1000)
            let rad = Math.atan2(x, z)

            let pX = x + dist * Math.sin(rad);
            let pZ = z - dist * Math.cos(rad);

            let bPos = new BlockPos(pX, 100, pZ)

            bPos = level.getHeightmapPos("world_surface", bPos)

            let fluidPos = level.getHeightmapPos("ocean_floor", bPos)


            let hasChunk = event.level.chunkSource.hasChunk(Math.floor(bPos.x) / 16, Math.floor(bPos.z) / 16)

            if (hasChunk && event.level.getBlock(bPos.below()).getBlockState().getFluidState().isEmpty() && dist < 3000) {
                if (event.server != null) {
                    console.info(`Moving world spawn point to ${bPos}`)

                    event.server.allLevels.forEach(_level => {
                        _level.setDefaultSpawnPos(bPos, 0.0)
                        _level.persistentData.sculkSpawnSet = true
                    })
                    break;
                }
            }

        }
    }

    if (SCULK_DEFEATED && !level.persistentData.finalBorderSetup) {
        level.worldBorder.setSize(level.persistentData.oldBorderSize)
        level.persistentData.finalBorderSetup = true
    }
})

ItemEvents.rightClicked('minecraft:enchanted_book', (event) => {
    if (event.target.block == null) {
        event.cancel();
    }
})


BlockEntityEvents.tick(event => {
    const level = event.getBlockEntity().level
    const { x, y, z } = event.getBlockEntity().blockPos

    if (event.getBlockEntity().blockState.is("minecraft:beacon") && event.getBlockEntity()) {
        let nbt = event.getBlockEntity().serializeNBT()
        let levels = nbt.get("Levels");
        if (levels > 0) {
            let entities = level.getEntitiesOfClass($LivingEntity, new $AABB(event.getBlockEntity().blockPos).inflate(levels * 10 + 10).expandTowards(0, level.getHeight(), 0))
            for (const entity of entities) {
                let hasTag = entity.entityType.tags.anyMatch(
                    (tag) => tag.location() == "terraimmundus:sculk_mobs"
                )

                if (hasTag) {
                    entity.setSecondsOnFire(60)
                    entity.addEffect(new $MobEffectInstance('minecraft:slowness', 60, 3))
                    entity.addEffect(new $MobEffectInstance('minecraft:weakness', 60, 3))
                    entity.addEffect(new $MobEffectInstance('minecraft:poison', 60, 3))

                    if (entity.age % 20 === 0) {
                        let cursor = new $CursorSurfacePurifierEntity(level);
                        cursor.setPos(entity.x, entity.y, entity.z);
                        cursor.setMaxTransformations(100);
                        cursor.setMaxRange(100);
                        cursor.setSearchIterationsPerTick(2);
                        cursor.setMaxLifeTimeMillis(2000);
                        cursor.setTickIntervalMilliseconds(20);
                        level.addFreshEntity(cursor);
                    }
                }

                entity.addEffect(new $MobEffectInstance('sculkhorde:purity', 62, 0))
            }
        }
    }
})