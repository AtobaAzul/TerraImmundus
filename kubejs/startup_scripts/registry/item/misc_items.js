StartupEvents.registry('item', (event) => {

    for (const [material, name] of Object.entries(NEW_DUST_DEF)) {
        event
            .create(`${material}_dust`)
            .tag(`forge:dusts`)
            .tag(`forge:dusts/${material}`)
            .displayName(name);
    }

    event
        .create('sporemeter')
        .finishUsing((ctx) => { }) //Dummy function to make the item usable. The actual function is in server_scripts/item.js
        .maxStackSize(1)
        .displayName('Sporemeter');

    const basic_items = [
        'iron_gun_barrel',
        'iron_heavy_gun_barrel',
        //'flintlock_mechanism',
        'firing_hammer',
        'hardened_firing_unit',
        'hardened_rapid_firing_unit',
        'smokeless_powder',
        'smokeless_powder_dust',
        'steel_gun_barrel',
        'steel_heavy_gun_barrel',
        'reinforced_gun_parts',
        'enderium_gun_frame',
        'resonant_gun_parts',
        'redstone_cell',
        'titanium_dust',
        'laser_optics',
        'backpack_expansion',
        'inert_ferriscite',
        'inert_diascite'
    ].forEach((item) => {
        event.create(item);
    });


    const tool_types = [
        'axe',
        'pickaxe',
        'shovel',
        'hoe',
        'sword'
    ]

    const armor_types = [
        'helmet',
        'chestplate',
        'leggings',
        'boots'
    ]

    tool_types.forEach(type => {
        const tool = event.create('tin_' + type, type)
        tool.tier('tin')
        tool.displayName("Titanium " + type[0].toUpperCase() + type.slice(1));
        tool.tag('forge:tools/tin')
        tool.tag('minecraft:' + type + 's')
    })

    armor_types.forEach(type => {
        const armor = event.create('tin_' + type, type);
        armor.tier('tin')
        armor.displayName("Titanium " + type[0].toUpperCase() + type.slice(1));
        armor.tag('minecraft:trimmable_armor')
        armor.tag('forge:armors')
        armor.tag('forge:armors/' + type)
        armor.tag('forge:armor')
        armor.tag('forge:armor/tin')

        if (type != 'leggings') {
            armor.tag('forge:armors/' + type + 's')
        } else {
            armor.tag('forge:armors/' + type)
        }
    })

});

ItemEvents.armorTierRegistry(event => {
    event.add('tin', tier => {
        tier.durabilityMultiplier = 15
        tier.slotProtections = [3, 6, 8, 3]
        tier.equipSound = 'minecraft:item.armor.equip_chain'
        tier.setRepairIngredient(Ingredient.of('#terraimmundus:tin_repair_material'))
    })
})

ItemEvents.toolTierRegistry(event => {
    event.add('tin', tier => {
        tier.level = 3
        tier.uses = 800
        tier.enchantmentValue = 10 //useless in the modpack but i'm keeping parity with diamond.
        tier.speed = 9
        tier.attackDamageBonus = 3
        tier.setRepairIngredient(Ingredient.of('#terraimmundus:tin_repair_material'))
    })

    event.add('anthralite', tier => {
        tier.level = 2
        tier.uses = 600
        tier.enchantmentValue = 10 //useless in the modpack but i'm keeping parity with diamond.
        tier.speed = 7
        tier.attackDamageBonus = 2.5
        tier.setRepairIngredient(Ingredient.of('#kubejs:anthralite_repair_material'))
    })
})