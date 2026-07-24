ItemEvents.rightClicked('kubejs:sporemeter', (event) => {
    event.item.setNbt({ enabled: true });

    let mass = $ModSavedData.getSaveData().getSculkAccumulatedMass();
    let gravemind = $SculkHorde.gravemind.getEvolutionState().toString();
    let state = $ModSavedData.getSaveData().getHordeState().toString();

    if (mass > 0) {
        let color = Color.LIME_DYE;
        let state_color = Color.YELLOW_DYE;

        if (mass >= 20000) {
            color = Color.MAGENTA_DYE;
        } else if (mass >= 10000) {
            color = Color.RED_DYE;
        } else if (mass >= 5000) {
            color = Color.ORANGE_DYE;
        } else if (mass > 0) {
            color = Color.YELLOW_DYE;
        }

        if (gravemind == 'Immature') {
            state_color = Color.ORANGE_DYE;
        } else if (gravemind == 'Mature') {
            state_color = Color.RED_DYE;
        }

        event.player.setStatusMessage(
            Text.gray('Detected Sculk Spores: ')
                .append(Text.of(mass.toString()).color(color))
                .append('   ')
                .append(
                    Text.gray('Evolution State: ').append(
                        Text.of(gravemind).color(state_color)
                    )
                )
        );
    } else {
        event.player.setStatusMessage(Text.green('No Data.'));
    }

    event.player.addItemCooldown('kubejs:sporemeter', 20);
});


ItemEvents.foodEaten('minecraft:golden_apple', (event) => {
    const entity = event.player;

    if (entity) {
        entity.addEffect(
            new $MobEffectInstance($ModMobEffects.PURITY.get(), 20 * 60 * 15)
        );
    }
})

ItemEvents.foodEaten('minecraft:enchanted_golden_apple', (event) => {
    const entity = event.player;

    if (entity) {
        entity.addEffect(
            new $MobEffectInstance($ModMobEffects.PURITY.get(), 20 * 60 * 15)
        );
    }
})