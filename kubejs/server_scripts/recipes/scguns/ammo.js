//AMMO & RELATED

ServerEvents.recipes((e) => {
	function press(output, input, die, energy) {
		e.recipes.thermal.press(output, [input, die], 0, energy);
	}

	function smelter(output, inputs, energy) {
		e.recipes.thermal.smelter(output, inputs, 0.5, energy);
	}

	function pulverize(output, input, xp, energy) {
		e.recipes.thermal.pulverizer(output, input, xp, energy);
	}

	e.shapeless('6x scguns:nitro_buckshot', [
		'4x #scguns:advanced_bullet_tips',
		'scguns:nitro_powder',
	]);

	let die_defs = {
		'scguns:small_casing_mold': [
			//0: result; 1: input
			['14x scguns:small_iron_casing', 'iron_ingot'],
			['14x scguns:small_brass_casing', '#forge:ingots/brass'],
			['14x scguns:small_copper_casing', 'copper_ingot'],
			[
				'14x scguns:small_diamond_steel_casing',
				'scguns:diamond_steel_ingot',
			],
			[
				'24x scguns_cnc:small_necromium_casing',
				'caverns_and_chasms:necromium_ingot',
			],
		],
		'scguns:medium_casing_mold': [
			['8x scguns:empty_cell', 'thermal:steel_ingot'],
			['10x scguns:medium_brass_casing', '#forge:ingots/brass'],
			['10x scguns:medium_copper_casing', 'copper_ingot'],
			[
				'10x scguns:medium_diamond_steel_casing',
				'scguns:diamond_steel_ingot',
			],
			['12x scguns:shulker_casing', 'thermal:enderium_ingot'],
			[
				'16x scguns_cnc:medium_necromium_casing',
				'caverns_and_chasms:necromium_ingot',
			],
		],
		'scguns:large_casing_mold': [
			['6x scguns:large_iron_casing', 'iron_ingot'],
			['4x scguns:large_brass_casing', '#forge:ingots/brass'],
		],
		'scguns:bullet_mold': [
			['8x scguns:hardened_bullet', '#scguns:advanced_bullet_material'],
			['10x scguns:hardened_bullet', 'scguns:diamond_steel_ingot'],
			['8x scguns:standard_bullet', '#scguns:standard_bullet_material'],
			['8x scguns_cnc:silver_bullet', '#forge:ingots/silver'],
		],
	};

	for (let [die, recipes] of Object.entries(die_defs)) {
		for (let recipe of recipes) {
			press(recipe[0], recipe[1], die, 2000);
		}
	}

	const stonecutter_defs = {
		'6x scguns:standard_bullet': '#scguns:standard_bullet_material',
		'6x scguns:medium_copper_casing': 'copper_ingot',
		'12x scguns:small_copper_casing': 'copper_ingot',
	};

	for (let [result, input] of Object.entries(stonecutter_defs)) {
		e.stonecutting(result, input);
	}

	let bullet_def = {
		'scguns:compact_copper_round': [
			'scguns:small_copper_casing',
			'#scguns:gunpowder_dust',
			'#scguns:stan_bullet_tips',
		],
		'scguns:standard_copper_round': [
			'scguns:medium_copper_casing',
			'2x #scguns:gunpowder_dust',
			'#scguns:stan_bullet_tips',
		],
		'scguns:grapeshot': [
			'#forge:rods/wooden',
			'2x #scguns:gunpowder_dust',
			'2x #scguns:stan_bullet_tips',
		],
		'scguns:ramrod_round': [
			'scguns:small_iron_casing',
			'kubejs:smokeless_powder_dust',
			'#scguns:stan_bullet_tips',
		],
		'scguns:hog_round': [
			'scguns:small_iron_casing',
			'scguns:sheol_dust',
			'#forge:nuggets/gold',
		],
		'scguns:compact_advanced_round': [
			'scguns:small_brass_casing',
			'#scguns:gunpowder_dust',
			'#scguns:advanced_bullet_tips',
		],
		'scguns:advanced_round': [
			'scguns:medium_brass_casing',
			'2x #scguns:gunpowder_dust',
			'#scguns:advanced_bullet_tips',
		],
		'scguns_cnc:compact_hex_round': [
			'scguns_cnc:small_necromium_casing',
			'kubejs:smokeless_powder_dust',
			['scguns_cnc:silver_bullet', '#forge:nuggets/silver'],
		],
		'scguns_cnc:hex_round': [
			'scguns_cnc:medium_necromium_casing',
			'2x kubejs:smokeless_powder_dust',
			['scguns_cnc:silver_bullet', '#forge:nuggets/silver'],
		],
		'scguns_cnc:hexshot': [
			'scguns_cnc:medium_necromium_casing',
			'scguns_cnc:hex_buckshot',
			'minecraft:paper',
		],
		'2x scguns_cnc:bluntshot': [
			'scguns:shotgun_shell',
			'caverns_and_chasms:spinel',
		],
		'scguns:krahg_round': [
			'scguns:large_brass_casing',
			'scguns:nitro_powder_dust',
			'#scguns:advanced_bullet_tips',
		],
		'scguns:beowulf_round': [
			'scguns:small_diamond_steel_casing',
			'kubejs:smokeless_powder_dust',
			'#scguns:advanced_bullet_tips',
		],
		'scguns:gibbs_round': [
			'scguns:medium_diamond_steel_casing',
			'2x kubejs:smokeless_powder_dust',
			'#scguns:advanced_bullet_tips',
		],
		'scguns:shotgun_shell': [
			'scguns:small_copper_casing',
			'scguns:buckshot',
			'paper',
		],
		'scguns:bearpack_shell': [
			'scguns:medium_brass_casing',
			'scguns:buckshot',
			'kubejs:smokeless_powder',
			'paper',
		],
		'scguns:shock_cell': [
			'scguns:empty_cell',
			'thermal:electrum_nugget',
			'redstone',
		],
		'scguns:sculk_cell': ['scguns:empty_cell', 'scguns:peal'],
		'scguns:shulkshot': [
			'scguns:shulker_casing',
			'2x kubejs:smokeless_powder_dust',
			'#scguns:advanced_bullet_tips',
		],
		'scguns:microjet': [
			'scguns:small_iron_casing',
			'scguns:sheol_dust',
			'kubejs:smokeless_powder_dust',
			'#minecraft:buttons',
		],
		'scguns:rocket': [
			'scguns:large_iron_casing',
			'scguns:sheol',
			'kubejs:smokeless_powder',
			'#minecraft:buttons',
		],
		'scguns:osborne_slug': [
			'scguns:large_iron_casing',
			'scguns:nitro_powder',
			'sculkhorde:ferriscite',
		],
		'scguns:energy_core': [
			'scguns:empty_core',
			'scguns:charged_amethyst_shard',
		],
		'scguns:energy_cell': ['scguns:empty_cell', 'scguns:plasma'],

		'scguns:shatter_round': [
			'scguns:medium_brass_casing',
			'3x #scguns:gunpowder_dust',
			'scguns:flechette',
		],
		'scguns:frog_dart': [
			'scguns:needle',
			'#scguns:gunpowder_dust',
			'scguns:small_iron_casing',
		],
		'scguns:he_grenade_round': [
			'scguns:large_brass_casing',
			'scguns:sheol',
			'#minecraft:buttons',
		],
		'scguns:bouncy_grenade_round': [
			'scguns:large_brass_casing',
			'scguns:sheol',
			'minecraft:slime_ball',
		],
		'scguns:gas_grenade_round': [
			'scguns:large_brass_casing',
			'#forge:dusts/sulfur',
			'#minecraft:buttons',
		],
		'scguns:fire_grenade_round': [
			'scguns:large_brass_casing',
			'scguns:vehement_coal',
			'#minecraft:buttons',
		],
        'scguns_cnc:ricoshot_round': [
            'scguns:medium_brass_casing',
            '#scguns:gunpowder_dust',
            'caverns_and_chasms:tin_nugget'
        ],
        'scguns_cnc:copper_slug': [
            'scguns:medium_brass_casing',
            '3x #scguns:gunpowder_dust',
            '#forge:storage_blocks/copper'
        ]
	};

	for (let [bullet, recipe] of Object.entries(bullet_def)) {
		e.shapeless(bullet, recipe);
	}

	e.remove({ id: 'scguns:shock_cell' });
	e.replaceInput(
		{ id: 'scguns_cnc:hex_buckshot' },
		'#forge:gunpowder',
		'kubejs:smokeless_powder',
	);

	//plasma
	e.recipes.thermal.bottler('kubejs:redstone_cell', [
		Fluid.of('thermal:redstone', 150),
		'scguns:empty_cell',
	]);

    e.remove({id: 'scguns:plasma'})
    e.remove({id: 'scguns:plasma_block_charging'})
	e.custom({
		type: 'scguns:lightning_battery',
		processingTime: 50,
		requiredEnergy: 10000,
		ingredients: [
			{
				item: 'kubejs:redstone_cell',
			},
		],
		result: {
			count: 1,
			item: 'scguns:energy_cell',
		},
	});

    e.shapeless('scguns:plasma', ['scguns:energy_cell']).replaceIngredient('scguns:energy_cell', 'scguns:empty_cell')
});
