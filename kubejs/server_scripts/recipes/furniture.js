ServerEvents.recipes(e => {
    e.remove({ type: 'refurbished_furniture:cutting_board_combining' })
    e.remove({ type: 'refurbished_furniture:cutting_board_slicing' })
    e.remove({ type: 'refurbished_furniture:frying_pan_cooking' })
    e.remove({ type: 'refurbished_furniture:grill_cooking' })
    e.remove({ type: 'refurbished_furniture:microwave_heating' })
    e.remove({ type: 'refurbished_furniture:oven_baking' })
    e.remove({ type: 'refurbished_furniture:toaster_heating' })

    e.remove({ id: /.*cutting_board.*/, type: 'refurbished_furniture:workbench_constructing' })

    e.remove({ id: 'refurbished_furniture:knife' })

    //rip toaster
    e.remove({id: 'refurbished_furniture:constructing/light_toaster'})
    e.remove({id: 'refurbished_furniture:dark_toaster'})
    e.remove({id: 'refurbished_furniture:constructing/dark_toaster'})
    e.remove({id: 'refurbished_furniture:cheese'})
    e.remove({id: 'refurbished_furniture:dough'})
    e.remove({id: 'refurbished_furniture:glow_berry_jam_toast'})
    e.remove({id: 'refurbished_furniture:sweet_berry_jam_toast'})

    e.forEachRecipe({ type: 'minecraft:smoking' }, recipe => {
        let _recipe = {
            "type": "refurbished_furniture:oven_baking",
            "category": "food",
            "ingredient": recipe.originalRecipeIngredients,
            "result": recipe.originalRecipeResult,
            "time": 100
        }

        e.custom(_recipe)

        _recipe = {
            "type": "refurbished_furniture:microwave_heating",
            "category": "food",
            "ingredient": recipe.originalRecipeIngredients,
            "result": recipe.originalRecipeResult,
            "time": 50
        }

        e.custom(_recipe)
    })

})