// Find out given "N" consecutive number in an Array which yeild maximum value

function maxSubArraySum(arr, num) {
    if(arr.length < num) {
        return null;
    }

    var max = -Infinity;
    console.log(arr.length - num + 1)
    for(let i=0; i <= arr.length - num; i++) {
        temp = 0;
        for(let j=0; j<num; j++) {
            temp += arr[i + j];
        }
        if(temp > max) {
            max = temp
        }
        console.log(`max: ${max}  temp: ${temp}`)
    }
    return max
}

// maxSubArraySum([2,5,3,1,5,3,2,7,6], 3)
const res = maxSubArraySum([100, 200, 300, 400, 600, 350, 120], 2)
// const res = maxSubArraySum([3, -2, 7, -4, 1, -1, 4, -2, 1], 2)
console.log("res: ", res)