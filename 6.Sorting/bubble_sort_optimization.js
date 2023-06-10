function bubble_sort(arr) {
// Use noSwaps when the list is almost sorted
    var noSwaps
    for (let i = arr.length; i > 0; i--) {
        console.log("i: ", i)
        noSwaps = true
        for (let j = 0; j < i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = temp
                noSwaps = false
            }
            console.log(`j = ${j} and arr = ${arr}`)
        }
        if(noSwaps) break
    }

    return arr
}

console.log(bubble_sort([8, 1, 2, 3, 4, 5, 6, 7]))