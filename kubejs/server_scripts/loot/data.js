ServerEvents.highPriorityData((event) => {
	//lazy zzzzz
	const ore_loot_tables = [
		'minecraft:loot_tables/blocks/emerald_ore',
		'minecraft:loot_tables/blocks/deepslate_emerald_ore',
	].forEach((loot_table) => {
		let ore_block =
			loot_table.split(':')[0] + ':' + loot_table.split('blocks/')[1];
		event.addJson(loot_table, {
			type: 'minecraft:block',
			pools: [
				{
					bonus_rolls: 0.0,
					entries: [
						{
							type: 'minecraft:alternatives',
							children: [
								{
									type: 'minecraft:item',
									conditions: [
										{
											condition: 'minecraft:match_tool',
											predicate: {
												enchantments: [
													{
														enchantment:
															'minecraft:silk_touch',
														levels: {
															min: 1,
														},
													},
												],
											},
										},
									],
									name: ore_block,
								},
								{
									type: 'minecraft:item',
									functions: [
										{
											add: false,
											count: {
												type: 'minecraft:uniform',
												max: 5.0,
												min: 2.0,
											},
											function: 'minecraft:set_count',
										},
										{
											enchantment: 'minecraft:fortune',
											formula: 'minecraft:ore_drops',
											function: 'minecraft:apply_bonus',
										},
										{
											function:
												'minecraft:explosion_decay',
										},
									],
									name: 'minecraft:emerald',
								},
							],
						},
					],
					rolls: 1.0,
				},
			],
			random_sequence:
				'minecraft:blocks/' + loot_table.split('blocks/')[1],
		});
	});
	//doing this with data because I can't just edit the chances using modifier
	event.addJson('minecraft:loot_tables/entities/wither_skeleton', {
		type: 'minecraft:entity',
		pools: [
			{
				bonus_rolls: 0.0,
				entries: [
					{
						type: 'minecraft:item',
						functions: [
							{
								add: false,
								count: {
									type: 'minecraft:uniform',
									max: 1.0,
									min: -1.0,
								},
								function: 'minecraft:set_count',
							},
							{
								count: {
									type: 'minecraft:uniform',
									max: 1.0,
									min: 0.0,
								},
								function: 'minecraft:looting_enchant',
							},
						],
						name: 'minecraft:coal',
					},
				],
				rolls: 1.0,
			},
			{
				bonus_rolls: 0.0,
				entries: [
					{
						type: 'minecraft:item',
						functions: [
							{
								add: false,
								count: {
									type: 'minecraft:uniform',
									max: 2.0,
									min: 0.0,
								},
								function: 'minecraft:set_count',
							},
							{
								count: {
									type: 'minecraft:uniform',
									max: 1.0,
									min: 0.0,
								},
								function: 'minecraft:looting_enchant',
							},
						],
						name: 'minecraft:bone',
					},
				],
				rolls: 1.0,
			},
			{
				bonus_rolls: 0.0,
				conditions: [
					{
						condition: 'minecraft:killed_by_player',
					},
					{
						chance: 0.1,
						condition: 'minecraft:random_chance_with_looting',
						looting_multiplier: 0.05,
					},
				],
				entries: [
					{
						type: 'minecraft:item',
						name: 'minecraft:wither_skeleton_skull',
					},
				],
				rolls: 1.0,
			},
		],
		random_sequence: 'minecraft:entities/wither_skeleton',
	});

	event.addJson('guardvillagers:loot_tables/entities/guard_armor', {
		type: 'guardvillagers:slot',
		pools: [
			{
				rolls: 1,
				entries: [
					{
						type: 'minecraft:loot_table',
						name: 'guardvillagers:entities/armor_sets/armor',
					},
				],
			},
			{
				rolls: 1,
				entries: [
					{
						type: 'minecraft:item',
						name: 'scguns:pax',
					},
					{
						type: 'minecraft:item',
						name: 'scguns:winnie',
					},
					{
						type: 'minecraft:item',
						name: 'scguns:callwell',
					},
					{
						type: 'minecraft:item',
						name: 'scguns:saketini',
					},
					{
						type: 'minecraft:item',
						name: 'kubejs:anthralite_spear',
					},
				],
				functions: [
					{
						function: 'guardvillagers:slot',
						slot: 'mainhand',
					},
				],
			},
			{
				rolls: 1,
				entries: [
					{
						type: 'minecraft:item',
						name: 'minecraft:bread',
						functions: [
							{
								function: 'minecraft:set_count',
								count: {
									min: 8,
									max: 16,
								},
							},
						],
						conditions: [
							{
								condition: 'minecraft:random_chance',
								chance: 0.5,
							},
						],
					},
					{
						type: 'minecraft:item',
						name: 'minecraft:shield',
						conditions: [
							{
								condition: 'minecraft:random_chance',
								chance: 0.5,
							},
						],
					},
				],
				functions: [
					{
						function: 'guardvillagers:slot',
						slot: 'offhand',
					},
				],
			},
		],
	});

	//can't do this with lootjs...
	event.addJson('minecraft:loot_tables/chests/ruined_portal', {
		type: 'minecraft:chest',
		pools: [
			{
				bonus_rolls: 0.0,
				entries: [
					{
						type: 'minecraft:item',
						functions: [
							{
								add: false,
								count: {
									type: 'minecraft:uniform',
									max: 2.0,
									min: 1.0,
								},
								function: 'minecraft:set_count',
							},
						],
						name: 'minecraft:obsidian',
						weight: 40,
					},
					{
						type: 'minecraft:item',
						functions: [
							{
								add: false,
								count: {
									type: 'minecraft:uniform',
									max: 4.0,
									min: 1.0,
								},
								function: 'minecraft:set_count',
							},
						],
						name: 'minecraft:flint',
						weight: 40,
					},
					{
						type: 'minecraft:item',
						functions: [
							{
								add: false,
								count: {
									type: 'minecraft:uniform',
									max: 18.0,
									min: 9.0,
								},
								function: 'minecraft:set_count',
							},
						],
						name: 'minecraft:iron_nugget',
						weight: 40,
					},
					{
						type: 'minecraft:item',
						name: 'minecraft:flint_and_steel',
						weight: 40,
					},
					{
						type: 'minecraft:item',
						name: 'scguns:gold_flare',
						weight: 20,
					},

					{
						type: 'minecraft:item',
						name: 'minecraft:fire_charge',
						weight: 40,
					},
					{
						type: 'minecraft:item',
						name: 'minecraft:golden_apple',
						weight: 15,
					},
					{
						type: 'minecraft:item',
						functions: [
							{
								add: false,
								count: {
									type: 'minecraft:uniform',
									max: 24.0,
									min: 4.0,
								},
								function: 'minecraft:set_count',
							},
						],
						name: 'minecraft:gold_nugget',
						weight: 15,
					},
					{
						type: 'minecraft:item',
						functions: [
							{
								function: 'minecraft:enchant_randomly',
							},
						],
						name: 'minecraft:golden_sword',
						weight: 15,
					},
					{
						type: 'minecraft:item',
						functions: [
							{
								function: 'minecraft:enchant_randomly',
							},
						],
						name: 'minecraft:golden_axe',
						weight: 15,
					},
					{
						type: 'minecraft:item',
						functions: [
							{
								function: 'minecraft:enchant_randomly',
							},
						],
						name: 'minecraft:golden_hoe',
						weight: 15,
					},
					{
						type: 'minecraft:item',
						functions: [
							{
								function: 'minecraft:enchant_randomly',
							},
						],
						name: 'minecraft:golden_shovel',
						weight: 15,
					},
					{
						type: 'minecraft:item',
						functions: [
							{
								function: 'minecraft:enchant_randomly',
							},
						],
						name: 'minecraft:golden_pickaxe',
						weight: 15,
					},
					{
						type: 'minecraft:item',
						functions: [
							{
								function: 'minecraft:enchant_randomly',
							},
						],
						name: 'minecraft:golden_boots',
						weight: 15,
					},
					{
						type: 'minecraft:item',
						functions: [
							{
								function: 'minecraft:enchant_randomly',
							},
						],
						name: 'minecraft:golden_chestplate',
						weight: 15,
					},
					{
						type: 'minecraft:item',
						functions: [
							{
								function: 'minecraft:enchant_randomly',
							},
						],
						name: 'minecraft:golden_helmet',
						weight: 15,
					},
					{
						type: 'minecraft:item',
						functions: [
							{
								function: 'minecraft:enchant_randomly',
							},
						],
						name: 'minecraft:golden_leggings',
						weight: 15,
					},
					{
						type: 'minecraft:item',
						functions: [
							{
								add: false,
								count: {
									type: 'minecraft:uniform',
									max: 12.0,
									min: 4.0,
								},
								function: 'minecraft:set_count',
							},
						],
						name: 'minecraft:glistering_melon_slice',
						weight: 5,
					},
					{
						type: 'minecraft:item',
						name: 'minecraft:golden_horse_armor',
						weight: 5,
					},
					{
						type: 'minecraft:item',
						name: 'minecraft:light_weighted_pressure_plate',
						weight: 5,
					},
					{
						type: 'minecraft:item',
						functions: [
							{
								add: false,
								count: {
									type: 'minecraft:uniform',
									max: 12.0,
									min: 4.0,
								},
								function: 'minecraft:set_count',
							},
						],
						name: 'minecraft:golden_carrot',
						weight: 5,
					},
					{
						type: 'minecraft:item',
						name: 'minecraft:clock',
						weight: 5,
					},
					{
						type: 'minecraft:item',
						functions: [
							{
								add: false,
								count: {
									type: 'minecraft:uniform',
									max: 8.0,
									min: 2.0,
								},
								function: 'minecraft:set_count',
							},
						],
						name: 'minecraft:gold_ingot',
						weight: 5,
					},
					{
						type: 'minecraft:item',
						name: 'minecraft:bell',
					},
					{
						type: 'minecraft:item',
						name: 'minecraft:enchanted_golden_apple',
					},
					{
						type: 'minecraft:item',
						functions: [
							{
								add: false,
								count: {
									type: 'minecraft:uniform',
									max: 2.0,
									min: 1.0,
								},
								function: 'minecraft:set_count',
							},
						],
						name: 'minecraft:gold_block',
					},
				],
				rolls: {
					type: 'minecraft:uniform',
					max: 8.0,
					min: 4.0,
				},
			},
			{
				bonus_rolls: 0.0,
				entries: [
					{
						type: 'minecraft:loot_table',
						name: 'minecraft:chests/bastion_bridge',
					},
					{
						type: 'minecraft:loot_table',
						name: 'minecraft:chests/bastion_other',
					},
					{
						type: 'minecraft:loot_table',
						name: 'minecraft:chests/bastion_treasure',
					},
					{
						type: 'minecraft:loot_table',
						name: 'minecraft:chests/bastion_hoglin_stable',
					},
				],
				rolls: {
					type: 'minecraft:uniform',
					max: 1.0,
					min: 1.0,
				},
			},
		],
	});
});
