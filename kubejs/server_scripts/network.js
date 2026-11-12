LevelEvents.tick((event) => {
	let mass = $ModSavedData.getSaveData().getSculkAccumulatedMass();
	let gravemind = $SculkHorde.gravemind.getEvolutionState().toString();
	let state = $ModSavedData.getSaveData().getHordeState().toString();
    let nodes = $ModSavedData.getSaveData().getNodeEntries().size().toFixed(0)

	if (!(event.level.time % 10 === 0)) return;

	event.server.players.forEach((player) => {
		player.sendData('spore_data', {
			mass: mass,
			gravemind_state: gravemind,
			state: state,
            nodes: nodes
		});
	});
});

PlayerEvents.advancement('sculkhorde:sculk_horde_defeat', (event) => {
	event.player.sendData('horde_defeated', { defeated: true });
});
