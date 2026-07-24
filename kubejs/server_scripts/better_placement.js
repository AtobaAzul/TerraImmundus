//courtesy of Above And Beyond

function opposite(face) {
	if (face.equals('down')) return 'up';
	if (face.equals('east')) return 'west';
	if (face.equals('west')) return 'east';
	if (face.equals('north')) return 'south';
	if (face.equals('south')) return 'north';
	return 'down';
}

BlockEvents.placed((event) => {
	if (!event.entity) return;

	if (
		event.getEntity().isCrouching() &&
		(event.block.id.startsWith('thermal:dynamo') ||
			event.block.id.startsWith(
				'systeams:steam_dynamo',
			))
	) {
		let properties = event.block.getProperties();
		let opositeFace = opposite(
			properties.get('facing'),
		);
		properties.put('facing', opositeFace);

		event.block.set(event.block.id, properties);
	}
});


// BlockEvents.placed('pipez:energy_pipe', (event) => {
// 	let block = event.block;
//     let _block = event.level.getBlock(event.pos)
// 	Direction.ALL.forEach((face) => {
// 		let dynamo = block.offset(face);
// 
// 		if (dynamo.id.match(/.*dynamo.*/)) {
// 			if (face.toString().toLowerCase() == opposite(dynamo.getProperties().get('facing'),)) {
// 				let properties = block.getProperties();
// 				properties.put('has_data', true);
// 				block.set(block.id, properties);
// 				let be = block.getEntity();
// 				if (be) {
// 					be.setExtracting(face, true);
// 				}
// 			}
// 		}
// 	});
// });
