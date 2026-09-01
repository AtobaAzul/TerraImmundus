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


ServerEvents.loaded((event) => {
    if (event.server.persistentData.borderSetup) return

    event.server.persistentData.borderSetup = true

    event.server.allLevels.forEach((level) => {
        level.persistentData.oldBorderSize = level.worldBorder.size

        level.worldBorder.setSize(6000)
    })
})

ServerEvents.tick(event => {
    const SCULK_DEFEATED = $ModSavedData.getSaveData().getHordeState().toString() == 'DEFEATED'

    if (SCULK_DEFEATED && !event.server.persistentData.finalBorderSetup) {
        event.server.allLevels.forEach((level) => {
            level.worldBorder.setSize(level.persistentData.oldBorderSize)
        })

        event.server.persistentData.finalBorderSetup = true
    }
})

ItemEvents.rightClicked('minecraft:enchanted_book', (event) => {
    if (event.target.block == null) {
        event.cancel();
    }
})

const $ISculkSmartEntity = Java.loadClass('com.github.sculkhorde.common.entity.ISculkSmartEntity')
const $AABB = Java.loadClass('net.minecraft.world.phys.AABB')

BlockEntityEvents.tick(event => {
    const level = event.getBlockEntity().level
    const { x, y, z } = event.getBlockEntity().blockPos

    if (event.getBlockEntity().blockState.is("minecraft:beacon") && event.getBlockEntity()) {
        let nbt = event.getBlockEntity().serializeNBT()
        if (nbt.get("Secondary") == 103) {
            let levels = nbt.get("Levels");
            if (levels > 0) {
                const entities = level.getEntitiesOfClass($ISculkSmartEntity, new $AABB(event.getBlockEntity().blockPos).inflate(levels * 10 + 10).expandTowards(0, level.getHeight(), 0))
                for (const entity of entities) {
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
            }
        }
    }
})