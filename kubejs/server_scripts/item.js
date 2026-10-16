ItemEvents.rightClicked('kubejs:sporemeter', (event) => {
    event.item.setNbt({ enabled: true });

    let mass = $ModSavedData
        .getSaveData()
        .getSculkAccumulatedMass();
    let gravemind = $SculkHorde.gravemind
        .getEvolutionState()
        .toString();
    let state = $ModSavedData
        .getSaveData()
        .getHordeState()
        .toString();

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
                .append(
                    Text.of(mass.toString()).color(color),
                )
                .append('   ')
                .append(
                    Text.gray('Evolution State: ').append(
                        Text.of(gravemind).color(
                            state_color,
                        ),
                    ),
                ),
        );
    } else {
        event.player.setStatusMessage(
            Text.green('No Data.'),
        );
    }

    event.player.addItemCooldown('kubejs:sporemeter', 20);
});

const PURITY_FOODS = [
    'minecraft:golden_apple',
    'minecraft:enchanted_golden_apple',
    'atmospheric:golden_dragon_fruit',
    'minecraft:golden_carrot',
    'sob:golden_prickly_pear',
    'miners_delight:golden_nutritional_bar',
];

PURITY_FOODS.forEach(food => {
    ItemEvents.foodEaten(food, (event) => {
        const entity = event.player;

        if (entity) {
            entity.addEffect(
                new $MobEffectInstance(
                    $ModMobEffects.PURITY.get(),
                    20 * 60 * 15,
                ),
            );
        }
    });
})


const COOLDOWN_FOODS = [
    'farmersrespite:rose_hip_pie_slice',
    'abnormals_delight:strawberry_cake_slice',
    'neapolitan:strawberry_banana_smoothie',
    'neapolitan:strawberry_ice_cream',
    'neapolitan:strawberry_milkshake',
    'neapolitan:strawberry_bean_bonbons',
    'neapolitan:strawberry_scones',
    'neapolitan:white_strawberries',
    'neapolitan:strawberries',
    'neapolitan:chocolate_strawberries',
    'sob:strawberry_jam',
    'farmersdelight:melon_juice',
    'sob:big_soup',
    'sob:truffle_pasta',
    'sob:pale_daiquiri',
    'farmersrespite:rose_hip_pie_slice',
];

COOLDOWN_FOODS.forEach(item => {
    ItemEvents.foodEaten(item, (event) => {
        COOLDOWN_FOODS.forEach(_item => {
            event.player.addItemCooldown(_item, 40)
        })
    })
})

ItemEvents.rightClicked(
    'thermal:potion_infuser',
    (event) => {
        event.player.addItemCooldown(
            'thermal:potion_infuser',
            50,
        );
    },
);
