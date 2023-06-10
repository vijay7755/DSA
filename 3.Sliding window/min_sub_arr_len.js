// Write a function called minSubArrayLen which accepts two parameters - an array of positive integers and a positive integer.

// This function should return the minimal length of a contiguous subarray of which 
// the sum is greater than or equal to the integer passed to the function. If there isn't one, return 0 instead.


function minSubArrayLen(arr, target) {
    let start = 0
    let end = 0
    let minLength = Infinity
    let tempSum = 0

    if (!arr.length) return 0

    if (arr[start] >= target) return 1

    while (start < arr.length) {

        if (tempSum < target && end < arr.length) {
            tempSum = tempSum + arr[end]
            end++
        } else if (tempSum >= target) {
            minLength = Math.min(minLength, (end - start))
            tempSum = tempSum - arr[start]
            start++
        } else {
            break
        }
    }
    return minLength = minLength === Infinity ? 0 : minLength
}

// console.log("result: ", minSubArrayLen([2, 3, 1, 2, 4, 3], 7))
console.log("result: ",minSubArrayLen([1,4,16,22,5,7,8,9,10],39))