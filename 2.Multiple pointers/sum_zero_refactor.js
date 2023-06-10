function sum_zero_best(arr) {
    let left = 0
    let right = arr.length-1
    while(left < right) {
        let sum = arr[left] + arr[right]
        console.log("sum: ", sum)
        if(sum === 0) {
            return [arr[left], arr[right]]
        }
        else if(sum > 0) {
            right--
            console.log("right: ", right)
        }
        else {
            left++
            console.log("left: ", left)
        }
    }
}

console.log(sum_zero_best([-4,-3,-2,-1,0,2,5,6]))