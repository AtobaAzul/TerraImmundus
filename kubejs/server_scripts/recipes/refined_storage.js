ServerEvents.recipes((e) => {
	e.remove({ mod: 'refinedstorage', not: { id: /.*(cover|coloring).*/ } });

	e.remove({
		id: 'thermal:compat/refinedstorage/smelter_refinedstorage_alloy_quartz_enriched_iron',
	});

	e.shaped('refinedstorage:controller', ['ABA', 'CDC', 'AEA'], {
		A: 'thermal:steel_plate',
		B: 'refinedstorage:destruction_core',
		C: 'thermal:rf_coil',
		D: 'thermal:machine_frame',
		E: 'refinedstorage:silicon',
	});
	e.shaped('refinedstorage:crafting_grid', ['ABC', 'ADC', 'AEC'], {
		A: 'thermal:steel_plate',
		B: 'refinedstorage:destruction_core',
		C: 'minecraft:glass',
		D: 'thermal:machine_frame',
		E: 'minecraft:crafting_table',
	});

	e.shaped('refinedstorage:fluid_grid', ['ABC', 'ADC', 'AEC'], {
		A: 'thermal:steel_plate',
		B: 'refinedstorage:destruction_core',
		C: 'minecraft:glass',
		D: 'thermal:machine_frame',
		E: '#forge:buckets/empty',
	});

	e.shaped('refinedstorage:security_card', [' A ', 'ABA', 'AAA'], {
		A: 'refinedstorage:silicon',
		B: 'thermal:signalum_ingot',
	});
	e.shaped('refinedstorage:security_manager', ['ABA', 'CDC', 'ACA'], {
		A: 'thermal:steel_plate',
		B: 'refinedstorage:destruction_core',
		C: 'refinedstorage:silicon',
		D: 'refinedstorage:security_card',
	});
	e.shaped('refinedstorage:disk_drive', ['ABA', 'ACA', 'ADA'], {
		A: 'thermal:steel_plate',
		B: '#forge:chests/wooden',
		C: 'thermal:machine_frame',
		D: 'refinedstorage:destruction_core',
	});
	e.shaped('refinedstorage:storage_monitor', ['ABC', 'BDC', 'ABC'], {
		A: 'thermal:steel_plate',
		B: 'refinedstorage:silicon',
		C: 'minecraft:glass',
		D: 'thermal:machine_frame',
	});
	e.shaped('16x refinedstorage:cable', ['ABA', 'CCC', 'ABA'], {
		A: 'thermal:steel_nugget',
		B: '#thermal:glass/hardened',
		C: 'thermal:quartz_dust',
	});
	e.shaped('refinedstorage:disk_manipulator', ['ABA', 'CDC', 'ABA'], {
		A: 'thermal:steel_plate',
		B: 'refinedstorage:silicon',
		C: 'refinedstorage:improved_processor',
		D: 'thermal:machine_frame',
	});

	e.shapeless('refinedstorage:importer', [
		'refinedstorage:cable',
		'refinedstorage:destruction_core',
		'minecraft:hopper',
	]);
	e.shaped('refinedstorage:1k_storage_disk', ['ABC', 'DED', 'CBA'], {
		A: 'refinedstorage:silicon',
		B: 'refinedstorage:destruction_core',
		C: 'thermal:steel_plate',
		D: '#thermal:glass/hardened',
		E: 'thermal:upgrade_augment_1',
	});

	e.shaped('refinedstorage:4k_storage_disk', ['ABC', 'DED', 'CBA'], {
		A: 'refinedstorage:silicon',
		B: 'refinedstorage:destruction_core',
		C: 'thermal:steel_plate',
		D: '#thermal:glass/hardened',
		E: 'thermal:upgrade_augment_2',
	});

	e.shaped('refinedstorage:16k_storage_disk', ['ABC', 'DED', 'CBA'], {
		A: 'refinedstorage:silicon',
		B: 'refinedstorage:destruction_core',
		C: 'thermal:steel_plate',
		D: '#thermal:glass/hardened',
		E: 'thermal:upgrade_augment_3',
	});

	e.shapeless('refinedstorage:exporter', [
		'refinedstorage:cable',
		'refinedstorage:destruction_core',
		'minecraft:dropper',
	]);
	e.shaped('refinedstorage:256k_fluid_storage_disk', ['ABC', 'DED', 'CBA'], {
		A: 'refinedstorage:silicon',
		B: 'refinedstorage:destruction_core',
		C: 'thermal:steel_plate',
		D: 'thermal:lumium_glass',
		E: 'thermal:lumium_gear',
	});
	e.shaped('refinedstorage:interface', [' A ', 'BCB', ' D '], {
		A: 'refinedstorage:importer',
		B: 'pipez:item_pipe',
		C: 'thermal:machine_frame',
		D: 'refinedstorage:exporter',
	});

	e.shapeless('refinedstorage:256k_fluid_storage_block', [
		'refinedstorage:256k_fluid_storage_disk',
		'thermal:machine_frame',
	]);
	e.shaped('refinedstorage:fluid_interface', [' A ', 'BCB', ' D '], {
		A: 'refinedstorage:importer',
		B: 'pipez:fluid_pipe',
		C: 'thermal:machine_frame',
		D: 'refinedstorage:exporter',
	});


    e.shapeless('refinedstorage:1k_storage_block', [
        'refinedstorage:1k_storage_disk',
        'thermal:machine_frame',
    ]);
    
    e.shapeless('refinedstorage:4k_storage_block', [
        'refinedstorage:4k_storage_disk',
        'thermal:machine_frame',
    ])

    e.shapeless('refinedstorage:16k_storage_block', [
        'refinedstorage:16k_storage_disk',
        'thermal:machine_frame',
    ])

	e.shaped('refinedstorage:destruction_core', ['A', 'B', 'A'], {
		A: 'refinedstorage:silicon',
		B: 'thermal:signalum_gear',
	});

	e.recipes.thermal.smelter(Item.of('refinedstorage:silicon').withChance(1), [
		'#terraimmundus:dust_or_ingot/quartz',
	]);

	e.shapeless('refinedstorage:filter', [
		'thermal:item_filter_augment',
		'refinedstorage:silicon',
	]);
});
