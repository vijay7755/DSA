function isPalindrome(str) {
    if (str.length <= 1) return true

    if(str[0] !== str[str.length -1]) {
        return false
    }
    else {
        return isPalindrome(str.slice(1, -1))
    }

}

console.log("isPalindrome: ", isPalindrome('aba'))



function flatBraces(str) {
    if (str.length === 0) return true

    switch (str[0]) {
        case "(":
            if (str[str.length - 1] !== ")") return false
            break
        case "{":
            if (str[str.length - 1] !== "}") return false
            break
        case "[":
            if (str[str.length - 1] !== "]") return false
            break
    }

    return flatBraces(str.slice(1, -1))

}

console.log("flatBraces: ", flatBraces("(({[{[]}]}))"))