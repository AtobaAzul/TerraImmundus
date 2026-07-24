ServerEvents.recipes((e) => {
	let insolator_defs = {
		'farmersdelight:cabbage_seeds': [
			Item.of('farmersdelight:cabbage', 2),
			Item.of('farmersdelight'),
		],
	};

	/**
	 * Insolates a seed into a thermal recipe
	 * @param {InputItem_} seed
	 * @param {(OutputItem_)[]} result
	 * @param {number} energy_mod
	 * @param {number} water_mod
	 * @param {number} xp
	 */
	function insolator(result, seed, energy_mod, water_mod, xp) {
		e.recipes.thermal.insolator(result, seed, xp, water_mod, energy_mod*1000).id(`kjs:insolator/${seed.split(':')[1]}`);
	}

	insolator(
		[
			Item.of('supplementaries:flax').withChance(2),
			Item.of('supplementaries:flax_seeds').withChance(1.1),
		],
		'supplementaries:flax_seeds',
		1,
		1,
		0.25
	);

	insolator(
		[
			Item.of('farmersrespite:yellow_tea_leaves').withChance(0.75),
			Item.of('farmersrespite:green_tea_leaves').withChance(0.75),
			Item.of('farmersrespite:black_tea_leaves').withChance(0.75),
			Item.of('farmersrespite:tea_seeds').withChance(1.1),
		],
		'farmersrespite:tea_seeds',
		1,
		1,
		0.25
	);

	insolator(
		[
			Item.of('sob:asparagus').withChance(2),
			Item.of('sob:asparagus_seeds').withChance(1.1),
		],
		'sob:asparagus_seeds',
		1,
		1,
		0.25
	);

	insolator(
		[Item.of('sob:peanut').withChance(2.5)],
		'sob:peanut',
		0.5,
		1,
		0.25
	);

	insolator(
		[Item.of('quark:glow_shroom').withChance(2.5)],
		'quark:glow_shroom',
		0.5,
		1,
		0.25
	);

	insolator(
		[Item.of('atmospheric:dragon_fruit').withChance(1.5)],
		'atmospheric:dragon_fruit',
		0.5,
		1,
		0.25
	);

	insolator(
		[Item.of('neapolitan:adzuki_beans').withChance(2.5)],
		'neapolitan:adzuki_beans',
		0.5,
		1,
		0.25
	);

	insolator(
		[Item.of('atmospheric:aloe_leaves').withChance(2.5)],
		'neapolitan:aloe_leaves',
		0.5,
		1,
		0.25
	);

	insolator(
		[Item.of('neapolitan:mint_leaves').withChance(2.5)],
		'neapolitan:mint_leaves',
		0.5,
		1,
		0.25
	);

	insolator(
		[Item.of('neapolitan:vanilla_pods').withChance(2.5)],
		'neapolitan:vanilla_pods',
		0.5,
		1,
		0.25
	);

	insolator(
		[
			Item.of('sob:prickly_pear').withChance(0.75),
			Item.of('sob:nopal').withChance(1.75),
		],
		'sob:prickly_pear',
		0.25,
		1.5,
		0.25
	);

	insolator(
		[
			Item.of('atmospheric:yucca_flower').withChance(0.25),
			Item.of('atmospheric:tall_yucca_flower').withChance(0.25),
			Item.of('atmospheric:yucca_log').withChance(6),
			Item.of('atmospheric:yucca_fruit').withChance(3.5),
		],
		'atmospheric:yucca_sapling',
		2,
		2,
		0.25
	);

	insolator(
		[
			Item.of('minecraft:pitcher_pod').withChance(1.1),
			Item.of('minecraft:pitcher_plant').withChance(1),
			Item.of('sob:pitcher_tuber').withChance(1.5),
		],
		'minecraft:pitcher_pod',
		1.5,
		1.5,
		0.25
	);

	insolator(
		[
			Item.of('atmospheric:orange').withChance(1.5),
			Item.of('atmospheric:laurel_sapling').withChance(1.5),
			Item.of('atmospheric:laurel_log').withChance(6),
		],
		'atmospheric:laurel_sapling',
		2,
		2,
		0.25
	);

	insolator(
		[
			Item.of('atmospheric:orange').withChance(1.5),
			Item.of('atmospheric:dry_laurel_sapling').withChance(1.5),
			Item.of('atmospheric:laurel_log').withChance(6),
		],
		'atmospheric:dry_laurel_sapling',
		2,
		2,
		0.25
	);

	insolator(
		[
			Item.of('neapolitan:banana_frond').withChance(0.5),
			Item.of('neapolitan:banana_bunch').withChance(1.5),
			Item.of('neapolitan:banana_stalk').withChance(4),
		],
		'neapolitan:banana_frond',
		1.75,
		1.75,
		0.25
	);

	e.remove({ id: 'thermal:compat/quark/insolator_quark_ancient_sapling' });
	insolator(
		[
			Item.of('quark:ancient_fruit').withChance(1.5),
			Item.of('quark:ancient_sapling').withChance(1.5),
			Item.of('quark:ancient_log').withChance(6),
		],
		'quark:ancient_sapling',
		2,
		2,
		0.25
	);

	insolator(
		[Item.of('upgrade_aquatic:pickerelweed').withChance(2.5)],
		'upgrade_aquatic:pickerelweed',
		0.5,
		1.5,
		0.25
	);

	insolator(
		[
			Item.of('upgrade_aquatic:mulberry').withChance(3.5),
			Item.of('upgrade_aquatic:river_sapling').withChance(1.5),
			Item.of('upgrade_aquatic:river_log').withChance(6),
		],
		'upgrade_aquatic:river_sapling',
		2,
		2.5,
		0.25
	);

	insolator(
		[
			Item.of('atmospheric:currant').withChance(3.5),
			Item.of('atmospheric:currant_seedling').withChance(0.5),
			Item.of('atmospheric:currant_stalk').withChance(6),
		],
		'atmospheric:currant_seedling',
		2.5,
		2.5,
		0.25
	);

	e.remove({ id: 'thermal:compat/quark/insolator_quark_azalea_bush' });
    e.remove({id: 'thermal:compat/quark/insolator_quark_flowering_azalea_bush'})
	insolator(
		[
			Item.of('azalea').withChance(1.1),
			Item.of('hanging_roots').withChance(1.25),
			Item.of('caverns_and_chasms:azalea_log').withChance(6),
		],
		'minecraft:azalea',
		1,
		1,
		0.25
	);

    insolator(
		[
			Item.of('flowering_azalea').withChance(1.1),
			Item.of('hanging_roots').withChance(1.25),
			Item.of('caverns_and_chasms:azalea_log').withChance(6),
		],
		'minecraft:flowering_azalea',
		1,
		1,
		0.25
	);
});
