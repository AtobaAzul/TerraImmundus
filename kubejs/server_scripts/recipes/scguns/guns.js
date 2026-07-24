//GUNS

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


	//sculk redo
	e.remove({ id: 'scguns:guns/whispers_from_gun_bench' });
	e.custom({
		type: 'scguns:gun_bench',
		result: {
			item: 'scguns:whispers',
			count: 1,
		},
		ingredients: {
			gun_internal_1: {
				item: 'kubejs:hardened_rapid_firing_unit',
			},
			gun_internal_2: {
				item: 'minecraft:echo_shard',
			},
			gun_top_internal_2: {
				item: 'sculkhorde:ferriscite',
			},
			gun_barrel_2: {
				item: 'kubejs:steel_heavy_gun_barrel',
			},
			gun_top_barrel_2: {
				item: 'sob:sculk_tendril',
			},
			gun_grip: {
				item: 'scguns:gun_grip',
			},
			gun_barrel_1: {
				item: 'kubejs:steel_gun_barrel',
			},
			gun_top_barrel_1: {
				item: 'sob:sculk_tendril',
			},
			gun_magazine: {
				item: 'scguns:gun_magazine',
			},
		},
	});

	e.shapeless('scguns:blasphemy', [
		'sculkhorde:pure_souls',
		'3x blaze_powder',
		'scguns:empty_blasphemy',
	]);

	e.remove({ id: 'scguns:guns/echoes_2_from_gun_bench' });
	e.custom({
		type: 'scguns:gun_bench',
		result: {
			item: 'scguns:echoes_2',
			count: 1,
		},
		ingredients: {
			gun_internal_1: {
				item: 'kubejs:hardened_firing_unit',
			},
			gun_internal_2: {
				item: 'minecraft:echo_shard',
			},
			gun_top_internal_2: {
				item: 'sculkhorde:ferriscite',
			},
			gun_barrel_2: {
				item: 'kubejs:steel_gun_barrel',
			},
			gun_top_barrel_2: {
				item: 'kubejs:steel_gun_barrel',
			},
			gun_grip: {
				item: 'scguns:gun_grip',
			},
			gun_barrel_1: {
				item: 'kubejs:steel_heavy_gun_barrel',
			},
			gun_top_barrel_1: {
				item: 'kubejs:steel_heavy_gun_barrel',
			},
			gun_magazine: {
				tag: 'minecraft:planks',
			},
		},
	});


	e.remove({ id: 'scguns:guns/sculk_resonator_from_gun_bench' });
	e.custom({
		type: 'scguns:gun_bench',
		result: {
			item: 'scguns:sculk_resonator',
			count: 1,
		},
		ingredients: {
			gun_internal_1: {
				item: 'kubejs:hardened_rapid_firing_unit',
			},
			gun_internal_2: {
				item: 'minecraft:echo_shard',
			},
			gun_top_internal_2: {
				item: 'sculkhorde:ferriscite',
			},
			gun_barrel_2: {
				item: 'kubejs:steel_gun_barrel',
			},
			gun_top_barrel_2: {
				item: 'sob:sculk_tendril',
			},
			gun_grip: {
				item: 'scguns:gun_grip',
			},
			gun_barrel_1: {
				item: 'kubejs:steel_heavy_gun_barrel',
			},
			gun_top_barrel_1: {
				item: 'sob:sculk_tendril',
			},
			gun_magazine: {
				tag: 'minecraft:planks',
			},
		},
	});

	e.remove({ id: 'scguns:guns/forlorn_hope_from_gun_bench' });
	e.custom({
		type: 'scguns:gun_bench',
		result: {
			item: 'scguns:forlorn_hope',
			count: 1,
		},
		ingredients: {
			gun_internal_1: {
				item: 'kubejs:hardened_firing_unit',
			},
			gun_internal_2: {
				item: 'minecraft:echo_shard',
			},
			gun_top_internal_2: {
				item: 'sculkhorde:diascite',
			},
			gun_top_internal_1: {
				item: 'sculkhorde:ferriscite',
			},
			gun_barrel_2: {
				item: 'kubejs:steel_heavy_gun_barrel',
			},
			gun_grip: {
				item: 'scguns:gun_grip',
			},
			gun_barrel_1: {
				item: 'kubejs:steel_heavy_gun_barrel',
			},
			gun_magazine: {
				tag: 'minecraft:planks',
			},
		},
	});

    e.remove({id: 'scguns:guns/nervepinch_from_gun_bench'})
    e.remove({id: /scguns:guns\/.*_turret_from_gun_bench/})

    e.shaped('scguns:auto_turret', [' AB','CDB',' E '], {A: 'scguns:iron_gun_frame',B: 'scguns:gun_barrel',C: 'thermal:invar_gear',D: 'kubejs:hardened_rapid_firing_unit',E: 'scguns:turret_platform'})
    e.shaped('scguns:shotgun_turret', ['AB ','CDE',' F '], {A: 'kubejs:hardened_firing_unit',B: 'scguns:iron_gun_frame',C: 'thermal:invar_gear',D: 'scguns:gun_barrel',E: 'scguns:heavy_gun_barrel',F: 'scguns:turret_platform'})
    e.shaped('scguns:sniper_turret', ['AB ','CDD',' E '], {A: 'kubejs:hardened_firing_unit',B: 'scguns:iron_gun_frame',C: 'thermal:invar_gear',D: 'scguns:heavy_gun_barrel',E: 'scguns:turret_platform'})
    e.shaped('scguns:basic_turret', ['AB ','CDD',' E '], {A: 'kubejs:hardened_firing_unit',B: 'scguns:iron_gun_frame',C: 'thermal:invar_gear',D: 'scguns:gun_barrel',E: 'scguns:turret_platform'})


    function gunBenchRecipe(result, pattern, key) {
        return e.custom(convertToGunBenchRecipe(result, pattern, key))
    }


    //todo: port all recipes? That'd be annoying.
    e.remove({id: 'scguns_cnc:gun/mortician'})
    gunBenchRecipe('scguns_cnc:mortician', [
        'A   ',
        'BCDE',
        'F G '
    ], {
        A: '#forge:ingots/necromium',
        B: 'kubejs:hardened_firing_unit',
        C: 'kubejs:reinforced_gun_parts',
        D: '#forge:ingots/silver',
        E: 'kubejs:steel_gun_barrel',
        F: 'scguns:gun_grip',
        G: 'scguns:gun_magazine',
    })

    e.remove({id: 'scguns_cnc:gun/cacophony'})
    gunBenchRecipe('scguns_cnc:cacophony', [
        'AB  ',
        'CDEF',
        'G H '
    ], {
        A: 'scguns_cnc:necromium_gun_frame',
        B: '#forge:ingots/necromium',
        C: 'kubejs:hardened_rapid_firing_unit',
        D: 'kubejs:reinforced_gun_parts',
        E: '#forge:storage_blocks/silver',
        F: 'kubejs:steel_heavy_gun_barrel',
        G: 'scguns:gun_grip',
        H: 'scguns:gun_magazine',
    })

    e.remove({id: 'scguns_cnc:gun/charybdis'})
    gunBenchRecipe('scguns_cnc:charybdis', [
        ' A  ',
        'BCDE',
        'F   '
    ], {
        A: 'scguns:scorched_gun_frame',
        B: 'kubejs:hardened_firing_unit',
        C: 'kubejs:resonant_gun_parts',
        D: 'scguns:gun_magazine',
        E: 'kubejs:steel_gun_barrel',
        F: 'scguns:gun_grip',
    })

    e.remove({id: 'scguns_cnc:gun/rascal'})
    gunBenchRecipe('scguns_cnc:rascal', [
        'AB  ',
        'CDE ',
        'F G '
    ], {
        A: 'scguns:treated_brass_gun_frame',
        B: 'scguns:treated_brass_ingot',
        C: 'kubejs:hardened_rapid_firing_unit',
        D: 'kubejs:reinforced_gun_parts',
        E: 'kubejs:steel_gun_barrel',
        F: 'scguns:gun_grip',
        G: 'scguns:gun_magazine',
    })

    e.remove({id: 'scguns_cnc:gun/recur'})
    gunBenchRecipe('scguns_cnc:recur', [
        'AB  ',
        'CDE ',
        'F G '
    ], {
        A: 'scguns:diamond_steel_gun_frame',
        B: 'scguns:diamond_steel_ingot',
        C: 'kubejs:hardened_rapid_firing_unit',
        D: 'kubejs:reinforced_gun_parts',
        E: 'kubejs:steel_gun_barrel',
        F: 'scguns:gun_grip',
        G: 'scguns:gun_magazine',
    })

    e.remove({id: 'scguns_cnc:gun/iron_partisan'})
    gunBenchRecipe('scguns_cnc:iron_partisan', [
        'ABC ',
        'DEF ',
        'G H '
    ], {
      A: 'scguns:iron_gun_frame',
      B: '#forge:ingots/invar',
      C: '#minecraft:planks',
      D: 'kubejs:hardened_firing_unit',
      E: 'scguns:heavy_gun_parts',
      F: 'scguns:gun_barrel',
      G: 'scguns:gun_grip',
      H: 'scguns:gun_magazine',
    })

    e.remove({id: 'scguns_cnc:gun/scatterer'})
    gunBenchRecipe('scguns_cnc:scatterer', [
        'ABA ',
        'CDEF',
        'G A '
    ], {
        A: '#forge:ingots/steel',
        B: 'caverns_and_chasms:tin_ingot',
        C: 'scguns_cnc:vault_gun_parts',
        D: 'scguns_cnc:scatterer_part',
        E: 'caverns_and_chasms:tin_block',
        F: 'kubejs:steel_gun_barrel',
        G: 'scguns:gun_grip'
    })

    e.remove({id: 'scguns_cnc:gun/electrothermal_autocannon'})
    gunBenchRecipe('scguns_cnc:electrothermal_autocannon', [
        'ABC ',
        'DEFG',
        'C H '
    ], {
        A: '#forge:ingots/steel',
        B: 'caverns_and_chasms:tin_ingot',
        C: 'scguns:gun_grip',
        D: 'caverns_and_chasms:tin_block',
        E: 'scguns_cnc:vault_gun_parts',
        F: '#forge:storage_blocks/steel',
        G: 'kubejs:steel_heavy_gun_barrel',
        H: 'scguns_cnc:electrothermal_part'
    })

    e.remove({id: 'scguns_cnc:gun/lustre'})
    gunBenchRecipe('scguns_cnc:lustre', [
        'ABA ',
        'CDEF',
        'G G '
    ], {
        A: 'caverns_and_chasms:tin_ingot',
        B: '#forge:storage_blocks/steel',
        C: 'caverns_and_chasms:tin_block',
        D: 'scguns_cnc:vault_gun_parts',
        E: 'scguns_cnc:lustre_part',
        F: 'caverns_and_chasms:zirconia',
        G: 'scguns:gun_grip',
    })
});
