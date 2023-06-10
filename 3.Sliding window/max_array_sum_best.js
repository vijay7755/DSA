function maxSubarraySum(arr, num){
    if(arr.length < num ) return false
    let maxSum = 0
    for(let i=0; i<num; i++) {
        maxSum += arr[i]
    }
    console.log("intial sum : ",maxSum)
    let tempSum = 0
    for(let i=num; i<arr.length; i++) {
        if(i === num) { tempSum = maxSum }
   
        tempSum = tempSum - arr[i-num] + arr[i]
        console.log("tempSum: ", tempSum)
        maxSum = Math.max(maxSum, tempSum)
        console.log("maxSum: ",maxSum)
    }
    return maxSum
}

const res = maxSubarraySum([100, 200, 300, 400, 600, 350, 120], 2)
// const res = maxSubarraySum([3, -2, 7, -4, 1, -1, 4, -2, 1], 2)

console.log("res: ", res)