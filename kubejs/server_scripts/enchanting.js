//first, remove all normal enchanting recipes:
ServerEvents.highPriorityData((event) => {
    let enchantFolder = global.readJsonFolderFromMod(
        'data',
        'enchanting_system_overhaul',
        'ench-recipes',
        (rl) => rl.path.endsWith('.json')
    );
    for (let [datapath, _json] of Object.entries(enchantFolder)) {
        _json = JsonIO.toObject(_json);

        _json.dependsOn = ['removed'];

        event.addJson(datapath, _json);
    }
});

const enchItem = {
    /**
     * Function to convert an item to a JSON object with amount and id instead of count and item.
     * @param {Internal.ItemStack_} item - The item to convert.
     * @param {number} [count=1] - The count of the item.
     * @returns {object} - The JSON object with amount and id.
     */
    of: function (item, count, nbt) {
        if (count == undefined) {
            count = 1;
        }

        let ingredient = Item.of(item, count);

        if (nbt != undefined) {
            ingredient = Item.of(item, count, nbt);
        }

        //change 'count' to 'amount'
        let _item = JsonIO.toObject(ingredient.toJson());
        _item.amount = _item.count;
        delete _item.count;

        //change 'item' to 'id'
        _item.id = _item.item;
        delete _item.item;

        //change 'nbt' to 'tag
        if (_item.nbt) {
            _item.tag = _item.nbt;
            delete _item.nbt;
        }
        //automatically use remainder.
        if (Item.of(item).getCraftingRemainingItem().id != 'minecraft:air') {
            _item.remainderId = Item.of(item).getCraftingRemainingItem().id;
        }

        return _item;
    },
};

function __addenchantingrecipe(enchant, recipes) {
    let data = {};

    data.enchantment_id = enchant;
    data.maxLevel = 0; //no idea what this does, honestly.
    data.levels = {};
    data.xp = {};
    data.useExpPoints = false;
    let counter = 1;

    recipes.forEach((recipe) => {
        data.levels[counter] = recipe;
        counter++;
    });

    for (let i = 1; i <= counter; i++) {
        data.xp[i] = 5 * i;
    }

    ServerEvents.highPriorityData((event) => {
        event.addJson(
            'terraimmundus:ench-recipes/' + enchant.split(':')[1],
            data
        );
    });
}

/**
 * Adds a recipe for the enchanting specified as the first argument.
 * @param {Internal.Enchantment_} enchant - The id of the enchantment to add a recipe for.
 * @param {...Object} recipes - The recipes to add for the enchantment.
 */
function AddEnchantingRecipe(enchant) {
    const recipes = Array.prototype.slice.call(arguments, 1);
    __addenchantingrecipe(enchant, recipes);
}

/**
 * Adds a recipe for the enchantment specified as the first argument.
 * @param {Internal.Enchantment_} enchant - The id of the enchantment to add a recipe for.
 * @param {number} levels - The number of levels to add recipes for.
 * @param {Internal.ItemStack_} base - The base item for the recipes.
 * @param {number} base_count - The starting count for the base item in the recipes.
 * @param {number} step - The amount to increase the count by for each level.
 */
function AddBasicEnchant(enchant, levels, base, base_count, step) {
    if (step == undefined) step = 0;

    let recipes = [];
    for (let i = 0; i <= levels; i++) {
        recipes.push([enchItem.of(base, Math.min(base_count + step * i, 64))]);
    }

    __addenchantingrecipe(enchant, recipes);
}

//water enchants
AddBasicEnchant('minecraft:riptide', 3, 'prismarine_shard', 16, 8);
AddBasicEnchant('scguns:waterproof', 1, 'prismarine_shard', 16);
AddBasicEnchant('minecraft:luck_of_the_sea', 3, 'prismarine_shard', 4, 4);
AddBasicEnchant('minecraft:respiration', 3, 'prismarine_shard', 8, 4);
AddBasicEnchant('minecraft:aqua_affinity', 1, 'prismarine_shard', 16);
AddBasicEnchant('minecraft:lure', 3, 'prismarine_shard', 8, 4);

//general enchants
AddBasicEnchant('allurement:obedience', 1, 'lapis_lazuli', 32);
AddBasicEnchant('cofh_core:holding', 4, 'lapis_lazuli', 16, 8);
AddBasicEnchant('minecraft:unbreaking', 3, 'lapis_lazuli', 32, 16);
AddBasicEnchant('improved_damage:durable', 3, 'lapis_lazuli', 32, 16);

AddBasicEnchant('minecraft:loyalty', 3, 'lapis_lazuli', 32, 16);
AddBasicEnchant('scguns:lightweight', 2, 'lapis_lazuli', 16, 16);
AddBasicEnchant('minecraft:efficiency', 5, 'lapis_lazuli', 32, 16);

//treasure
AddBasicEnchant('minecraft:mending', 1, 'echo_shard', 1)
AddBasicEnchant('allurement:reforming', 1, 'caverns_and_chasms:zirconia', 2);
AddBasicEnchant('allurement:alleviating', 1, 'caverns_and_chasms:zirconia', 2);
AddBasicEnchant('supplementaries:stasis', 1, 'caverns_and_chasms:zirconia', 2);
AddBasicEnchant('allurement:reeling', 2, 'caverns_and_chasms:zirconia', 2, 1);
AddBasicEnchant('allurement:spread_of_ailments', 3, 'caverns_and_chasms:zirconia', 2, 1);
AddBasicEnchant('minecraft:frost_walker', 2, 'caverns_and_chasms:zirconia', 2, 1);
AddBasicEnchant('scguns:elemental_pop', 2, 'caverns_and_chasms:zirconia', 2, 1);
AddBasicEnchant('scguns:reclaimed', 2, 'caverns_and_chasms:zirconia', 2, 1);
AddBasicEnchant('minecraft:channeling', 1, 'caverns_and_chasms:zirconia', 2);
AddBasicEnchant('minecraft:infinity', 1, 'caverns_and_chasms:zirconia', 2);

