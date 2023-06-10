// function productOfArray(arr) {
//     if(arr.length === 0 ) return 1
//     return arr[0] * productOfArray(arr.slice(1))
// }

// productOfArray([1,2,3,4])


// function recursiveRange(num) {
//     if(num < 0) return num
//     if(num === 0) return 0
//    return num + recursiveRange(num-1)
// }

// recursiveRange(4)


function fib(num){
    let first = 0
    let second = 1
    let result = first + second

    function helper(n) {
      if(n < 1) return result=0

      if(n <= 2) return result
      
      first = second
      second = result
      result = first + second

      helper(n-1)
    }

    helper(num)
    return result
}

/* alternate solution
function fib(n){
    if (n <= 2) return 1;
    return fib(n-1) + fib(n-2);
}
 */

console.log(fib(10)) // 55

// 1,1,2,3,5,8,13,21,34,55