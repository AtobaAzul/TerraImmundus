


StartupEvents.registry('fluid', (e) => {
    const ashen_sap = e.create('ashen_sap');
    ashen_sap.flowingTexture('kubejs:block/fluid/ashen_sap_flow');
    ashen_sap.stillTexture('kubejs:block/fluid/ashen_sap_still');
    ashen_sap.displayName('Ashen Sap');
    ashen_sap.bucketColor(Color.WHITE_DYE);

    const ethanol = e.create('ethanol');
    ethanol.bucketItem.texture('kubejs:item/ethanol_bucket');
    ethanol.flowingTexture('kubejs:block/fluid/ethanol_flow');
    ethanol.stillTexture('kubejs:block/fluid/ethanol_still');
    ethanol.displayName('Ethanol');
});
