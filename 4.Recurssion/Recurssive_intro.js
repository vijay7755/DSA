// Recurssive Example

function sumRange(num) {
    if(num === 1) return 1;
    return num + sumRange(num-1);
}


// Recurssive factorial
function factorial(num) {
    if(num === 1) return 1;
    return num * factorial(num-1)
}

console.log(sumRange(5))

console.log(factorial(5))