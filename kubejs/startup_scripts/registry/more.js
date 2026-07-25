MoreJSEvents.registerPotionBrewing((event) => {
    /**
     * 1. Argument: The ingredient of the brewing stand
     * 2. Argument: The input potion of the brewing stand
     * 3. Argument: The result potion of the brewing
     */
    event.addCustomBrewing(
        'minecraft:amethyst_shard',
        Item.of('minecraft:potion', '{Potion:"minecraft:awkward"}').strongNBT(),
        'minecraft:dragon_breath'
    );

    event.addPotionBrewing(
        'sculkhorde:sculk_shroom_culture',
        'minecraft:water',
        'minecraft:awkward'
    );
    event.addPotionBrewing(
        'sculkhorde:small_shroom',
        'minecraft:water',
        'minecraft:awkward'
    );

    event.removeByPotion(null, null, 'alexsmobs:soulsteal')
    event.removeByCustom("alexsmobs:soul_heart", null, Item.of("minecraft:potion", '{Potion:"alexscaves:soulsteal"}'));
    event.removeByCustom("alexsmobs:dropbear_claw", null, Item.of("minecraft:potion", '{Potion:"alexscaves:clinging"}'));

    event.addPotionBrewing(
        'alexsmobs:centipede_leg',
        'minecraft:awkward',
        'alexsmobs:clinging'
    )

    event.addPotionBrewing(
        'alexsmobs:soul_heart',
        'caverns_and_chasms:revenant',
        'alexsmobs:soulsteal'
    )

    event.addPotionBrewing(
        'alexsmobs:soul_heart',
        'caverns_and_chasms:long_revenant',
        'alexsmobs:long_soulsteal'
    )

    event.addPotionBrewing(
        'alexsmobs:soul_heart',
        'caverns_and_chasms:strong_revenant',
        'alexsmobs:strong_soulsteal'
    )
});