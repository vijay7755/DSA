function fibanoci(num) {
    let num1 = 0
    let num2 = 1

    if(num === 0) return num1
    if(num === 1) return num2
    let result = 1
    
    for(let i=2; i<=num; i++) {
        result = num1 + num2
        num1 = num2
        num2 = result
    }

    return result
}

console.log(fibanoci(10))