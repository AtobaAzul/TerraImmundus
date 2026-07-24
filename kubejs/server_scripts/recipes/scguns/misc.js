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

	e.remove({ id: 'scguns:molotov_cocktail' });
	e.recipes.thermal.bottler('scguns:molotov_cocktail', [
		Fluid.of('kubejs:ethanol', 125),
		'glass_bottle',
	]);

	e.replaceOutput({}, 'thermal:niter_dust', 'scguns:niter_dust');

	//thermal integration with scguns
	//remove scguns blocks
	let remove_scguns = [
		'scguns:polar_generator',
		'scguns:macerator',
		'scguns:powered_macerator',
		'scguns:mechanical_press',
		'scguns:powered_mechanical_press',
		'scguns:treated_brass_blend',
		'scguns:diamond_steel_blend',
		'scguns:scorched_blend',
		'scbrass:brass_blend',
		'scguns:white_flag',
	].forEach((item) => {
		e.remove({ output: item });
		e.remove({ input: item });
	});

	e.remove({ id: /.*scguns.*blueprint.*/ });

	//remove scguns recipe types
	e.remove({ type: 'scguns:macerating' });
	e.remove({ type: 'scguns:powered_macerating' });

	e.remove({ type: 'scguns:mechanical_pressing' });
	e.remove({ type: 'scguns:powered_mechanical_pressing' });

	//mold + die integration
	//add thermal dies to stonecutter recipe
	let thermal_dies = [
		'thermal:press_coin_die',
		'thermal:press_gear_die',
		'thermal:press_packing_2x2_die',
		'thermal:press_packing_3x3_die',
		'thermal:press_unpacking_die',
	].forEach((die) => {
		e.remove({ output: die });
		e.stonecutting(die, 'scguns:blank_mold');
	});

	e.replaceInput(
		{ output: 'scguns:blank_mold' },
		'scguns:anthralite_ingot',
		'thermal:iron_plate',
	);

	pulverize(
		Item.of('scguns:phosphor_dust').withChance(0.1),
		'scguns:phosphorite',
		0.1,
		2000,
	);
	pulverize(
		Item.of('scguns:phosphor_dust').withChance(3.5),
		'scguns:raw_phosphor',
		0.5,
		2000,
	);
	pulverize(
		Item.of('scguns:phosphor_dust').withChance(9.75),
		'scguns:rich_phosphorite',
		0.75,
		2000,
	);

	pulverize(
		[
			Item.of('kubejs:zinc_dust').withChance(1.25),
			Item.of('thermal:iron_dust').withChance(0.05),
		],
		'scbrass:raw_zinc',
		0.25,
		2000,
	);
	pulverize(
		[
			Item.of('kubejs:zinc_dust').withChance(2),
			Item.of('thermal:iron_dust').withChance(0.1),
			Item.of('gravel').withChance(0.2),
		],
		'#forge:ores/zinc',
		0.5,
		4000,
	);
	smelter(
		[
			Item.of('scbrass:zinc_ingot').withChance(1),
			Item.of('thermal:rich_slag').withChance(0.2),
			Item.of('iron_ingot').withChance(0.2),
		],
		'#forge:ores/zinc',
		3200,
	);

	//smelter recipes
	pulverize(
		[
			Item.of('scguns:anthralite_dust').withChance(1.25),
			Item.of('thermal:lead_dust').withChance(0.05),
		],
		'scguns:raw_anthralite',
		0.25,
		2000,
	);
	pulverize(
		[
			Item.of('scguns:anthralite_dust').withChance(2),
			Item.of('gravel').withChance(0.2),
			Item.of('thermal:lead_dust').withChance(0.1),
		],
		'#forge:ores/anthralite',
		0.5,
		4000,
	);
	smelter(
		[
			Item.of('scguns:anthralite_ingot').withChance(1),
			Item.of('thermal:rich_slag').withChance(0.2),
			Item.of('thermal:lead_ingot').withChance(0.2),
		],
		'#forge:ores/anthralite',
		3200,
	);

	smelter(
		[Item.of('scbrass:zinc_ingot').withChance(1.5), Item.of('iron_nugget')],
		'scbrass:raw_zinc',
		2000,
	);

	e.remove({ id: 'scguns:ancient_brass_block' });


    e.remove({id: /scguns:guns\/exo_suit_.*_from_gun_bench/})
	e.shaped('scguns:exo_suit_chestplate', ['A A','BCB','AAA'], {A: 'thermal:steel_plate',B: 'thermal:redstone_servo',C: 'thermal:netherite_gear'})
    e.shaped('scguns:exo_suit_helmet', ['AAA','ABA',' C '], {A: 'thermal:steel_plate',B: 'thermal:redstone_servo',C: 'thermal:netherite_gear'})
    e.shaped('scguns:exo_suit_boots', ['ABA','ACA'], {A: 'thermal:steel_plate',B: 'thermal:redstone_servo',C: 'thermal:netherite_gear'})
    e.shaped('scguns:exo_suit_leggings', ['ABA','C C','A A'], {A: 'thermal:steel_plate',B: 'thermal:netherite_gear',C: 'thermal:redstone_servo'})
    e.remove({id:'scguns:cog_locator'})

    e.replaceInput({id: /(scguns:plasma_lantern|scguns:anthralite_lamp)/}, /.*plasma.*/, 'scguns:plasma_nugget')

    e.remove({id: /(scguns:silencer|scguns:advanced_silencer)/})
    e.shaped('scguns:silencer', ['  A',' B ','A  '], {A: 'scguns:anthralite_ingot',B: 'minecraft:white_wool'})
    e.shaped('scguns:advanced_silencer', ['  A',' B ','A  '], {A: 'thermal:steel_ingot',B: 'thermal:cured_rubber_block'})

    e.remove({id: 'scguns:bump_stock'})
    e.remove({id: 'scguns:advanced_exo_suit_core_from_netherite'})

    e.remove({id: 'scguns:vicious_acid'})
    e.shaped('scguns:vicious_acid_bucket', [
        'AAA',
        'ABA',
        'AAA'
    ], {
        A: 'sculkhorde:sculk_acidic_projectile',
        B: 'minecraft:water_bucket'
    })
});
