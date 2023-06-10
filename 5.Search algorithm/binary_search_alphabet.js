const district = [
    "Kanchipuram",
    "Tiruvallur",
    "Cuddalore",
    "Villupuram",
    "Vellore",
    "Tiruvannamalai",
    "Salem",
    "Namakkal",
    "Dharmapuri",
    "Erode",
    "Coimbatore",
    "Nilgiris",
    "Thanjavur",
    "Nagapattinam",
    "Tiruvarur",
    "Tiruchirappalli",
    "Karur",
    "Perambalur",
    "Pudukkottai",
    "Madurai",
    "Theni",
    "Dindigul",
    "Ramanathapuram"
]

const sorting = (dist) => {
    return dist.sort()
}

function findDistrict(arr, value) {
    const sortedArr = sorting(arr)
    console.log(sortedArr, value)

    let start = 0
    let end = arr.length-1
    let middle = Math.floor((start + end) / 2)
    console.log(arr[start], arr[end], arr[middle])

    while((arr[middle] !== value) && (start <= end)) {
        if(arr[middle] > value) end = middle -1
        else start = middle + 1
        middle = Math.floor((start + end) / 2) 
    }

    console.log("middle: ",middle)
    return arr[middle] === value ? middle : -1

}

console.log(findDistrict(district, "Erode"))