/* Normal */
// function capitalizeFirst(arr) {
//     if (!arr.length) return []

//     capArr = []

//     arr.forEach(element => {
//         capElement = element.charAt(0).toUpperCase() + element.slice(1)
//         capArr.push(capElement)
//     })

//     return capArr
// }

/* Recurssive */
function capitalizeFirst(arr) {
    if (!arr.length) return []

    const capArr = []

    capArr.push(arr[0].charAt(0).toUpperCase() + arr[0].slice(1))


    return capArr.concat(capitalizeFirst(arr.slice(1)))
}


console.log(capitalizeFirst(['car', 'taco', 'banana']))