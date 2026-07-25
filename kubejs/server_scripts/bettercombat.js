ServerEvents.highPriorityData((e) => {
	let materials = ['anthralite', 'silver', 'necromium', 'purity', 'tin'];

	let types = [
		'greatsword',
		'halberd',
		'hammer',
		'katana',
		'rapier',
		'scythe',
		'warglaive',
		'mace',
		'spear',
	];

	types.forEach((type) => {
		materials.forEach((material) => {
			e.addJson(`kubejs:weapon_attributes/${material}_${type}`, {
				parent: 'moonsweaponry:base/' + type,
			});
		});
	});

	e.addJson('moonsweaponry:weapon_attributes/base/spear', {
		parent: 'bettercombat:spear',
		attributes: {
			two_handed: false,
			attack_range: 4.0,
			attacks: [
				{
					hitbox: 'FORWARD_BOX',
					animation: 'bettercombat:one_handed_stab',
					upswing: 0.5,
					damage_multiplier: 1,
					angle: 0,
					swing_sound: {
						id: 'bettercombat:spear_stab',
					},
				},
				{
					hitbox: 'FORWARD_BOX',
					animation: 'bettercombat:one_handed_stab',
					upswing: 0.5,
					damage_multiplier: 1,
					angle: 0,
					swing_sound: {
						id: 'bettercombat:spear_stab',
					},
				},
				{
					hitbox: 'FORWARD_BOX',
					animation: 'bettercombat:one_handed_stab',
					upswing: 0.5,
					damage_multiplier: 1,
					angle: 0,
					swing_sound: {
						id: 'bettercombat:spear_stab',
					},
				},
			],
		},
	});
});

//putting this here
/*
EntityEvents.hurt((e) => {
	let level = e.level;
	let hitEntity = e.entity;
	
	let attacker = e.source.actual;

	if (
		attacker != undefined &&
		attacker.isPlayer() &&
		attacker.getMainHandItem().id != 'air' &&
		(attacker.getMainHandItem().hasTag('terraimmundus:purity_weapon') ||
			(attacker.getOffHandItem().id != 'air' &&
				attacker
					.getOffHandItem()
					.HasTag('terraimmundus:purity_weapon')))
	) {
		let hitbox = hitEntity.getBoundingBox().inflate(5);
		let entities = $EntityAlgo.getEntitiesExceptOwnerInBoundingBox(
			attacker,
			level,
			hitbox
		);


        let collectedEntities = []

		entities.forEach((entity) => {
			if ($EntityAlgo.isSculkLivingEntity.test(entity) && !collectedEntities.includes(entity.UUID)) {
                collectedEntities.push(entity.UUID)
				let purifier = new $CursorSurfacePurifierEntity(level);
				purifier.setPos(hitEntity.blockPosition());
				purifier.setMaxTransformations(15);
				purifier.setTickIntervalMilliseconds(10);
				purifier.setMaxLifeTimeMillis(30000);
				//purifier.setSearchIterationsPerTick(1);

				purifier.setMaxRange(32);
				level.addFreshEntity(purifier);

				// Add Effect
				hitEntity.addEffect(
					new $MobEffectInstance(
						$ModMobEffects.PURITY.get(),
						20 * 10,
						0
					)
				);
			}
		});
	}
});*/
