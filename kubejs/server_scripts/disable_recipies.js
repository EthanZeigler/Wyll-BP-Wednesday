/* 
* Disables recipies at runtime
*/

ServerEvents.recipes(event => {
    const ironworksMaterials = [
        "brass",
        "copper",
        "diamond",
        "gold",
        "iron",
        "netherite",
        "steel",
    ]
    
    // Remove all ironworks OP tool recipies
    ironworksMaterials.forEach(mat => {
        event.remove({ output: `create_ironworks:${mat}_hammer` })
        event.remove({ output: `create_ironworks:${mat}_paxel` })
    })
})
