ServerEvents.recipes(event => {

    /////////////////
    // REMOVAL
    /////////////////

    const ironworksMaterials = [
        "brass",
        "copper",
        "diamond",
        "gold",
        "iron",
        "netherite",
        "steel",
    ]

    const ingotToRawOreInput = [
        "minecraft:iron_ingot",
        "minecraft:copper_ingot",
        "minecraft:gold_ingot",
        "create:zinc_ingot",
        "create:tin_ingot"
    ]

    const ingotToRawOreOutput = [
        "minecraft:raw_iron",
        "minecraft:raw_copper",
        "minecraft:raw_gold",
        "create:raw_zinc",
        "create:raw_tin"

    ]
    
    // Remove all ironworks OP tool recipies
    ironworksMaterials.forEach(mat => {
        event.remove({ output: `create_ironworks:${mat}_hammer` })
        event.remove({ output: `create_ironworks:${mat}_paxel` })
    })

    // removes create ultimate factory redstone recipe
    event.remove({ type: 'create:mixing', output: 'minecraft:redstone'})

    ///////////////////
    // ADDITION/REPLACEMENT
    ///////////////////

    event.remove({ output: `toms_storage:ts.wireless_terminal` })
    event.shaped(
        Item.of('toms_storage:ts.wireless_terminal'),
        [
            "AB ",
            "CDC",
            "EFG"
        ],
        {
            A: 'create:electron_tube',
            B: 'create:precision_mechanism',
            C: 'create:brass_sheet',
            D: 'toms_storage:ts.storage_terminal',
            E: 'create:sturdy_sheet',
            F: 'fwaystones:abyss_watcher', // long term, upgraded one should use pocket wormhole
            G: 'create:linked_controller'
        }
    )


    // ingot to raw ore mixing recipe 
    ingotToRawOreInput .forEach((input, index) => {
        const output = ingotToRawOreOutput[index]
        event.custom({
            "type": "create:mixing",
            "heatRequirement": "heated",
            "ingredients": [
              {
                
                "item": `${input}`
              },
               {
                
                "item": `${input}`
              },
              {
                
                "item": `${input}`
              },
              {
                
                "item": `minecraft:blaze_powder`
              },
              {
                "amount": 4050,
                "fluid": "minecraft:lava",
              }
            ],
            "results": [
              {
                "count": 1,
                "item": `${output}`
              }
            ]
          })
    })

  
  
console.log("Blockparty Wednesday KubeJS recipes loaded!");
})
