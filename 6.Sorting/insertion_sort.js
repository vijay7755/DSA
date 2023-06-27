// Insertion sort is inserting the minimum value in between an Array by iterating from start to end.
// time complexity: 
//  best: O(n)
//  Average: O(n^2)
//  Worst: O(n^2)

// Algorithm
// Iteration starts with second element in an array.
// Stores the minimum value as second element and compare it with the previous element
// If the previous element is less the than the current min value, swap the previous value to the current index
// After the inner loop ends, swap the stored min value to the current inner loop index

function insertion_sort(arr) {

    for(let i=1; i < arr.length; i++) {
        let currentVal = arr[i]
        for(var j=i-1; j>=0 && arr[j] > currentVal; j--) {
            console.log(`j(${j}): ${arr[j]}  - i(${i}): ${arr[i]}`)
            arr[j+1] = arr[j]
            console.log(arr)
        }
        console.log("j: ", j)
        arr[j+1] = currentVal
        console.log("after swap: ", arr)
    }

    return arr
}

console.log(insertion_sort([29, 23, 3, 12, 5]))