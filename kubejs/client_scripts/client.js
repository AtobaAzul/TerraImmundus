// priority: 0

// Visit the wiki for more info - https://kubejs.com/

const $ModSavedData = Java.loadClass("com.github.sculkhorde.core.ModSavedData");
const $SculkHorde = Java.loadClass("com.github.sculkhorde.core.SculkHorde");
ClientEvents.lang("en_us", (event) => {
    //rename netherite to Titanium

    let rename = {
        "minecraft:ancient_debris": "Buried Meteorite",
        "minecraft:netherite_scrap": "Raw Meteorite",
        "caverns_and_chasms:netherite_nugget": "Meteorite Nugget",
        "minecraft:netherite_chestplate": "Meteorite Chestplate",
        "minecraft:netherite_leggings": "Meteorite Leggings",
        "minecraft:netherite_boots": "Meteorite Boots",
        "caverns_and_chasms:netherite_horse_armor": "Meteorite Horse Armor",
        "farmersdelight:netherite_knife": "Meteorite Knife",
        "scguns:netherite_respirator": "Meteorite Respirator",
        "scguns:netherite_bayonet": "Meteorite Bayonet",
        "thermal:netherite_nugget": "Meteorite Nugget",
        "thermal:netherite_dust": "Meteorite Dust",
        "thermal:netherite_gear": "Meteorite Gear",
        "thermal:netherite_plate": "Meteorite Plate",
        "thermal:netherite_coin": "Meteorite Coin",
        "minecraft:netherite_hoe": "Meteorite Hoe",
        "minecraft:netherite_sword": "Meteorite Sword",
        "minecraft:netherite_axe": "Meteorite Axe",
        "minecraft:netherite_pickaxe": "Meteorite Pickaxe",
        "minecraft:netherite_shovel": "Meteorite Shovel",
        "supplementaries:netherite_trapdoor": "Meteorite Trapdoor",
        "supplementaries:netherite_door": "Meteorite Door",
        "minecraft:netherite_block": "Meteorite Block",
        "minecraft:netherite_helmet": "Meteorite Helmet",
        "minecraft:netherite_ingot": "Meteorite Ingot",
        "minecraft:quartz": "Quartz",
        "scguns:small_casing_mold": "Small Casing Die",
        "scguns:medium_casing_mold": "Medium Casing Die",
        "scguns:large_casing_mold": "Large Casing Die",
        "scguns:bullet_mold": "Bullet Die",
        "scguns:gun_parts_mold": "Gun Parts Die",
        //"scguns:disc_mold",
        "scguns:blank_mold": "Blank Die",
        "scguns:scorched_ingot": "Damascus Steel Ingot",
        "minecraft:ghast_tear": "Ashen Rosin",
        "minecraft:netherite_scrap": "Raw Meteorite",
        "moonsweaponry:netherite_spear": "Meteorite Spear",
        "moonsweaponry:netherite_mace": "Meteorite Mace",
        "moonsweaponry:netherite_warglaive": "Meteorite Warglaive",
        "moonsweaponry:netherite_scythe": "Meteorite Scythe",
        "moonsweaponry:netherite_rapier": "Meteorite Rapier",
        "moonsweaponry:netherite_katana": "Meteorite Katana",
        "moonsweaponry:netherite_hammer": "Meteorite Hammer",
        "moonsweaponry:netherite_halberd": "Meteorite Halberd",
        "moonsweaponry:netherite_greatsword": "Meteorite Greatsword",
        "sculkhorde:essence_of_purity": "Purity Shard",
        "caverns_and_chasms:cobblestone_bricks": "Small Cobblestone Bricks",
        "caverns_and_chasms:cobblestone_brick_stairs":
            "Small Cobblestone Brick Stairs",
        "caverns_and_chasms:cobblestone_brick_slab":
            "Small Cobblestone Brick Slab",
        "caverns_and_chasms:cobblestone_brick_wall":
            "Small Cobblestone Brick Wall",
        "caverns_and_chasms:mossy_cobblestone_bricks":
            "Mossy Small Cobblestone Bricks",
        "caverns_and_chasms:mossy_cobblestone_brick_stairs":
            "MossySmall Cobblestone Brick Stairs",
        "caverns_and_chasms:mossy_cobblestone_brick_slab":
            "Mossy Small Cobblestone Brick Slab",
        "caverns_and_chasms:mossy_cobblestone_brick_wall":
            "Mossy Small Cobblestone Brick Wall",
        "refinedstorage:destruction_core": "Signalum Processor",
        "refinedstorage:1k_storage_block": "Hardened Item Storage Block",
        "refinedstorage:1k_storage_disk": "Hardened Item Storage Disk",

        "refinedstorage:4k_storage_block": "Reinforced Item Storage Block",
        "refinedstorage:4k_storage_disk": "Reinforced Item Storage Disk",

        "refinedstorage:16k_storage_block": "Resonant Item Storage Block",
        "refinedstorage:16k_storage_disk": "Resonant Item Storage Disk",

        "refinedstorage:256k_fluid_storage_disk": "Fluid Storage Disk",
        "refinedstorage:256k_fluid_storage_block": "Fluid Storage Block",
        "scguns:treated_iron_gun_frame": "Steel Gun Frame",
        "scguns:treated_iron_grate": "Steel Grate",

        "scguns:iron_gun_frame": "Invar Gun Frame",

        "scguns:heavy_gun_parts": "Hardened Gun Parts",
        "scguns:gun_barrel": "Anthralite Gun Barrel",
        "scguns:heavy_gun_barrel": "Heavy Anthralite Gun Barrel",
        "scguns:chiseled_treated_iron_block": "Chiseled Steel Block",
        "scguns:treated_iron_plates": "Steel Plates",
        "scguns:cut_treated_iron": "Cut Steel",
        "scguns:cut_treated_iron_stairs": "Cut Steel Stairs",
        "scguns:cut_treated_iron_slab": "Cut Steel Slab",
        "scguns:treated_iron_lamp": "Steel Lamp",
        "scguns:treated_iron_bars": "Steel Bars",
        "scguns:treated_iron_grate_pane": "Steel Grate Pane",

        //tin rename

        "caverns_and_chasms:tin_bulb": "Titanium Bulb",
        "caverns_and_chasms:tin_chain": "Titanium Chain",
        "caverns_and_chasms:tin_bars": "Titanium Bars",
        "caverns_and_chasms:chiseled_tin_bricks": "Chiseled Titanium Bricks",
        "caverns_and_chasms:tin_brick_wall": "Titanium Brick Wall",
        "caverns_and_chasms:tin_brick_slab": "Titanium Brick Slab",
        "caverns_and_chasms:tin_brick_stairs": "Titanium Brick Stairs",
        "caverns_and_chasms:tin_bricks": "Titanium Bricks",
        "caverns_and_chasms:tin_block": "Titanium Block",
        "caverns_and_chasms:raw_tin_block": "Raw Titanium Block",
        "caverns_and_chasms:raw_tin": "Raw Titanium",
        "caverns_and_chasms:deepslate_tin_ore": "Deepslate Titanium Ore",
        "caverns_and_chasms:tin_ore": "Titanium Ore",
        "caverns_and_chasms:cassiterite_tin_ore": "Ilmenite Titanium Ore",
        "caverns_and_chasms:cylindrite_tin_ore": "Rutile Titanium Ore",
        "caverns_and_chasms:tinplate": "Titanium Plating",
        "caverns_and_chasms:tin_ingot": "Titanium Ingot",
        "caverns_and_chasms:tin_nugget": "Titanium Nugget",
        "caverns_and_chasms:tinplate_block": "Titanium Plating Block",
        "caverns_and_chasms:cylindrite": "Rutile",
        "caverns_and_chasms:smooth_cylindrite": "Smooth Rutile",
        "caverns_and_chasms:smooth_cylindrite_stairs": "Smooth Rutile Stairs",
        "caverns_and_chasms:smooth_cylindrite_slab": "Smooth Rutile Slab",
        "caverns_and_chasms:polished_cylindrite": "Polished Rutile",
        "caverns_and_chasms:polished_cylindrite_stairs":
            "Polished Rutile Stairs",
        "caverns_and_chasms:polished_cylindrite_slab": "Polished Rutile Slab",
        "caverns_and_chasms:polished_cylindrite_wall": "Polished Rutile Wall",
        "caverns_and_chasms:cylindrite_bricks": "Rutile Bricks",
        "caverns_and_chasms:cylindrite_brick_stairs": "Rutile Brick Stairs",
        "caverns_and_chasms:cylindrite_brick_slab": "Rutile Brick Slab",
        "caverns_and_chasms:cylindrite_brick_wall": "Rutile Brick Wall",
        "caverns_and_chasms:chiseled_cylindrite_bricks":
            "Chiseled Rutile Bricks",
        "caverns_and_chasms:cylindrite_pillar": "Rutile Pillar",
        "v_slab_compat:caverns_and_chasms/smooth_cylindrite_vertical_slab":
            "Smooth Rutile Vertical Slab",
        "v_slab_compat:caverns_and_chasms/cylindrite_brick_vertical_slab":
            "Rutile Brick Vertical Slab",
        "v_slab_compat:caverns_and_chasms/polished_cylindrite_vertical_slab":
            "Polished Rutile Vertical Slab",
        "caverns_and_chasms:cassiterite": "Ilmenite",
        "caverns_and_chasms:cassiterite_stairs": "Ilmenite Stairs",
        "caverns_and_chasms:cassiterite_slab": "Ilmenite Slab",
        "caverns_and_chasms:cassiterite_wall": "Ilmenite Wall",
        "caverns_and_chasms:smooth_cassiterite": "Smooth Ilmenite",
        "caverns_and_chasms:smooth_cassiterite_stairs":
            "Smooth Ilmenite Stairs",
        "caverns_and_chasms:smooth_cassiterite_slab": "Smooth Ilmenite Slab",
        "caverns_and_chasms:polished_cassiterite": "Polished Ilmenite",
        "caverns_and_chasms:polished_cassiterite_stairs":
            "Polished Ilmenite Stairs",
        "caverns_and_chasms:polished_cassiterite_slab":
            "Polished Ilmenite Slab",
        "caverns_and_chasms:polished_cassiterite_wall":
            "Polished Ilmenite Wall",
        "caverns_and_chasms:cassiterite_bricks": "Ilmenite Bricks",
        "caverns_and_chasms:cassiterite_brick_stairs": "Ilmenite Brick Stairs",
        "caverns_and_chasms:cassiterite_brick_slab": "Ilmenite Brick Slab",
        "caverns_and_chasms:cassiterite_brick_wall": "Ilmenite Brick Wall",
        "caverns_and_chasms:chiseled_cassiterite_bricks":
            "Chiseled Ilmenite Bricks",
        "caverns_and_chasms:cassiterite_pillar": "Ilmenite Pillar",
        "v_slab_compat:caverns_and_chasms/polished_cassiterite_vertical_slab":
            "Polished Ilmenite Vertical Slab",
        "v_slab_compat:caverns_and_chasms/cassiterite_vertical_slab":
            "Ilmenite Vertical Slab",
        "v_slab_compat:caverns_and_chasms/smooth_cassiterite_vertical_slab":
            "Smooth Ilmenite Vertical Slab",
        "v_slab_compat:caverns_and_chasms/cassiterite_brick_vertical_slab":
            "Ilmenite Brick Vertical Slab",
        "minecraft:soul_fire": "Sulfuric Fire",
        "scguns:fake_soul_fire": "Sulfuric Fire",
        "minecraft:soul_torch": "Sulfuric Torch",
        "supplementaries:sconce_soul": "Sulfuric Sconce",
        "minecraft:soul_campfire": "Sulfuric Campfire",
        "minecraft:soul_lantern": "Sulfuric Lantern",
        "caverns_and_chasms:soul_brazier": "Sulfuric Brazier",
        "buzzier_bees:soul_candle": "Sulfur Candle",
        "supplementaries:candle_holder_soul": "Sulfur Candle Holder",
        "suppsquared:gold_candle_holder_soul": "Gold Sulfur Candle Holder",
        "suppsquared:sconce_lever_soul": "Sulfuric Sconce Lever",
        "minecraft:blaze_powder": "Blazing Purification Powder",
        "refurbished_furniture:wrench": "Electrician's Wrench",
        "supplementaries:wrench": "Copper Wrench",
        "minecraft:golden_apple": "Purity Apple",
        "minecraft:enchanted_golden_apple": "Enchanted Purity Apple",
        "pipez:item_pipe": "Item Duct",
        "pipez:energy_pipe": "Energy Cable",
        "simpleradio:copper_wire": "Audio Cable",
        "refinedstorage:cable": "Data Cable"
    };

    for (const [item, name] of Object.entries(rename)) {
        event.renameItem(item, name);
        event.renameBlock(item, name);
    }



    let lang_rename = {
        "upgrade.minecraft.netherite_upgrade": "Advanced Tool Upgrade",
        "item.minecraft.smithing_template.netherite_upgrade.additions_slot_description": "Add Meteorite or Necromium Ingot",
        "item.minecraft.smithing_template.netherite_upgrade.ingredients": "Meteorite or Necromium Ingot",
        "item.minecraft.netherite_scrap": "Meteorite Scrap",
        "advantage.terraimmundus:sculk": "Sculk",
        "block.cfm_wap.dark_circuit_breaker": "Dark Household Transformer",
        "block.cfm_wap.light_circuit_breaker": "Light Household Transformer",
        "container.cfm_wap.circuit_breaker": "Househould Transformer",
        "gui.cfm_wap.status.online": "Online",
        "gui.cfm_wap.status.offline": "Offline",
        "gui.cfm_wap.status.energy": "No Energy",
        "gui.cfm_wap.node_count": "%s / %s",
        "block.thermal.sapphire_ore": "Zirconia Ore",
        "block.thermal.deepslate_sapphire_ore": "Deepslate Zirconia Ore",

        //tin rename
        "advancements.caverns_and_chasms.adventure.find_monolith.description":
            "Travel thousands of blocks to locate a Titanium Monolith",
        "advancements.caverns_and_chasms.adventure.find_monolith.title":
            "Heart of Titanium",
        "subtitles.caverns_and_chasms.block.tin.deflect": "Titanium deflects",
        "subtitles.caverns_and_chasms.block.tin_bulb.turn_off":
            "Titanium Bulb turns off",
        "subtitles.caverns_and_chasms.block.tin_bulb.turn_on":
            "Titanium Bulb turns on",
        "trim_material.caverns_and_chasms.tin": "Titanium Material",

        //soul fire rename
        "enchantment.minecraft.soul_fire_aspect": "Sulfuric Aspect",
        "enchantment.minecraft.soul_flame": "Sulfuric Flame",
        "enchantment.minecraft.soul_fire_aspect.desc": "Causes additional sulfuric fire damage when used to attack a mob.",
        "enchantment.minecraft.soul_flame.desc": "Arrows fired from the bow will deal additional sulfuric fire damage."

    };

    //JsonIO.write("kubejs/assets/terraimmundus/lang/en_us.json", lang_rename);

    event.addAll(lang_rename);
});

