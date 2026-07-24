ServerEvents.recipes((e) => {
	function smelter(output, inputs, energy) {
		e.recipes.thermal.smelter(output, inputs, 0.5, energy);
	}

	smelter(
		'2x caverns_and_chasms:necromium_ingot',
		[
			'2x #terraimmundus:dust_or_ingot/netherite',
			'2x #terraimmundus:dust_or_ingot/silver',
		],
		12000,
	);

	e.remove({ id: 'savage_and_ravage:blast_proof_plating' });
	smelter(
		'4x savage_and_ravage:blast_proof_plating',
		[
			'3x #terraimmundus:dust_or_ingot/electrum',
			'2x savage_and_ravage:creeper_spores',
		],
		4000,
	);

	function pulverize(output, input, xp, energy) {
		e.recipes.thermal.pulverizer(output, input, xp, energy);
	}

	//pulverizer recipes
	let new_powders = [
		'zinc',
		'diamond_steel',
		'treated_brass',
		'scorched',
		'brass',
		'depleted_diamond_steel',
		'necromium',
		//'spinel_',
	].forEach((material) => {
		pulverize(
			'#forge:dusts/' + material,
			`#forge:ingots/` + material,
			0,
			2000,
		);

		e.smelting(`#forge:ingots/${material}`, `#forge:dusts/${material}`);
		e.blasting(`#forge:ingots/${material}`, `#forge:dusts/${material}`);
	});

	pulverize('kubejs:spinel_dust', 'caverns_and_chasms:spinel', 0, 2000);

	//stamping press replacement

	//lumisene & glowstone

	e.recipes.thermal.press(
		[Fluid.of(`supplementaries:lumisene`, 125)],
		'glow_berries',
	);
	e.recipes.thermal.crystallizer(
		'8x glowstone_dust',
		[Fluid.of('supplementaries:lumisene', 500), '3x scguns:phosphor_dust'],
		0.5,
		2500,
	);
	e.recipes.thermal.bottler('supplementaries:lumisene_bottle', [
		Fluid.of('supplementaries:lumisene', 250),
		'minecraft:glass_bottle',
	]);
	e.recipes.thermal.bottler('supplementaries:lumisene_bucket', [
		Fluid.of('supplementaries:lumisene', 1000),
		'bucket',
	]);

	//steel replacing treated iron
	e.replaceInput(
		{ input: 'scguns:treated_iron_ingot' },
		'scguns:treated_iron_ingot',
		'thermal:steel_ingot',
	);
	e.replaceOutput(
		{ output: 'scguns:treated_iron_ingot' },
		'scguns:treated_iron_ingot',
		'thermal:steel_ingot',
	);
	e.replaceInput(
		{ input: 'scguns:treated_iron_nugget' },
		'scguns:treated_iron_nugget',
		'thermal:steel_nugget',
	);
	e.replaceOutput(
		{ output: 'scguns:treated_iron_nugget' },
		'scguns:treated_iron_nugget',
		'thermal:steel_nugget',
	);

	e.replaceInput(
		{ input: 'scguns:treated_iron_block' },
		'scguns:treated_iron_block',
		'thermal:steel_block',
	);
	e.replaceOutput(
		{ output: 'scguns:treated_iron_block' },
		'scguns:treated_iron_block',
		'thermal:steel_block',
	);

	//scuffed replace input
	/*e.forEachRecipe({ type: 'scguns:gun_bench' }, (recipe) => {
		let json = JsonIO.toObject(recipe.json);
		let id = recipe.getId();
		let remove = false;

		for (let [part, item] of Object.entries(json.ingredients)) {
			if (Item.of(item).id == 'scguns:treated_iron_ingot') {
				json.ingredients[part] = { item: 'thermal:steel_ingot' };
				remove = true;
			}
			if (Item.of(item).id == 'scguns:treated_iron_block') {
				json.ingredients[part] = { item: 'thermal:steel_block' };
				remove = true;
			}
			if (Item.of(item).id == 'minecraft:crimson_planks') {
				json.ingredients[part] = { item: 'thermal:rose_gold_ingot' };
				remove = true;
			}

			if (Item.of(item).id == 'scguns:copper_disc') {
				json.ingredients[part] = { item: 'thermal:rf_coil' };
				remove = true;
			}
		}

		if (remove) {
			e.remove({ id: id });
			e.custom(json).id(id);
		}
	});*/

	e.replaceInput({}, 'scguns:copper_disc', 'thermal:copper_gear');

	//sculk into OIL!!
	e.recipes.thermal.pyrolyzer(Fluid.of('thermal:crude_oil', 75), 'sculk');
	e.recipes.thermal.pyrolyzer(
		Fluid.of('thermal:crude_oil', 75),
		'sculk_vein',
	);
	e.recipes.thermal.pyrolyzer(
		Fluid.of('thermal:crude_oil', 75),
		'sob:sculk_tendril',
	);

	//remove blends
	const BLENDS = [
		'thermal:enderium_dust',
		'thermal:signalum_dust',
		'thermal:lumium_dust',
		'thermal:electrum_dust',
	];

	BLENDS.forEach((blend) => {
		e.remove({ output: blend, type: 'crafting_shapeless' });
	});

	//universal sawmill is better.
	e.remove({ id: 'woodworks:sawmill' });

	e.replaceInput(
		{ id: 'brewinandchewin:keg' },
		'honeycomb',
		'thermal:copper_plate',
	);

	e.remove({ id: 'supplementaries:rope' });
	e.shaped('8x farmersdelight:rope', ['A', 'A'], {
		A: 'supplementaries:flax',
	});

	//watt about power
	e.remove({
		id: 'refurbished_furniture:constructing/light_circuit_breaker',
	});
	e.remove({ id: 'refurbished_furniture:constructing/dark_circuit_breaker' });

	e.shaped('cfm_wap:light_circuit_breaker', ['AAA', 'ABA', 'ACA'], {
		A: '#forge:ingots/tin',
		B: 'thermal:rf_coil',
		C: '#forge:gears/copper',
	});

	e.shapeless('cfm_wap:dark_circuit_breaker', [
		'cfm_wap:light_circuit_breaker',
		'#forge:dyes_black',
	]);

	e.remove({ id: 'refurbished_furniture:light_electricity_generator' });
	e.remove({ id: 'refurbished_furniture:dark_electricity_generator' });

	//cobble bricks
	e.remove({ id: 'caverns_and_chasms:cobblestone_bricks' });
	e.shaped('4x caverns_and_chasms:cobblestone_bricks', ['AA', 'AA'], {
		A: 'quark:cobblestone_bricks',
	});

	//radio mod needs gilded blackstone
	e.recipes.thermal.smelter('gilded_blackstone', [
		'blackstone',
		'#terraimmundus:dust_or_ingot/gold',
	]);

	//
	e.remove({ id: 'quark:automation/crafting/iron_rod' });
	e.shaped('quark:iron_rod', ['A', 'A', 'A'], {
		A: '#forge:ingots/iron',
	});

	//phosphorous phyto
	e.shapeless('2x thermal:phytogro', [
		'#forge:sand',
		'bone_meal',
		'2x scguns:phosphor_dust',
		['#forge:gems/niter', '#forge:dusts/niter'],
	]);
	e.shapeless('4x thermal:phytogro', [
		'#forge:sand',
		'4x scguns:phosphor_dust',
		['#forge:gems/niter', '#forge:dusts/niter'],
	]);

	e.replaceInput(
		{ id: 'simpleradio:transmitting_module' },
		'ender_pearl',
		'thermal:signalum_ingot',
	);

	e.remove({ id: 'sob:fermenting/bustling_brew' });
	e.custom({
		type: 'brewinandchewin:fermenting',
		basefluid: {
			count: 250,
			fluid: 'cofh_core:experience',
		},
		experience: 0.0,
		fermentingtime: 6000,
		ingredients: [
			{
				item: 'quark:ancient_fruit',
			},
			{
				item: 'minecraft:emerald',
			},
			{
				item: 'minecraft:glow_berries',
			},
			{
				item: 'minecraft:glow_berries',
			},
		],
		recipe_book_tab: 'drinks',
		result: {
			count: 250,
			fluid: 'sob:bustling_brew',
		},
		temperature: 4,
	});

	e.remove({ id: 'sob:fermenting/experience_bottle' });
	e.custom({
		type: 'brewinandchewin:fermenting',
		basefluid: {
			count: 250,
			fluid: 'minecraft:water',
		},
		experience: 0.0,
		fermentingtime: 3000,
		ingredients: [
			{
				item: 'minecraft:emerald',
			},
			{
				item: 'minecraft:lapis_lazuli',
			},
			{
				item: 'sob:sculk_tendril',
			},
			{
				item: 'sob:sculk_tendril',
			},
		],
		recipe_book_tab: 'drinks',
		result: {
			count: 250,
			fluid: 'cofh_core:experience',
		},
		temperature: 1,
	});

	e.remove({ id: 'sob:pouring/experience_bottle' });
	e.custom({
		type: 'brewinandchewin:keg_pouring',
		amount: 250,
		filling: true,
		fluid: 'cofh_core:experience',
		output: {
			item: 'minecraft:experience_bottle',
		},
		container: {
			item: 'minecraft:glass_bottle',
		},
		strict: false,
	});

	e.remove({ id: 'thermal:gunpowder_4' });
	e.shapeless('5x gunpowder', [
		'3x #forge:dusts/sulfur',
		'2x #forge:dusts/niter',
		'2x charcoal',
		'scguns:phosphor_dust',
	]);
	e.shapeless('gunpowder', [
		'#forge:dusts/sulfur',
		'#forge:dusts/niter',
		'charcoal',
	]);

    e.remove({id: 'thermal:storage/gunpowder_block'})
    e.remove({id: 'quark:building/crafting/compressed/gunpowder_sack'})
});

ServerEvents.compostableRecipes((e) => {
	e.add('sob:sculk_tendril', 0.25);
});
