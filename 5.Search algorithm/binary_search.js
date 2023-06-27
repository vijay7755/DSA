// Write a function called binarySearch which accepts a sorted array and a value 
// and returns the index at which the value exists. Otherwise, return -1.

// This algorithm should be more efficient than linearSearch



function binarySearch(arr, value) {

    let start = 0
    let end = arr.length-1
    let middle = Math.floor((start + end)/2)

    while(arr[middle] !== value && start <= end) {
        if(arr[middle] > value) end = middle - 1
        else start = middle + 1
        middle = Math.floor((start + end)/2)
    }

    return arr[middle] === value ? middle : -1
}

const result = binarySearch([1, 2, 3, 6, 7, 9, 11 , 12, 15, 17, 21], 3)
console.log(result)