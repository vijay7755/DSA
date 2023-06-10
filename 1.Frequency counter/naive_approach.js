//Write a function called same, which accepts two arrays.
//The function should return true if every value in the array has it's corresponding value squared in the second array.
//The frequency of values must be the same.

function same(arr1, arr2) {
    if(arr1.length !== arr2.length) {
        return false
    };

    for(i=0; i<arr1.length;i++) {
        let correctIndex = arr2.indexOf(arr1[i]**2)
        if(correctIndex == -1) {
            return false
        }
        console.log(arr2)
        arr2.splice(correctIndex, 1)
        console.log("after: ",arr2)
    };

    return true
};

same([1,2,3,4], [6,4,9,1])



// FREQUENCY COUNTER NAIVE