function someRecursive(arr, callback) {
    if (arr.length === 0) return false

    if (callback(arr[0])) return true
    else {
        newarr = arr.slice(1)
        return someRecursive(newarr, callback)
    }
}

function sumRecursive(arr, callback) {
    let total = 0
    if (arr.length === 0) return total

    if (callback(arr[0])) total += 1

    newarr = arr.slice(1)
    total += sumRecursive(newarr, callback)

    return total

}


const isOdd = val => val % 2 !== 0;

console.log(sumRecursive([1,2,3,4,5,7,9], isOdd))