const REMOVED_AIRCRAFT = [
	'immersive_aircraft:industrial_gears',
	'immersive_aircraft:engine',
	'immersive_aircraft:nether_engine',
	'immersive_aircraft:eco_engine',
	'immersive_aircraft:steel_boiler',
	'immersive_aircraft:boiler',
	'immersive_aircraft:gyrodyne',
];

ServerEvents.recipes((e) => {
	REMOVED_AIRCRAFT.forEach((item) => {
		e.remove({ output: item });
	});

	e.replaceInput(
		{ mod: 'immersive_aircraft' },
		'immersive_aircraft:engine',
		'thermal:dynamo_compression',
	);

    e.replaceInput(
		{ mod: 'man_of_many_planes' },
		'immersive_aircraft:engine',
		'thermal:dynamo_compression',
	);
 e.replaceInput(
		{ id: 'man_of_many_planes:economy_plane' },
		'immersive_aircraft:industrial_gears',
		'thermal:cured_rubber',
	);

    e.remove({ output: 'immersive_aircraft:sail' });
	e.shaped('immersive_aircraft:sail', ['AAB', 'AAB', 'AAB'], {
		A: '#thermal:rockwool',
		B: 'farmersdelight:rope',
	});

    e.remove({ output: 'immersive_aircraft:propeller' });
	e.shaped('immersive_aircraft:propeller', ['A  ', 'ABA', '  A'], {
		A: 'minecraft:iron_ingot',
		B: 'thermal:invar_ingot',
	});

    e.remove({ output: 'immersive_aircraft:hull' });
	e.shaped('immersive_aircraft:hull', ['AAA', 'BBB', 'AAA'], {
		A: '#minecraft:planks',
		B: 'caverns_and_chasms:tin_ingot',
	});

    e.remove({ output: 'immersive_aircraft:sturdy_pipes' });
	e.shaped('immersive_aircraft:sturdy_pipes', ['  A', 'BAB', 'A  '], {
		A: 'minecraft:copper_block',
		B: 'thermal:invar_ingot',
	});

    e.remove({ output: 'immersive_aircraft:warship' });
	e.shaped('immersive_aircraft:warship', ['AAA', 'BCB', 'DDD'], {
		A: 'immersive_aircraft:sail',
		B: 'thermal:dynamo_compression',
		C: 'immersive_aircraft:enhanced_propeller',
		D: 'immersive_aircraft:hull',
	});

    e.remove({ output: 'immersive_aircraft:bamboo_hopper' });
	e.shaped('immersive_aircraft:bamboo_hopper', ['ABA', 'CDC', 'DDD'], {
		A: 'immersive_aircraft:propeller',
		B: 'immersive_aircraft:hull',
		C: 'thermal:dynamo_compression',
		D: 'minecraft:bamboo_block',
	});

    e.remove({ output: 'immersive_aircraft:enhanced_propeller' });
	e.shaped('immersive_aircraft:enhanced_propeller', ['A  ', 'ABA', '  A'], {
		A: 'thermal:bronze_plate',
		B: 'immersive_aircraft:propeller',
	});

    e.remove({ output: 'immersive_aircraft:improved_landing_gear' });
	e.shaped(
		'immersive_aircraft:improved_landing_gear',
		[' AA', 'BBA', 'BB '],
		{ A: 'thermal:invar_ingot', B: 'thermal:cured_rubber' },
	);

    e.replaceInput({}, 'immersive_aircraft:industrial_gears', 'thermal:invar_gear')
});
