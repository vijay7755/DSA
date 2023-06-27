// Bubble sort is bubbling up the large item to the top
// it can be done by swaping the two items by comparing
// time complexity: 
//  best: O(n)
//  Average: O(n^2)
//  Worst: O(n^2)

// Algorithm
// Iterate from the last element in a given array -> i = arr.length-1 | i > 0 | i - 1
// Iterate for 2nd time each element until the length of i -> j = 0 | j <= i | j++
// Compare j and j+1
// If j is less the j+1 do nothing. continue the loop
// If j is greated than j+1 swap each item and contine the loop
// When the loop ends return the array

function bubble_sort(arr) {

    for (let i = arr.length-1; i > 0; i--) {
        console.log("i: ", i)
        for (let j = 0; j <= i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = temp
            }
            console.log(`j = ${j} and arr = ${arr}`)
        }
    }

    return arr
}

console.log(bubble_sort([23, 29, 12, 3, 12, 5]))