//armor
AddBasicEnchant('allurement:shockwave', 4, 'quartz', 8, 8);
AddBasicEnchant('minecraft:depth_strider', 3, 'quartz', 4, 4);
AddBasicEnchant('minecraft:protection', 4, 'quartz', 8, 8);
AddBasicEnchant('minecraft:fire_protection', 4, 'quartz', 4, 4);
AddBasicEnchant('minecraft:feather_falling', 4, 'quartz', 4, 4);
AddBasicEnchant('minecraft:blast_protection', 4, 'quartz', 4, 4);
AddBasicEnchant('minecraft:projectile_protection', 4, 'quartz', 8, 8);
AddBasicEnchant('allurement:vengeance', 3, 'quartz', 4, 4);
AddBasicEnchant('minecraft:thorns', 3, 'quartz', 4, 4);

//curses
AddBasicEnchant('minecraft:binding_curse', 1, 'thermal:cinnabar', 1);
AddBasicEnchant('minecraft:vanishing_curse', 1, 'thermal:cinnabar', 1);
AddBasicEnchant('scguns:gun_rust', 1, 'thermal:cinnabar', 1);
AddBasicEnchant('allurement:ascension_curse', 1, 'thermal:cinnabar', 1);
AddBasicEnchant('allurement:fleeting_curse', 1, 'thermal:cinnabar', 1);

//weapons
AddBasicEnchant('allurement:launch', 2, 'thermal:ruby', 4, 2);
AddBasicEnchant('farmersdelight:backstabbing', 3, 'thermal:ruby', 4, 2);
AddBasicEnchant('scguns:corroded', 4, 'thermal:ruby', 4, 2);
AddBasicEnchant('minecraft:impaling', 5, 'thermal:ruby', 4, 4);
AddBasicEnchant('minecraft:sharpness', 5, 'thermal:ruby', 5, 5);
AddBasicEnchant('minecraft:smite', 5, 'thermal:ruby', 4, 2);
AddBasicEnchant('minecraft:bane_of_arthropods', 5, 'thermal:ruby', 4, 2);
AddBasicEnchant('minecraft:knockback', 2, 'thermal:ruby', 4, 2);
AddBasicEnchant('minecraft:fire_aspect', 2, 'thermal:ruby', 8, 4);
AddBasicEnchant('minecraft:soul_fire_aspect', 2, 'thermal:ruby', 8, 4);

AddBasicEnchant('minecraft:sweeping', 3, 'thermal:ruby', 4, 2);

//ranged
AddBasicEnchant('scguns:quick_hands', 2, 'amethyst_block', 16, 8);
AddBasicEnchant('scguns:trigger_finger', 2, 'amethyst_block', 16, 8);
AddBasicEnchant('scguns:collateral', 1, 'amethyst_block', 16);
AddBasicEnchant('scguns:accelerator', 3, 'amethyst_block', 16, 8);
AddBasicEnchant('scguns:puncturing', 3, 'amethyst_block', 16, 8);
AddBasicEnchant('scguns:shell_catcher', 3, 'amethyst_block', 16, 8);
AddBasicEnchant('scguns:banzai', 3, 'amethyst_block', 16, 8);
AddBasicEnchant('scguns:heavy_shot', 3, 'amethyst_block', 16, 8);
AddBasicEnchant('scguns:hot_barrel', 2, 'amethyst_block', 16, 8);
AddBasicEnchant('minecraft:multishot', 1, 'amethyst_block', 16);
AddBasicEnchant('minecraft:quick_charge', 2, 'amethyst_block', 16, 8);
AddBasicEnchant('minecraft:piercing', 4, 'amethyst_block', 16, 8);
AddBasicEnchant('minecraft:flame', 1, 'amethyst_block', 16);
AddBasicEnchant('minecraft:soul_flame', 1, 'amethyst_block', 16);
AddBasicEnchant('minecraft:punch', 2, 'amethyst_block', 16, 8);
AddBasicEnchant('minecraft:power', 4, 'amethyst_block', 16, 8);

//loot
AddBasicEnchant('minecraft:silk_touch', 1, 'caverns_and_chasms:spinel', 16);
AddBasicEnchant('minecraft:fortune', 3, 'caverns_and_chasms:spinel', 16, 8);
AddBasicEnchant('minecraft:looting', 3, 'caverns_and_chasms:spinel', 16, 8);

//movement
AddBasicEnchant('combatroll:acrobat', 10, 'thermal:apatite', 8, 4);
AddBasicEnchant('combatroll:longfooted', 5, 'thermal:apatite', 8, 4);
AddBasicEnchant('combatroll:multi_roll', 4, 'thermal:apatite', 8, 4);
AddBasicEnchant('aileron:smokestack', 3, 'thermal:apatite', 16, 8);
AddBasicEnchant('aileron:cloudskipper', 3, 'thermal:apatite', 16, 8);
AddBasicEnchant('minecraft:soul_speed', 3, 'thermal:apatite', 16, 8);
AddBasicEnchant('minecraft:swift_sneak', 3, 'thermal:apatite', 16, 8);
AddBasicEnchant('alexsmobs:board_return', 1, 'thermal:apatite', 16);
AddBasicEnchant('alexsmobs:lavawax', 1, 'thermal:apatite', 16);
AddBasicEnchant('alexsmobs:serpentfriend', 1, 'thermal:apatite', 16);
AddBasicEnchant('alexsmobs:straddle_jump', 3, 'thermal:apatite', 16, 8);
