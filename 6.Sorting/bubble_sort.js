// Bubble sort is bubbling up the large item to the top
// it can be done by swaping the two items by comparing

function bubble_sort(arr) {

    for (let i = arr.length; i > 0; i--) {
        console.log("i: ", i)
        for (let j = 0; j < i - 1; j++) {
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