global.spore_data = {};

NetworkEvents.dataReceived("spore_data", (event) => {
    global.spore_data = event.getData();
});

ItemEvents.tooltip((e) => {
    e.add("thermal:sapphire", Text.of("Deprecated, craft this into Zirconia!").color(Color.DARK_RED))

    e.addAdvanced("kubejs:sporemeter", (item, advanced, text) => {
        let spore_data = global.spore_data;
        let mass = spore_data.mass;
        let gravemind = spore_data.gravemind_state;

        if (item.nbt != null && item.nbt.contains("enabled")) {
            if (mass > 0) {
                let color = Color.LIME_DYE;

                if (mass >= 20000) {
                    color = Color.MAGENTA_DYE;
                } else if (mass >= 10000) {
                    color = Color.RED_DYE;
                } else if (mass >= 5000) {
                    color = Color.ORANGE_DYE;
                } else if (mass > 0) {
                    color = Color.YELLOW_DYE;
                }

                text.add(
                    Text.gray("Detected Sculk Spores: ").append(
                        Text.of(mass.toString()).color(color),
                    ),
                );

                if (gravemind == "Undeveloped") {
                    color = Color.YELLOW_DYE;
                } else if (gravemind == "Immature") {
                    color = Color.ORANGE_DYE;
                } else if (gravemind == "Mature") {
                    color = Color.RED_DYE;
                }
                text.add(
                    Text.gray("Evolution State: ").append(
                        Text.of(gravemind).color(color),
                    ),
                );
            } else {
                text.add(Text.green("No Data."));
            }
        } else {
            text.add(Text.red("Use (right-click) to activate."));
        }
    });
});

const $Winscreen = Java.loadClass("net.minecraft.client.gui.screens.WinScreen");

NetworkEvents.dataReceived("horde_defeated", (event) => {
    Client.setCurrentScreen(
        new $Winscreen(true, () => {
            Client.setCurrentScreen(null);
        }),
    );
});
