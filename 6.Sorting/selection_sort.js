// Selection sort is to slect the smallest in the value array and swap it to the beginning
// it is contradictory to bubble sort where we swap the largest to the last
// time complexity: O(n^2)
// Advantages over bubble sort: in bubble sort we swap over and over whereas in selection sort we swap only one time for one iteration.

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