// Selection sort is to slect the smallest in the value array and swap it to the beginning
// it is contradictory to bubble sort where we swap the largest to the last
// time complexity: 
//  best: O(n^2)
//  Average: O(n^2)
//  Worst: O(n^2)
// Advantages over bubble sort: in bubble sort we swap over and over whereas in selection sort we swap only one time for one iteration.


// Algorithm
// Iterate from start to end by comparing the next item in an array to find the next minimum value -> i=0 | i<arr.length | i++
// Store the first value as the minimum value -> min = i
// If minimum value is not found do nothing.
// If the minimum value is found store that value as Minimum value -> min = j
// At the end of the loop swap the min(j) with min(i)
// Continue until the the end of the array length


function selection_sort(arr) {

    for(let i=0; i < arr.length; i++) {
        let min = i
        for(let j=i+1; j < arr.length; j++) {
            if(arr[min] > arr[j]) {
                min = j
            }
        }
        if(min !== i) {
            // let temp = arr[i]
            // arr[i] = arr[min]
            // arr[min] = temp
            [arr[min], arr[i]] = [arr[i], arr[min]]
        }
        console.log("after: ", arr)
    }

    return arr
}

console.log(selection_sort([23, 29, 12, 3, 12, 5]))