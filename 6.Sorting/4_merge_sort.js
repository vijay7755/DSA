// Merge sort is a combination of splitting, merging and Sorting.
// It exploits the fact that arrays od 0 or 1 elements are always sorted.
// Works by decomposing the array into smaller array of 0 or 1 elements,
// then compare two pair of arrays and sort it by merging.
// Doing the same by merging all arrays into one to build a newly sorted array.

// time complexity: 
//  best: O(n log n)
//  Average: O(n log n)
//  Worst: O(n log n))
// time comlexity explanation:
// O(log n) [logerthemic] - decomposition
// As the n grows the splitting of array grows log^2 n
// example: if n = 8 then decomposition = 3, if n = 32 then decomposition = 5
// O(n) [linear] - comparisons per decomposition
// iterate each item in both decomposed arrays to compare and merge
// so, O(log n) + O(n) = O(n log n) - linear logethemic

// space complexity: 
// O(n)

// TO implement merge sort, we meed to implement a function to merge two sorted arrays.
// sortedArrayMerger Pseudocode
// iterate both arrays at the same time (i,j) from index 0 (from first element).
// compare two elements from each array and push the one which is smaller into the result array.
// increment the index of an array whose element is pushed (smaller) into the result array.
// continue the loop until both array elements got exhausted.

function sortedArrayMerger(arr1, arr2) {
    const result = []
    let i = 0
    let j = 0
    while ((i < arr1.length) || (j < arr2.length)) {
        const first = arr1[i]
        const second = arr2[j]
        // console.log(`i: ${first}, j: ${second}`)
        if (first < second) {
            result.push(first)
            i++
        } else if (second < first) {
            result.push(second)
            j++
        } else {
            if (first) {
                result.push(first)
                i++
            }
            if (second) {
                result.push(second)
                j++
            }
        }
    }
    return result
}

console.log(sortedArrayMerger([3, 4, 17, 50], [1,2,21,99,150]))


// MergeSort Pseudocode
// Break the array into halves until you have array which are empty or have one element.
// Once you have smaller sorted array(array which is empty or have one element is always sorted), merge those 
// arrays with other next sorted array by comparing each other using merge_sorted_array function.
// COntinue merging like this until you are back to the full array length.
// Once the array has been merged back together, return the merged(and sorted) array.

function mergeSort(arr) {
    // console.log("unsorted Arr: ", arr)
    if(arr.length <= 1) return arr

    let mid = Math.floor(arr.length/2)
    const left = mergeSort(arr.slice(0, mid))
    // console.log("left: ", left)
    const right = mergeSort(arr.slice(mid))
    // console.log("right: ", right)
    return(sortedArrayMerger(left, right))

}

console.log(mergeSort([24,10,54,3,7,100,123,34,95,76]))