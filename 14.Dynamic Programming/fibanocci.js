
// Recursive
// Naive approach - O(2^n) in time complexity and space complexity
function fibanocci(n) {
    if(n <= 2) return 1

    return fibanocci(n-1) + fibanocci(n-2)
}

// Recursive + memoization
// Optimized time complexity approach - O(n)
// But naive space complexity because as the "n" grows the call stack grows exponentially,
// result in exceeding the call stack
function fibMemo(n, memo = [undefined, 1, 1]) {
    if(memo[n] !== undefined) return memo[n]

    var res = fibMemo(n-1, memo) + fibMemo(n-2, memo)
    memo[n] = res

    return res
}

// Tabulation
// Optimized time and space complexity - O(n) for both
function fibTabulation(n) {
    if(n <= 2) return 1

    var fibNums = [0, 1, 1]
    for(let i = 3; i <= n; i++) {
        fibNums[i] = fibNums[i-1] + fibNums[i-2]
    }
    return fibNums[n]
}