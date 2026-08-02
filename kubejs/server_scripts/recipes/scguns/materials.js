//CRAFTING MATERIALS

const remove_scguns = [
	'scguns:the_pact',
	'scguns:flare_pistol',
	'scguns:anthralite/anthralite_ingot_from_smelting_raw_anthralite',
	'scguns:anthralite/anthralite_ingot_from_smelting_anthralite_ore',
	'scguns:anthralite/anthralite_ingot_from_smelting_deepslate_anthralite_ore',
	'scguns:nitro_powder',
    //not axctually scguns but i'll bundle these together
    'thermal:smelting/nickel_ingot_from_deepslate_ore_smelting',
    'thermal:smelting/nickel_ingot_from_raw_smelting',
    'scbrass:zinc_ingot_from_smelting_raw_zinc',
    'scbrass:zinc_ingot_from_smelting_deepslate_zinc_ore'
];

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

	remove_scguns.forEach((item) => {
		e.remove({ id: item });
	});

    e.blasting('scguns:anthralite_ingot', 'scguns:anthralite_dust')
    e.smelting('scguns:anthralite_ingot', 'scguns:anthralite_dust')

	e.shapeless('4x scguns:sheol', [
		'2x sugar',
		'glowstone_dust',
		'2x #forge:dusts/niter',
	]);

    e.shapeless('scguns:the_pact', [
        'paper', '4x caverns_and_chasms:living_flesh'
    ])

	e.shapeless('8x scguns:peal', [
		'#forge:dusts/sulfur',
		'2x charcoal',
		'2x scguns:phosphor_dust',
		'sculkhorde:soulite_shard',
	]);

	e.shapeless('1x scguns:nitro_powder', [
		'3x scguns:vehement_coal',
		'2x minecraft:glowstone_dust',
		'2x kubejs:smokeless_powder',
		'2x scguns:peal',
	]);

	e.shapeless('scguns:exo_suit_core', [
		'scguns:plasma',
		'scguns:energy_cell',
		'scguns:treated_brass_ingot',
	]);

    let barrel_materials = [
        'iron',  'steel'
    ].forEach((material) => {
        let base = material == 'iron' ? '#forge:ingots/' : '#forge:plates/';
        e.shaped('kubejs:' + material + '_gun_barrel', ['  A', ' A ', 'A  '], {
            A: base + material,
        });
        e.shaped('kubejs:' + material + '_heavy_gun_barrel', ['  A', ' AA', 'AA '], {
            A: base + material,
        })
    })


	e.shaped('kubejs:firing_hammer', ['AAA', ' B ', ' C '], {
		A: '#forge:ingots/iron',
		B: 'thermal:iron_gear',
		C: 'redstone',
	});

	e.remove({ id: 'scguns:firing_unit' });
	e.shaped('scguns:firing_unit', ['  A', ' B ', 'C  '], {
		A: '#forge:nuggets/iron',
		B: 'thermal:copper_gear',
		C: 'scguns:anthralite_ingot',
	});

	e.remove({ id: 'scguns:rapid_firing_unit' });
	e.shaped('scguns:rapid_firing_unit', [' DA', 'BCD', 'CB '], {
		A: '#forge:nuggets/iron',
		B: 'thermal:copper_gear',
		C: 'scguns:anthralite_ingot',
		D: 'redstone',
	});

	e.shaped('kubejs:hardened_firing_unit', ['  A', ' B ', 'C  '], {
		A: '#forge:nuggets/invar',
		B: 'thermal:bronze_gear',
		C: 'thermal:invar_ingot',
	});

	e.shaped('kubejs:hardened_rapid_firing_unit', [' DA', 'BCD', 'CB '], {
		A: '#forge:nuggets/invar',
		B: 'thermal:bronze_gear',
		C: 'thermal:invar_ingot',
		D: 'redstone',
	});

    e.shaped('kubejs:enderium_gun_frame', [
        ' A ',
        'A A',
        'AAA'
    ], {
        A: '#forge:ingots/enderium'
    })


    e.replaceInput({id: 'scguns:iron_gun_frame'}, 'iron_ingot', 'thermal:invar_ingot')


	smelter(
		'2x scguns:depleted_diamond_steel_ingot',
		[
			'2x #terraimmundus:dust_or_ingot/netherite',
			'#forge:dusts/diamond',
			'#forge:dusts/lapis',
		],
		12000
	);

	smelter(
		'5x scbrass:brass_ingot',
		[
			'3x #terraimmundus:dust_or_ingot/copper',
			'2x #terraimmundus:dust_or_ingot/zinc',
		],
		6400
	);

	smelter(
		'3x scguns:scorched_ingot',
		[
			'2x #terraimmundus:dust_or_ingot/netherite',
			'4x scguns:vehement_coal',
			'sculkhorde:ferriscite',
		],
		24000
	);

	smelter(
		'2x scguns:treated_brass_ingot',
		[
			'2x #terraimmundus:dust_or_ingot/netherite',
			'2x #terraimmundus:dust_or_ingot/brass',
			'2x #terraimmundus:dust_or_ingot/quartz',
		],
		3200
	);

	pulverize('#forge:dusts/anthralite', `#forge:ingots/anthralite`, 0, 2000);
	smelter('#forge:ingots/anthralite', `#forge:dusts/anthralite`, 1600);


    e.recipes.thermal.crystallizer('2x kubejs:smokeless_powder', ['thermal:apatite_dust', 'kubejs:spinel_dust', Fluid.of('thermal:heavy_oil', 250)])
    e.shapeless('6x kubejs:smokeless_powder_dust', ['kubejs:smokeless_powder'])
	e.shapeless('kubejs:smokeless_powder', ['6x kubejs:smokeless_powder_dust'])
    e.remove({output: 'scguns:gun_parts_mold'})

    e.shaped('scguns:gun_parts', [
        'AA ',
        'BAB',
        ' AA'
    ], {
        A: '#forge:ingots/anthralite',
        B: '#forge:gears/copper',
    })


 e.shaped('scguns:heavy_gun_parts', [
        'AA ',
        'BCB',
        ' AA'
    ], {
        A: '#forge:plates/constantan',
        B: '#forge:gears/invar',
        C: 'scguns:gun_parts'
    })

    
    e.shaped('kubejs:reinforced_gun_parts', [
        ' C ',
        'ABA',
        ' C '
    ], {
        C: '#forge:gears/steel',
        A: '#forge:plates/electrum',
        B: 'scguns:heavy_gun_parts'
    })

    e.smithing('kubejs:resonant_gun_parts', 'thermal:lumium_gear', 'kubejs:reinforced_gun_parts', 'thermal:upgrade_augment_3');

    e.recipes.thermal.bottler('scguns:diamond_steel_ingot', [Fluid.of('cofh_core:experience', 60), 'scguns:depleted_diamond_steel_ingot'])
    e.recipes.thermal.bottler('kubejs:diamond_steel_dust', [Fluid.of('cofh_core:experience', 60), 'scgukubejsns:depleted_diamond_steel_dust'])

    e.shaped('kubejs:laser_optics', ['  A', ' AB', 'AC '], {
        A: 'thermal:ruby',
        B: 'thermal:constantan_gear',
        C: 'thermal:constantan_ingot'
    })

    e.remove({id: 'scguns_cnc:necromium_gun_frame'})
    e.shaped('scguns_cnc:necromium_gun_frame', [' A ', 'A A', 'AAA'], {
        A: 'caverns_and_chasms:necromium_ingot'
    })
});
