ServerEvents.recipes((e) => {
	e.shaped(
		'minecraft:netherite_upgrade_smithing_template',
		['AAA', 'ABA', ' A '],
		{ A: 'minecraft:netherrack', B: 'quark:diamond_heart' }
	);
	e.shaped(
		'minecraft:rib_armor_trim_smithing_template',
		['AAA', 'BCB', ' A '],
		{
			A: 'minecraft:nether_brick',
			B: 'minecraft:bone',
			C: 'quark:diamond_heart',
		}
	);
	e.shaped(
		'caverns_and_chasms:exile_armor_trim_smithing_template',
		['AAA', 'ABA', ' A '],
		{ A: 'minecraft:nether_brick', B: 'quark:diamond_heart' }
	);
	e.shaped(
		'minecraft:vex_armor_trim_smithing_template',
		['AAA', 'ABA', ' A '],
		{ A: 'minecraft:stone', B: 'quark:diamond_heart' }
	);
	e.shaped(
		'minecraft:sentry_armor_trim_smithing_template',
		['AAA', 'ABA', ' A '],
		{ A: 'minecraft:cobblestone', B: 'quark:diamond_heart' }
	);
	e.shaped(
		'minecraft:wild_armor_trim_smithing_template',
		['AAA', 'ABA', ' A '],
		{ A: 'minecraft:mossy_cobblestone', B: 'quark:diamond_heart' }
	);
	e.shaped(
		'minecraft:coast_armor_trim_smithing_template',
		['AAA', 'ABA', ' A '],
		{ A: 'upgrade_aquatic:kelpy_cobblestone', B: 'quark:diamond_heart' }
	);
	e.shaped(
		'minecraft:dune_armor_trim_smithing_template',
		['AAA', 'ABA', ' A '],
		{ A: 'minecraft:sandstone', B: 'quark:diamond_heart' }
	);
	e.shaped(
		'atmospheric:petrified_armor_trim_smithing_template',
		['AAA', 'ABA', ' A '],
		{ A: 'atmospheric:arid_sandstone', B: 'quark:diamond_heart' }
	);
	e.shaped(
		'atmospheric:druid_armor_trim_smithing_template',
		['AAA', 'ABA', ' A '],
		{ A: 'atmospheric:red_arid_sandstone', B: 'quark:diamond_heart' }
	);
	e.shaped(
		'atmospheric:apostle_armor_trim_smithing_template',
		['AAA', 'ABA', ' A '],
		{ A: 'atmospheric:kousa_planks', B: 'quark:diamond_heart' }
	);
	e.shaped(
		'minecraft:wayfinder_armor_trim_smithing_template',
		['AAA', 'ABA', ' A '],
		{ A: 'minecraft:soul_sand', B: 'quark:diamond_heart' }
	);
	e.shaped(
		'minecraft:raiser_armor_trim_smithing_template',
		['AAA', 'ABA', ' A '],
		{ A: 'minecraft:soul_soil', B: 'quark:diamond_heart' }
	);
	e.shaped(
		'minecraft:shaper_armor_trim_smithing_template',
		['AAA', 'ABA', ' A '],
		{ A: 'quark:soul_sandstone_bricks', B: 'quark:diamond_heart' }
	);
	e.shaped(
		'minecraft:host_armor_trim_smithing_template',
		['AAA', 'ABA', ' A '],
		{ A: 'quark:soul_sandstone', B: 'quark:diamond_heart' }
	);
	e.shaped(
		'minecraft:snout_armor_trim_smithing_template',
		['AAA', 'ABA', ' A '],
		{ A: 'minecraft:blackstone', B: 'quark:diamond_heart' }
	);
	e.shaped(
		'minecraft:ward_armor_trim_smithing_template',
		['AAA', 'ABA', ' A '],
		{ A: 'minecraft:cobbled_deepslate', B: 'quark:diamond_heart' }
	);
	e.shaped(
		'minecraft:silence_armor_trim_smithing_template',
		['AAB', 'BCA', ' A '],
		{
			A: 'minecraft:cobbled_deepslate',
			B: 'sob:sculk_tendril',
			C: 'quark:diamond_heart',
		}
	);
	e.shaped(
		'minecraft:eye_armor_trim_smithing_template',
		['AAA', 'ABA', ' A '],
		{ A: 'minecraft:end_stone', B: 'quark:diamond_heart' }
	);
	e.shaped(
		'minecraft:tide_armor_trim_smithing_template',
		['AAA', 'ABA', ' A '],
		{ A: 'minecraft:prismarine', B: 'quark:diamond_heart' }
	);
	e.shaped(
		'minecraft:spire_armor_trim_smithing_template',
		['AAA', 'ABA', ' A '],
		{ A: 'minecraft:purpur_block', B: 'quark:diamond_heart' }
	);
	e.shaped(
		'neapolitan:primal_armor_trim_smithing_template',
		['AAA', 'ABA', ' A '],
		{ A: 'neapolitan:banana_stalk', B: 'quark:diamond_heart' }
	);

	e.shaped('quark:smithing_template_rune', ['ABA', 'ACA', ' A '], {
		A: 'minecraft:cobblestone',
		B: '#quark:corundum',
		C: 'quark:diamond_heart',
	});
});
