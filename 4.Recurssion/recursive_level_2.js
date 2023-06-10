// function reverse(str){
//     if(!str.length) return ''
//     let result = str[str.length-1].concat(reverse(str.slice(0, -1)))
//     return result
// }
// console.log(reverse("vijay"))


// function isPalindrome(str){
// //     console.log(str)
//     if(str.length <= 1) return true

//     if(str[0] !== str[str.length-1]) {
//         return false
//     }
//     else {
//         return isPalindrome(str.slice(1, -1))
//     }
// }
// console.log(isPalindrome('awesome'))
// console.log(isPalindrome('tacocat'))



function someRecursive(arr, fn){
    if(!arr.length) return false
   
   let isOdd = fn(arr[arr.length-1])

   if(isOdd) return true
   else {
       arr.pop()
       return someRecursive(arr, fn)
   }
}

console.log(someRecursive([1,2,4], ((val) => val % 2 !== 0)))