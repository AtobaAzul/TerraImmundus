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

    e.remove({ id: 'scguns:gun_bench' });
	e.shaped('scguns:gun_bench', ['AA', 'BB', 'BB'], {
		A: '#forge:ingots/lead',
		B: '#minecraft:planks',
	});

	//niter glass
	e.remove({ output: /.*niter_glass.*/ });

	smelter(
		'2x scguns:niter_glass',
		[['#forge:gems/niter', '#forge:dusts/niter'], '#forge:sand'],
		4800
	);

    	DYE_COLORS.forEach((color) => {
		e.shaped('8x scguns:' + color + '_niter_glass', ['AAA', 'ABA', 'AAA'], {
			A: 'scguns:niter_glass',
			B: '#forge:dyes/' + color,
		});
	});

    e.remove({id: 'scguns:lightning_battery'})
    e.shaped('scguns:lightning_battery', [
        'AAA',
        'BCB',
        'AAA'
    ], {
        A: '#forge:ingots/steel',
        B: 'thermal:rf_coil',
        C: 'thermal:electrum_block'
    })

});
