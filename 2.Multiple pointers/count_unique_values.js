function countUniqueValues(arr){
    if(arr.length === 0) {
        return 0
    }
    
    let i = 0;
    let j = 1;
    while(j < arr.length) {
        if(arr[i] === arr[j]) {
            j++;
        }
        else {
            i++;
            arr[i] = arr[j];
            j++;
        }
    }
    return i+1
}

//time complexity O(n)

console.log(countUniqueValues([1,1,2,2,3,3,3,3,3,3,3,3,4,4,5]))