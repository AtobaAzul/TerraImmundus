
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

    event.add('scguns:heavy', ['sculkhorde:sculk_phantom',
        'sculkhorde:sculk_phantom_corpse',
        'sculkhorde:sculk_ravager',
        'minecraft:wither',
        'alexsmobs:centipede_body',
        'alexsmobs:centipede_head',
        'alexsmobs:centipede_tail',
        'scguns:blunderer',
        'sculkhorde:sculk_enderman',
        'sculkhorde:angel_of_reaping',
        'sculkhorde:sculk_ghast'
    ])

    event.add('scguns:wither', ['thermal:basalz',
        'caverns_and_chasms:deeper',
        'caverns_and_chasms:cavefish',
        'caverns_and_chasms:evendeeper',
        'caverns_and_chasms:glare',
        'caverns_and_chasms:grazer',
        'caverns_and_chasms:rat',
        'caverns_and_chasms:peeper',
        'caverns_and_chasms:mime',
        'caverns_and_chasms:saddled_grazer',
        'caverns_and_chasms:lost_goat',
        'alexsmobs:centipede_body',
        'alexsmobs:centipede_head',
        'alexsmobs:centipede_tail',
        'alexsmobs:murmur',
        'alexsmobs:murmur_head',
        'alexsmobs:underminer',
        'alexsmobs:rocky_roller',
        'minecraft:glow_squid',
        'quark:forgotten',
        'quark:toretoise',
        'minecraft:cave_spider',
        'scguns_cnc:gravekeeper_schism'])


    event.add('scguns:undead', [
        'quark:forgotten',
        'alexsmobs:murmur',
        'alexsmobs:murmur_head',
        'alexsmobs:underminer',
    ])

    event.add('scguns:water', [
        'sculkhorde:sculk_pufferfish',
        'sculkhorde:sculk_salmon',
        'sculkhorde:sculk_squid',
        'sculkhorde:sculk_leech',
        'sculkhorde:sculk_guardian'
    ])
});


ServerEvents.tags('worldgen/biome', event => {
    event.add('scguns_cnc:gravekeeper_acolyte_spawns', "#forge:with_default_monster_spawns")
})

ServerEvents.tags('worldgen/structure', event => {
    event.add('terraimmundus:all_structures', /.*/)
    event.add('nova_structures:tavern', /.*tavern.*/)
})

ServerEvents.tags('damage_type', event => {
    event.add('minecraft:is_projectile', 'scguns:bullet')
})
