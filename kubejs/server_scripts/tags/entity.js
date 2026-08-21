
ServerEvents.tags('entity_type', (event) => {
    event.remove('simpleblood:bleeds', /.*/)
    event.remove('simpleblood:bleeds_ender', /.*/)
    event.remove('simpleblood:bleeds_withered', /.*/)
    event.remove('simpleblood:slimes', /.*/)
    event.remove('simpleblood:compat/guardvillagers_bleeds', /.*/)
    event.add('terraimmundus:sculk_mobs', SCULK_ENTITIES);
    event.add('terraimmundus:bleeds_sculk', SCULK_ENTITIES)
    event.add('terraimmundus:bleeds_sculk', [
        'alexsmobs:screecher',
        'minecraft:warden'
    ]);
    event.remove('terraimmundus:bleeds_sculk', 'sculkhorde:sculk_pufferfish')
});


ServerEvents.tags('worldgen/biome', event => {
    event.add('scguns_cnc:gravekeeper_acolyte_spawns', "#forge:with_default_monster_spawns")
})

ServerEvents.tags('worldgen/structure', event => {
    event.add('terraimmundus:all_structures', /.*/)
})

ServerEvents.tags('damage_type', event => {
    event.add('minecraft:is_projectile', 'scguns:bullet')
})