const $UUID = Java.loadClass('java.util.UUID');
let uuid = () => {
	return $UUID.randomUUID().toString();
};


/**
 * Adds a custom attribute to an item. The attribute is added to the `kubejs:attributesetter/item` data file.
 *
 * @param {Internal.Ingredient_} item - The registry name of the item for which to add the attribute.
 * @param {Internal.Attribute} attribute - The name of the attribute to add.
 * @param {number} value - The value to assign to the attribute.
 * @param {Internal.AttributeModifier$Operation_} operation - The operation to use when applying the attribute. One of 'addition', 'multiply_base', 'multiply_total', 'override_total', or 'ignore_total'.
 * @param {string} [slot] - The slot to which the attribute should be applied. Defaults to all slots.
 */

/**
 * Adds custom attributes to an item. Attributes are stored in the `kubejs:attributesetter/item` data file.
 *
 * @param {Internal.Ingredient_} item - The registry name of the item for which to add the attributes (e.g., 'namespace:item_name').
 * @param {Array<[Internal.Attribute, number, Internal.AttributeModifier$Operation_, string]>} attribute - An array of attributes to add. Each attribute is represented as an array:
 *   - `[0]` {string} The attribute name (e.g., 'attribute_namespace:attribute_name').
 *   - `[1]` {number} The value to assign to the attribute.
 *   - `[2]` {string} The operation to use when applying the attribute. Must be one of:
 *   - `[3]` {string} The slot to which the attribute should be applied (e.g., 'curio:slot_name'). Defaults to all slots if not provided.
 * @param {string} [_uuid] - An optional UUID to uniquely identify the attribute. If not provided, a random UUID will be generated.
 *
 * @example
 * AddItemAttribute('irons_spellbooks:copper_spell_book', [
 *   ['irons_spellbooks:max_mana', 50, 'addition', 'curio:spellbook']
 * ]);
 */
function AddItemAttribute(item, attribute, _uuid) {
	let name = item.split(':')[1];
	let data = {
	};
    data[item] = []



	attribute.forEach((attribute) => {
		data[item].push({
			attribute: attribute[0],
			uuid: _uuid || uuid(),
			value: attribute[1],
			operation: attribute[2],
			slot: attribute[3],
		});
	});


    ServerEvents.highPriorityData((event) => {
		event.addJson('kubejs:attributesetter/item/' + name, data);
	});
}

//AddItemAttribute('tfccanes:walking_cane', [['forge:step_height_addition', 0.5, 'addition', 'offhand'], ['forge:step_height_addition', 0.15, 'addition', 'mainhand']]);

AddItemAttribute('#terraimmundus:rapiers', [['attributeslib:armor_pierce', 6, 'addition', 'mainhand']])
AddItemAttribute('#terraimmundus:maces', [['attributeslib:armor_shred', 0.25, 'addition', 'mainhand']])
AddItemAttribute('#terraimmundus:hammers', [['attributeslib:crit_damage', 0.25, 'addition', 'mainhand']])
AddItemAttribute('#terraimmundus:warglaives', [
	['attributeslib:dodge_chance', 0.25, 'addition', 'mainhand'],
	['attributeslib:dodge_chance', 0.25, 'addition', 'offhand'],
    ['combatroll:count', 1, 'addition', 'mainhand'],
	['combatroll:count', 1, 'addition', 'offhand'],
]);
AddItemAttribute('#terraimmundus:swords', [['attributeslib:crit_chance', 0.3333, 'addition', 'mainhand']])
AddItemAttribute('#terraimmundus:spears', [['attributeslib:armor_pierce', 2, 'addition', 'mainhand']])
AddItemAttribute('#terraimmundus:halberds', [['attributeslib:armor_shred', 0.125, 'addition', 'mainhand']])
AddItemAttribute('#terraimmundus:greatswords', [['minecraft:generic.armor', 5, 'addition', 'mainhand']])
AddItemAttribute('#terraimmundus:katanas', [['attributeslib:current_hp_damage', 0.025, 'addition', 'mainhand']])
AddItemAttribute('#terraimmundus:scythes', [['attributeslib:life_steal', 0.05, 'addition', 'mainhand']])
