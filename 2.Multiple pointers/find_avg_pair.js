function averagePair(arr, target) {
    if(arr.length < 1) return false
    let left = 0;
    let right = arr.length-1
    
    while(left < right) {
        let avg = (arr[left] + arr[right]) / 2
        if(avg === target) return true
        else if(avg > target) right--
        else left++ 
    }
    return false
}

console.log(averagePair([1,3,3,5,6,7,10,12,19], 8))
