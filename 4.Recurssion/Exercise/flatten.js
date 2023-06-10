function flatten(arr) {
    let flatArr = []

    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            flatArr = flatArr.concat(flatten(arr[i]))
        }
        else {
            flatArr.push(arr[i])
        }
    }

    return flatArr

}


console.log(flatten([1, 2, 3, [4, 5, [6, 7], 9], 10]))