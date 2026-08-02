
ServerEvents.recipes((e) => {
    e.remove({id: /.*thermal.*fire_charge.*/})

    let remove = ['thermal:energy_duct', 'thermal:fluid_duct', 'thermal:fluid_duct_windowed', 'thermal:energy_limiter_attachment', 'thermal:filter_attachment', 'thermal:servo_attachment', 'thermal:turbo_servo_attachment']

    remove.forEach((removed) => {
        e.remove({output: removed})
    })
})