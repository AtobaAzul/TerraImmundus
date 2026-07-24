// priority: 256

const rowCollumnMap = {
	'00': 'gun_top_internal_1',
	'01': 'gun_top_internal_2',
	'02': 'gun_top_barrel_1',
	'03': 'gun_top_barrel_2',
	10: 'gun_internal_1',
	11: 'gun_internal_2',
	12: 'gun_barrel_1',
	13: 'gun_barrel_2',
	20: 'gun_grip',
	21: 'IGNORED',
	22: 'gun_magazine',
	23: 'IGNORED',
};

function _convertRowAndCollumnToKey(row, column) {
	return rowCollumnMap[
		row.toString() + column.toString()
	];
}

function convertToGunBenchRecipe(result, pattern, key) {
	const json = {
		type: 'scguns:gun_bench',
		result: {
			item: result,
			count: 1,
		},
		ingredients: {},
	};

	for (let i = 0; i < pattern.length; i++) {
		let row = pattern[i];
		for (let _i = 0; _i < row.length; _i++) {
			let char = row[_i];
			if (key[char]) {
				let ingredientKey =
					_convertRowAndCollumnToKey(i, _i);
				if (ingredientKey != 'IGNORED') {
					json.ingredients[ingredientKey] =
						Ingredient.of(key[char]).toJson();
				}
			}
		}
	}

	return json;
}

PlayerEvents.loggedIn((event) => {
	if (!event.player.persistentData.givenStartLoot) {
		event.player.persistentData.givenStartLoot = true;
		event.player.give(Item.of('ftbquests:book'));
	}
});


ServerEvents.loaded((event) => {
    if (event.server.persistentData.borderSetup) return

    event.server.persistentData.borderSetup = true

    event.server.allLevels.forEach((level) => {
        level.persistentData.oldBorderSize = level.worldBorder.size

        level.worldBorder.setSize(6000)
    })
})

ServerEvents.tick(event => {
    const SCULK_DEFEATED = $ModSavedData.getSaveData().getHordeState().toString() == 'DEFEATED'

    if (SCULK_DEFEATED && !event.server.persistentData.finalBorderSetup) {
        event.server.allLevels.forEach((level) => {
            level.worldBorder.setSize(level.persistentData.oldBorderSize)
        })

        event.server.persistentData.finalBorderSetup = true
    }
})