ServerEvents.recipes((e) => {
	let new_materials = [
		//'anthralite', its apparently smithing!!!
		'silver',
		//'necromium', this is different!
	].forEach((material) => {
		e.shaped(`kubejs:${material}_greatsword`, [' A ', ' A ', 'ABA'], {
			A: `#forge:ingots/${material}`,
			B: '#forge:rods/wooden',
		});

		e.shaped(`kubejs:${material}_halberd`, ['  A', ' BA', 'B  '], {
			A: `#forge:ingots/${material}`,
			B: '#forge:rods/wooden',
		});

		e.shaped(`kubejs:${material}_hammer`, [' AA', ' BA', 'B  '], {
			A: `#forge:ingots/${material}`,
			B: '#forge:rods/wooden',
		});

		e.shaped(`kubejs:${material}_katana`, ['  A', ' A ', 'B  '], {
			A: `#forge:ingots/${material}`,
			B: '#forge:rods/wooden',
		});

		e.shaped(`kubejs:${material}_rapier`, ['BAA'], {
			A: `#forge:ingots/${material}`,
			B: '#forge:rods/wooden',
		});

		e.shaped(`kubejs:${material}_scythe`, [' AA', ' BA', 'B A'], {
			A: `#forge:ingots/${material}`,
			B: '#forge:rods/wooden',
		});

		e.shaped(`kubejs:${material}_warglaive`, ['  A', ' BA', 'AA '], {
			A: `#forge:ingots/${material}`,
			B: '#forge:rods/wooden',
		});

		e.shaped(`kubejs:${material}_mace`, [' A ', 'ABA', ' B '], {
			A: `#forge:ingots/${material}`,
			B: '#forge:rods/wooden',
		});

		e.shaped(`kubejs:${material}_spear`, ['  A', ' B ', 'B  '], {
			A: `#forge:ingots/${material}`,
			B: '#forge:rods/wooden',
		});
	});

	let weapon_types = [
		'greatsword',
		'halberd',
		'hammer',
		'katana',
		'rapier',
		'scythe',
		'warglaive',
		'mace',
		'spear',
	].forEach((type) => {
		e.smithing(
			`kubejs:necromium_${type}`,
			'minecraft:netherite_upgrade_smithing_template',
			'moonsweaponry:diamond_' + type,
			'#forge:ingots/necromium'
		);
		e.smithing(
			`kubejs:anthralite_${type}`,
			'minecraft:leather',
			'moonsweaponry:iron_' + type,
			'#forge:ingots/anthralite'
		);

		e.smithing(
			`kubejs:purity_${type}`,
			'kubejs:purity_upgrade_template',
			`moonsweaponry:netherite_${type}`,
			'sculkhorde:soulite_shard'
		);
	});

	e.remove({ id: 'sculkhorde:blade_of_purity' });
	e.shaped('kubejs:purity_upgrade_template', ['ABA', 'ACA', ' B '], {
		A: 'sculkhorde:essence_of_purity',
		B: 'sculkhorde:infestation_purifier',
		C: 'sculkhorde:soulite_shard',
	});
	e.smithing(
		`sculkhorde:blade_of_purity`,
		'kubejs:purity_upgrade_template',
		`netherite_sword`,
		'sculkhorde:soulite_shard'
	);

    //tin is a bit different
    e.shaped(`kubejs:tin_greatsword`, [' A ', ' A ', 'ABA'], {
			A: 'caverns_and_chasms:tin_ingot',
			B: '#forge:rods/wooden',
		});

		e.shaped(`kubejs:tin_halberd`, ['  A', ' BA', 'B  '], {
			A: 'caverns_and_chasms:tin_ingot',
			B: '#forge:rods/wooden',
		});

		e.shaped(`kubejs:tin_hammer`, [' AA', ' BA', 'B  '], {
			A: 'caverns_and_chasms:tin_ingot',
			B: '#forge:rods/wooden',
		});

		e.shaped(`kubejs:tin_katana`, ['  A', ' A ', 'B  '], {
			A: 'caverns_and_chasms:tin_ingot',
			B: '#forge:rods/wooden',
		});

		e.shaped(`kubejs:tin_rapier`, ['BAA'], {
			A: 'caverns_and_chasms:tin_ingot',
			B: '#forge:rods/wooden',
		});

		e.shaped(`kubejs:tin_scythe`, [' AA', ' BA', 'B A'], {
			A: 'caverns_and_chasms:tin_ingot',
			B: '#forge:rods/wooden',
		});

		e.shaped(`kubejs:tin_warglaive`, ['  A', ' BA', 'AA '], {
			A: 'caverns_and_chasms:tin_ingot',
			B: '#forge:rods/wooden',
		});

		e.shaped(`kubejs:tin_mace`, [' A ', 'ABA', ' B '], {
			A: 'caverns_and_chasms:tin_ingot',
			B: '#forge:rods/wooden',
		});

		e.shaped(`kubejs:tin_spear`, ['  A', ' B ', 'B  '], {
			A: 'caverns_and_chasms:tin_ingot',
			B: '#forge:rods/wooden',
		});
	
});
