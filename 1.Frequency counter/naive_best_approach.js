//Write a function called same, which accepts two arrays.
//The function should return true if every value in the array has it's corresponding value squared in the second array.
//The frequency of values must be the same.

function same(arr1, arr2){
    if(arr1.length !== arr2.length) {
        return false
    };
    let frequencyCounter1 = {}
    let frequencyCounter2 = {}

    for(let val of arr1) {
        frequencyCounter1[val] ? 
            frequencyCounter1[val]=frequencyCounter1[val]+1 : 
            frequencyCounter1[val]=1
    }
    for(let val of arr2) {
        frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1 //line 13 to 15 in an eligant way
    }
    console.log(Object.values(frequencyCounter1))
    
    for(let key in frequencyCounter1) {
        console.log("key: ",key)
        if(!(frequencyCounter2.hasOwnProperty(key**2))) {
            console.log('falsed')
            return false
        }
        if(frequencyCounter1[key] !== frequencyCounter2[key**2]){
            console.log('falsed here')
            return false
        }
    }
    return true
}

same([2,3,4,1,3], [1,16,9,4,9])


// FREQUENCY COUNTER BEST