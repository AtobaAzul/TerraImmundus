StartupEvents.registry('item', (event) => {
    Object.entries(PURITY_WEAPON_DEFS).forEach(([type, data]) => {
        let item = event.createCustom('purity_' + type, () => new $BladeOfPurity($Tiers.DIAMOND, data.damage-3, data.speed-4, new $ItemProperties().rarity($Rarity.EPIC).setNoRepair().durability(1561)));
        item.displayName(data.name);
    })
})


