function sum_zero_finder(arr) {
    for(let i = 0; i<  arr.length; i++) {
        for(let j = i+1; j<  arr.length; j++) {
            if(arr[i] + arr[j] === 0) {
                return [arr[i], arr[j]]
            }
        }
    }
}

console.log(sum_zero_finder([-3, -2, -1, 1, 2]))