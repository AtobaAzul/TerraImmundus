MoreJSEvents.villagerTrades((event) => {
	event.addTrade(
		'cleric',
		1,
		[TradeItem.of('minecraft:emerald', 3, 6)],
		'sculkhorde:essence_of_purity'
	);
	event.addTrade(
		'cleric',
		3,
		[TradeItem.of('minecraft:emerald', 4, 8)],
		'sculkhorde:purification_flask'
	);
	event.addTrade(
		'cleric',
		1,
		[TradeItem.of('sob:sculk_tendril', 32, 48)],
		'minecraft:emerald'
	);

	event.addTrade(
		'toolsmith',
		3,
		[TradeItem.of('minecraft:emerald', 3, 6)],
		'minecraft:netherite_upgrade_smithing_template'
	);
	event.addTrade(
		'weaponsmith',
		3,
		[TradeItem.of('minecraft:emerald', 3, 6)],
		'minecraft:netherite_upgrade_smithing_template'
	);
	event.addTrade(
		'armorer',
		3,
		[TradeItem.of('minecraft:emerald', 3, 6)],
		'minecraft:netherite_upgrade_smithing_template'
	);
});

MoreJSEvents.wandererTrades((event) => {
	event.addTrade(
		1,
		[TradeItem.of('minecraft:emerald', 4, 8)],
		'minecraft:netherite_upgrade_smithing_template'
	);
	event.addTrade(
		2,
		[TradeItem.of('minecraft:emerald', 16, 24)],
		'minecraft:sniffer_egg'
	);
	event.addTrade(
		1,
		[TradeItem.of('minecraft:emerald', 3, 6)],
		'sculkhorde:purification_flask'
	);
});
