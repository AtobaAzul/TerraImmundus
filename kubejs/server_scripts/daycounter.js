const max_days = 10;

LevelEvents.tick((event) => {
	if (
		$ModSavedData.getSaveData().getHordeState().toString() != 'UNACTIVATED'
	) {
		event.server.runCommandSilent('gamerule doInsomnia true');
        
		return;
	} else {
		event.server.runCommandSilent('gamerule doInsomnia false');

		if (event.server.getOverworld().getDayTime() % 24000 !== 0) return;

		let dayNum = (event.server.getOverworld().getDayTime() / 24000).toFixed(
			0
		);
		event.server.runCommandSilent('title @a times 20 100 20');
		if (!(dayNum > max_days)) {
			if (dayNum == max_days) {
				event.server.runCommandSilent(
					`title @a subtitle [{"text": "Final Day", "bold": true, "color":"aqua"}]`
				);
			} else {
				event.server.runCommandSilent(
					`title @a subtitle [{"text": "${
						max_days - dayNum
					} days left", "color": "gray"}]`
				);
			}
			event.server.runCommandSilent(
				`title @a title [{"text": "Day "}, {"text": "${dayNum}", "color":"yellow"}]`
			);
		}
	}
});
