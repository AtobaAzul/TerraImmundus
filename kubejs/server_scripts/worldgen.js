ServerEvents.highPriorityData((event) => {
	/***
	 * @param {string} name the name of the ore
	 * @param {number} count how much ore should generate in a chunk?
	 * @param {number} min_y mininum y level the ore can generate in, inclusive.
	 * @param {number} max_y maximum y level the ore can generate in, inclusive.
	 * @param {number} size the size of the ore.
	 * @param {Internal.Block_} stone_block the block name that will replace minecraft:stone (or other valid stone-like blocks)
	 * @param {Internal.Block_} deepslate_block the block name that will replace minecraft:deepslate (or other valid deepslate-like blocks) Defaults to stone_block
	 */
	function AddBasicOre(
		name,
		count,
		min_y,
		max_y,
		size,
		stone_block,
		deepslate_block,
		biome,
		distribibution_type
	) {
		if (biome == undefined) {
			biome = '#minecraft:is_overworld';
		}

		if (distribibution_type == undefined) {
			distribibution_type = 'minecraft:trapezoid';
		}

		//first, add the ore into the forge biome modifiers.
		let modifier = {
			type: 'forge:add_features',
			biomes: biome,
			features: `terraimmundus:${name}_ore_placed`,
			step: 'underground_ores',
		};

		//now, placed feature
		let placed = {
			feature: `terraimmundus:${name}_ore`,
			placement: [
				{
					type: 'minecraft:count',
					count: count,
				},
				{
					type: 'minecraft:in_square',
				},
				{
					type: 'minecraft:height_range',
					height: {
						type: distribibution_type,
						max_inclusive: {
							absolute: max_y,
						},
						min_inclusive: {
							absolute: min_y,
						},
					},
				},
				{
					type: 'minecraft:biome',
				},
			],
		};

		//and the config. feature
		let config = {
			type: 'minecraft:ore',
			config: {
				discard_chance_on_air_exposure: 0.0,
				size: size,
				targets: [
					{
						state: {
							Name: stone_block,
						},
						target: {
							predicate_type: 'minecraft:tag_match',
							tag: 'minecraft:stone_ore_replaceables',
						},
					},
					{
						state: {
							Name:
								deepslate_block != null
									? deepslate_block
									: stone_block, //default to the first stone one if deepslate is not defined
						},
						target: {
							predicate_type: 'minecraft:tag_match',
							tag: 'minecraft:deepslate_ore_replaceables',
						},
					},
				],
			},
		};

		//now, add these to the data file
		event.addJson(
			`terraimmundus:worldgen/configured_feature/${name}_ore`,
			config
		);
		event.addJson(
			`terraimmundus:worldgen/placed_feature/${name}_ore_placed`,
			placed
		);
		event.addJson(
			`terraimmundus:forge/biome_modifier/${name}_ore`,
			modifier
		);
	}

	AddBasicOre(
		'basalt',
		2,
		-64,
		0,
		64,
		'minecraft:basalt',
		'minecraft:basalt'
	);

	AddBasicOre(
		'blackstone',
		2,
		-64,
		0,
		64,
		'minecraft:blackstone',
		'minecraft:blackstone'
	);

	AddBasicOre(
		'meteorite',
		2,
		-64,
		-32,
		3,
		'minecraft:ancient_debris',
		'minecraft:ancient_debris'
	);
	AddBasicOre(
		'vehement_coal',
		3,
		-64,
		-32,
		4,
		'scguns:vehement_coal_ore',
		'scguns:vehement_coal_ore'
	);

	AddBasicOre(
		'sapphire',
		100,
		76,
		256 * 2,
		3,
		'thermal:sapphire_ore',
		'thermal:deepslate_sapphire_ore'
	);

	AddBasicOre(
		'sapphire_sculk',
		5,
		-64,
		0,
		3,
		'thermal:sapphire_ore',
		'thermal:deepslate_sapphire_ore',
		'minecraft:deep_dark',
		'minecraft:uniform'
	);

	AddBasicOre(
		'apatite',
		2,
		-32,
		32,
		5,
		'thermal:apatite_ore',
		'thermal:deepslate_apatite_ore'
	);

	AddBasicOre(
		'apatite_lush',
		2,
		-48,
		48,
		5,
		'thermal:apatite_ore',
		'thermal:deepslate_apatite_ore',
		'minecraft:lush_caves',
		'minecraft:uniform'
	);
	AddBasicOre(
		'ruby',
		2,
		-48,
		16,
		5,
		'thermal:ruby_ore',
		'thermal:deepslate_ruby_ore'
	);

	AddBasicOre(
		'ruby_dripstone',
		2,
		-48,
		48,
		5,
		'thermal:ruby_ore',
		'thermal:deepslate_ruby_ore',
		'minecraft:dripstone_caves',
		'minecraft:uniform'
	);

	event.addJson('thermal:forge/biome_modifier/trees_rubberwood', {
		type: 'forge:add_features',
		biomes: {
			type: 'forge:or',
			values: [
				'minecraft:flower_forest',
				'minecraft:bamboo_jungle',
				'minecraft:sparse_jungle',
				'minecraft:dark_forest',
				'environmental:marsh',
				'environmental:blossom_valleys',
				'environmental:blossom_woods',
				'minecraft:swamp',
				'minecraft:mangrove_swamp',
				'atmospheric:rainforest',
				'atmospheric:sparse_rainforest',
				'atmospheric:rainforest_basin',
				'atmospheric:sparse_rainforest_basin',
			],
		},
		features: 'thermal:trees_rubberwood',
		step: 'vegetal_decoration',
	});
});

