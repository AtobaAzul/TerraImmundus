//keeping this here so I remember how this even works.
function SpawnCursorAndDisinfect(size, pos, level) {
    for (let y = -size; y < size; y++) {
        for (let x = -size; x < size; x++) {
            for (let z = -size; z < size; z++) {
                let new_pos = new BlockPos(pos.x + x, pos.y + y, pos.z + z);
                $BlockInfestationSystem.tryToCureBlock(level, new_pos);
            }
        }
    }

    if (Math.random() >= 0.33) {
        let cursor = new $CursorSurfacePurifierEntity(level);
        cursor.setPos(pos);
        cursor.setMaxTransformations(8);
        cursor.setMaxRange(50);
        cursor.setSearchIterationsPerTick(5);
        cursor.setMaxLifeTimeMillis(10000 / 2);
        cursor.setTickIntervalMilliseconds(150);
        level.addFreshEntity(cursor);
    }
}

global.onProjectileHit = (event) => {
    /**@type {Internal.Projectile} */
    let projectile = event.projectile;

    if (!(projectile instanceof $FireRoundEntity)) {
        return;
    }

    /**@type {(Internal.BlockHitResult|Internal.EntityHitResult)} */
    let rayTrace = event.getRayTrace();

    /**@type {Internal.Level} */
    //let level = projectile.getLevel();

    //let size = 1;

    if (rayTrace.getType() === $HitResultType.BLOCK) {
        //let pos = rayTrace.getBlockPos();
    }

    if (rayTrace.getType() === $HitResultType.ENTITY) {
        if (
            rayTrace.entity != null &&
            rayTrace.entity instanceof $LivingEntity
        ) {
            rayTrace.entity.addEffect(
                new $MobEffectInstance('supplementaries:flammable', 20 * 10)
            );
        }

        //let pos = rayTrace.entity.blockPosition();
    }
};

ForgeEvents.onEvent('top.ribs.scguns.event.GunProjectileHitEvent', (event) => {
    global.onProjectileHit(event);
});

StartupEvents.init(() => {
    Platform.mods.kubejs.name = 'Terra Immundus';
});

/**
 * Fired when a player attempts to sleep in a bed.
 * Cancelling this event prevents the player from sleeping.
 * @param {Internal.PlayerSleepInBedEvent_} event The event object.
 */
global.onTrySleep = (event) => {
    const player = event.getEntity();

    if ($ModSavedData.getSaveData().getHordeState().toString() == 'UNACTIVATED' && player.level.isNight()) {
        player.swing()

        const spawnPos = player.getRespawnPosition()
        const bedPos = event.getPos()
        const { x, y, z } = bedPos

        player.displayClientMessage('You are too anxious to sleep.', true);

        if (!spawnPos || (spawnPos.getX() != x || spawnPos.getZ() != z || spawnPos.getY() != y)) {
            player.tell(Component.translatable("block.minecraft.set_spawn"))
            player.getServer().runCommandSilent(`spawnpoint ${player.name.string} ${x} ${y} ${z}`)
        }

        event.setResult($Player.BedSleepingProblem.NOT_POSSIBLE_NOW);
    }
};

ForgeEvents.onEvent(
    'net.minecraftforge.event.entity.player.PlayerSleepInBedEvent',
    (event) => {
        global.onTrySleep(event);
    }
);
