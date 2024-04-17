class HashTable {
    constructor(size=5) {
        this.keyMap = new Array(size)
    }

    _hash(key) {
        let total = 0;
        let WEIRD_PRIME = 31;
        for(let i = 0; i < Math.min(key.length, 100); i++) {
            let char = key[i];
            let value = char.charCodeAt(0) - 96
            total = (total * WEIRD_PRIME + value) % this.keyMap.length;
        }
        return Math.abs(total);
    }

    set(key, value) {
        let index = this._hash(key)
        console.log("index: ", index)
        if(!this.keyMap[index]) {
            this.keyMap[index] = []
        }
        // todo: handle duplicate key insertion
        this.keyMap[index].push([key, value])
    }

    get(key) {
        let index = this._hash(key)        
        const item = this.keyMap[index]
        if(item) {
            for(let i = 0; i < item.length; i++) {
                const subItem = item[i]
                if(subItem[0] === key) {
                    return subItem[1]
                }
            }
        }
        return undefined
    }

    keys() {
        let keysArr = [];
        this.keyMap.forEach(item => {
            if(item) {
                item.forEach(subItem => {
                    keysArr.push(subItem[0])
                })
            }
        })
        return keysArr
    }
    
    values() {
        let valuesArr = [];
        this.keyMap.forEach(item => {
            if(item) {
                item.forEach(subItem => {
                   valuesArr.push(subItem[1]) 
                })
            }
        })
        return valuesArr
    }
}

const ht = new HashTable();
console.log(ht.set("hello", "world"))
console.log(ht.set("surya", "sun"))
console.log(ht.set("vijay", "victory"))
console.log(ht.set("Krishna", "supreme"))