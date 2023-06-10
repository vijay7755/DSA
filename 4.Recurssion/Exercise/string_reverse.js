function reverse(str) {
    if(!str.length) return ''

    let reverseString = str[str.length-1].concat(reverse(str.slice(0, -1)))
    
    return reverseString
}


console.log(reverse('awesome'))