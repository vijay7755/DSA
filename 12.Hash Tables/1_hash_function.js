function hash(key, arraylen) {
    let total = 0;

    for(let i=0; i < Math.min(key.length, 10); i++) {
        const char = key[i]
        let value = char.charCodeAt(0) - 96
        total = (total + value) % arraylen;
    }
    return total
}
console.log(hash("green", 10))

