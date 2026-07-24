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

});