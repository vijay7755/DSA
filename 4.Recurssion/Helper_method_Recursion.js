// Recursion with helper method

function collectOddValues(arr) {
    let result = [];

    const helper = (helperIP) => {
        if(helperIP.length === 0) return result;

        if(helperIP[0] % 2 !== 0) {
            result.push(helperIP[0])
        }

        helper(helperIP.slice(1))
    }

    helper(arr)

    return result
}


console.log( collectOddValues([1,2,3,4,5,6,7,8,9,10,11,12]) );