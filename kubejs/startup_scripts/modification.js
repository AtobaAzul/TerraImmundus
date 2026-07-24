ItemEvents.modification((event) => {
    event.modify('minecraft:enchanted_book', (item) => {
        item.maxStackSize = 64;
    });
    event.modify('quark:ancient_tome', (item) => {
        item.maxStackSize = 64;
    });

    event.modify('sculkhorde:blade_of_purity', (item) => {
        item.attackSpeed = 1.6 - 4;
    });

    let anthralite_damage_map = {
        greatsword: 11,
        halberd: 7,
        hammer: 9,
        katana: 5,
        rapier: 4,
        scythe: 8,
        warglaive: 4,
        mace: 8,
        spear: 5,
    };

    for (let [type, damage] of Object.entries(anthralite_damage_map)) {
        event.modify(`kubejs:anthralite_${type}`, (item) => {
            item.setAttackDamage(damage - 1 + 0.5); //-1 becuase for some reason the actual damage number in-game is 1 higher.
        });
    }

    event.modify('wither_skeleton_skull', (item) => {
        item.fireResistant = true;
    });

    event.modify('kubejs:purity_sap_bucket', (item) => {
		item.setCraftingRemainder('minecraft:bucket');
	});
});


const $BlueprintScreen = Java.loadClass("top.ribs.scguns.client.screen.BlueprintScreen")
const $ResourceLocation = Java.loadClass('net.minecraft.resources.ResourceLocation')
//mod:blueprint: ["gun1", "gun2"]
const LORE_ONLY_ITEMS = {
    'scguns:antique_blueprint': [
        'defender_pistol' //NO NAMESPACE, ONLY PATH
    ]
}



ClientEvents.init((event) => {
    for (let [blueprint, items] of Object.entries(LORE_ONLY_ITEMS)) {
        items.forEach(item => {
            let namespace = blueprint.split(':')[0]
            let path = blueprint.split(':')[1]

            $BlueprintScreen.registerLoreOnlyItem(new $ResourceLocation(namespace, path), item)
        })
    }
})