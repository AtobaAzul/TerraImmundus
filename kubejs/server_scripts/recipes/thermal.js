ServerEvents.recipes((e) => {
    e.recipes.thermal.crystallizer('shulker_shell', [Fluid.of('thermal:ender', 250), 'nautilus_shell'], 10, 20000)
    e.recipes.thermal.crystallizer('end_stone', [Fluid.of('thermal:ender', 250), '#forge:stone'], 0.5, 2000)
    e.recipes.thermal.crystallizer('quark:myalite', [Fluid.of('thermal:ender', 250), 'basalt'], 0.5, 2000)
    e.recipes.thermal.crystallizer('quark:dusky_myalite', [Fluid.of('thermal:ender', 250), 'blackstone'], 0.5, 2000)
    e.recipes.thermal.crystallizer('quark:myalite_crystal', [Fluid.of('thermal:ender', 250), 'amethyst_block'], 0.5, 2000)
    e.recipes.thermal.crystallizer('chorus_flower', [Fluid.of('thermal:ender', 250), 'torchflower'], 0.5, 2000)

    /** @type {Record<Internal.InputFluid_, number>} */
    const drinks = {
        'brewinandchewin:beer': 1.5,
        'brewinandchewin:vodka': 2.5,
        'brewinandchewin:mead': 1.5,
        'brewinandchewin:rice_wine': 1.5,
        'brewinandchewin:pale_jane': 2.5,
        'brewinandchewin:egg_grog': 1.5,
        'brewinandchewin:glittering_grenadine': 1.5,
        'brewinandchewin:saccharine_rum': 2,
        'brewinandchewin:salty_folly': 2.5,
        'brewinandchewin:bloody_mary': 1.5,
        'brewinandchewin:red_rum': 1.5,
        'brewinandchewin:strongroot_ale': 1.5,
        'brewinandchewin:steel_toe_stout': 1.5,
        'brewinandchewin:dread_nog': 3.5,
        'brewinandchewin:withering_dross': 2.5,
        'brewinandchewin:kombucha': 1.5,
        'sob:hard_cider': 2,
        'sob:prickly_melomel': 2,
        'sob:tequila': 2,
        'sob:sunrise_seltzer': 1,
        'sob:creeper_drink': 1.5,
        'sob:pale_daiquiri': 1,
        'sob:bustling_brew': 2.5,
        'sob:death_drink': 5,
    };

    for (const [fluid, mult] of Object.entries(drinks)) {
        e.recipes.thermal.refinery(
            Fluid.of('kubejs:ethanol', 100 * mult),
            Fluid.of(fluid, 1000)
        ).energy(4000 / mult);
    }

    e.recipes.thermal.compression_fuel(Fluid.of('kubejs:ethanol'), 500000)
    e.recipes.thermal.compression_fuel(Fluid.of('supplementaries:lumisene'), 100000)

    e.remove({ id: 'systeams:boiling/steamiester' })
    e.remove({ id: 'systeams:steam_dynamo/steamiestest' })
    e.remove({ id: 'thermal:bottler_steamiestest_ball' })

    e.replaceInput({ output: 'thermal:machine_frame' }, 'thermal:tin_gear', 'thermal:nickel_gear')

    e.replaceInput({ output: 'thermal:charge_bench' }, 'thermal:electrum_ingot', '#forge:ingots/gold')
    e.replaceInput({ output: 'thermal:tinker_bench' }, '#forge:ingots/iron', '#forge:ingots/invar')

    e.remove({ id: 'thermal:flux_capacitor' })
    e.smithing(
        'thermal:flux_capacitor',
        'minecraft:netherite_upgrade_smithing_template',
        'thermal:rf_potato',
        '#forge:ingots/netherite'
    );

    e.replaceInput({ id: 'thermal:machines/smelter/smelter_alloy_enderium' }, 'thermal:diamond_dust', '2x #terraimmundus:dust_or_ingot/netherite')

    e.remove({ output: 'thermal:satchel' })

    e.replaceInput({ output: 'systeams:steam_dynamo' }, 'iron_ingot', 'scbrass:zinc_ingot')

    e.replaceInput({ output: /(thermal:fluid_resevoir|thermal:potion_infuse|thermal:potion_quiver)/ }, 'copper_ingot', 'scguns:treated_brass_ingot')

    e.forEachRecipe({ type: "systeams:steam" }, recipe => {
        let _json = JsonIO.toObject(recipe.json)

        _json.energy = _json.energy * 1.75

        e.remove({ id: recipe.getId() })
        e.custom(_json).id(recipe.getId())
    })

    e.replaceInput({ output: 'thermal:device_tree_extractor' }, 'thermal:iron_gear', 'treetap:tap')
    e.replaceInput({ output: 'thermal:device_tree_extractor' }, '#forge:glass', 'thermal:cured_rubber')



    e.remove({ id: 'thermal:rubber_from_dandelion' })
    e.remove({ id: 'thermal:rubber_from_vine' })



    function CreateTapRecipe(log, result, fluid_color) {
        return e.custom({
            type: 'treetap:tap_extract',
            log: {
                item: log
            },
            required_block_count: 5,
            processing_time: 4800,
            result: {
                item: result
            },
            collect_bucket: true,
            fluid_color: fluid_color
        })
    }



    const fluid_color_map = {
        'thermal:resin': '#b17f1e',
        'thermal:sap': '#be5f31',
        'thermal:latex': '#bcad8b',
        'kubejs:ashen_sap': '#bcbcbc',
        'thermal:ender': '#137a8f'
    }


    e.remove({ id: 'treetap:water_from_crying_obsidian' })

    e.forEachRecipe({ type: "thermal:tree_extractor" }, recipe => {
        let _json = JsonIO.toObject(recipe.json)


        CreateTapRecipe(_json.trunk.Name, _json.result.fluid + "_bucket", fluid_color_map[_json.result.fluid]).id(recipe.getId() + "_treetap")
    })

    e.recipes.thermal.crystallizer('thermal:coal_coke', [Fluid.of('thermal:crude_oil', 250), 'charcoal'], 0.5, 2000)

    e.replaceInput({ id: 'thermal:augments/dynamo_throttle_augment' }, 'thermal:electrum_ingot', 'gold_ingot')
    e.replaceInput({ id: 'thermal:slot_seal' }, 'thermal:iron_plate', 'iron_ingot')
})