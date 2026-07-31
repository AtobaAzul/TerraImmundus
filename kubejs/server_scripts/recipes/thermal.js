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

    e.replaceOutput({ id: 'thermal:machines/smelter/smelter_tin_armor' }, '#forge:ingots/tin', 'caverns_and_chasms:tin_ingot')
    e.replaceOutput({ id: 'thermal:machines/smelter/smelter_tin_tools' }, '#forge:ingots/tin', 'caverns_and_chasms:tin_ingot')


    function addRecycleRecipe(input, output) {
        if (Array.isArray(output)) {
            output = output.map(item => Item.of(item))
        } else {
            output = [Item.of(output)]
        }

        return e.custom({
            "type": "thermal:smelter_recycle",
            "ingredient": Ingredient.of(input),
            "result": output,
            "experience": 0.2
        }).id(`kubejs:recycling/${input.split(':')[1]}`)
    }

    const recycle = {
        'caverns_and_chasms:aegis': '8x caverns_and_chasms:tin_ingot',
        '#forge:tools/copper': '9x minecraft:copper_ingot',
        '#forge:armor/copper': '27x minecraft:copper_ingot',
        '#forge:tools/anthralite': ['minecraft:iron_ingot', 'scguns:anthralite_nugget'],
        '#forge:armor/anthralite': ['3x minecraft:iron_ingot', 'scguns:anthralite_nugget'],
        '#forge:armor/scrap': ['9x minecraft:copper_ingot', '5x scguns:anthralite_nugget', '3x minecraft:iron_ingot'],
        '#forge:armor/brass': ['3x scbrass:brass_ingot'],
        '#forge:armor/diamond_steel': ['3x scguns:diamond_steel_ingot'],
        '#forge:armor/treated_brass': ['3x scguns:treated_brass_ingot'],
        'caverns_and_chasms:large_arrow': 'caverns_and_chasms:silver_nugget',
        'caverns_and_chasms:kunai': 'caverns_and_chasms:silver_nugget',
        '#scguns:frontier_gun_tier': ['minecraft:iron_ingot'],
        '#scguns:copper_gun_tier': ['3x minecraft:copper_ingot', '2x scguns:anthralite_nugget'],
        '#scguns:iron_gun_tier': ['thermal:invar_ingot', '2x scguns:anthralite_nugget', 'thermal:constantan_ingot'],
        '#scguns:ocean_gun_tier': ['2x thermal:steel_ingot', '5x thermal:steel_nugget'],
        '#scguns:wrecker_gun_tier': ['thermal:steel_ingot', '5x scguns:anthralite_nugget', 'minecraft:copper_ingot'],
        '#scguns:diamond_steel_gun_tier': ['scguns:diamond_steel_ingot', '12x thermal:steel_nugget', '3x thermal:electrum_nugget'],
        '#scguns:gravekeeper_gun_tier': ['caverns_and_chasms:necromium_ingot', '12x thermal:steel_nugget', '3x thermal:electrum_nugget'],
        '#scguns:treated_brass_gun_tier': ['scguns:treated_brass_ingot', '8x thermal:steel_nugget', '3x thermal:electrum_nugget'],
        '#scguns:vault_gun_tier': ['5x caverns_and_chasms:tin_ingot', '8x thermal:steel_nugget', 'scguns_cnc:vault_gun_parts'],
        '#scguns:piglin_gun_tier': ['thermal:rose_gold_ingot', '15x scguns:anthralite_nugget'],
        '#scguns:deep_dark_gun_tier': ['2x thermal:steel_ingot', 'scguns:anthralite_nugget', 'sculkhorde:ferriscite'],
        '#scguns:end_gun_tier': ['3x thermal:enderium_ingot', '18x thermal:steel_nugget', 'thermal:lumium_nugget'],
        '#scguns:scorched_gun_tier': ['2x scguns:scorched_ingot', '16x thermal:enderium_nugget', '2x thermal:steel_ingot']
    }

    for (const [input, output] of Object.entries(recycle)) {
        addRecycleRecipe(input, output)
    }

    e.remove({ output: 'thermal:satchel' })

    e.replaceInput({ output: 'systeams:steam_dynamo' }, 'iron_ingot', 'scbrass:zinc_ingot')

    e.replaceInput({ output: /(thermal:fluid_resevoir|thermal:potion_infuse|thermal:potion_quiver)/ }, 'copper_ingot', 'scguns:treated_brass_ingot')


    e.remove({ id: 'thermal:machines/smelter/smelter_copper_tools' })
    e.remove({ id: 'thermal:machines/smelter/smelter_copper_armor' })

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

    e.replaceInput({ id: 'thermal:dynamo_disenchantment' }, 'iron_ingot', 'thermal:constantan_ingot')
})