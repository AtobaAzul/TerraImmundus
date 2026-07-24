
ServerEvents.tags('entity_type', (event) => {
    event.remove('simpleblood:bleeds', /.*/)
    event.remove('simpleblood:bleeds_ender', /.*/)
    event.remove('simpleblood:bleeds_withered', /.*/)
    event.remove('simpleblood:slimes', /.*/)
    event.add('terraimmundus:sculk_mobs', SCULK_ENTITIES);
    event.add('terraimmundus:bleeds_sculk', [
        '#terraimmundus:sculk_mobs',
        'alexsmobs:screecher',
        'minecraft:warden'
    ]);
});
