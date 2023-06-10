const arr = [-34, -99, -100, -234]

function findLargest(arg) {
    return arg.reduce((a, b) => {
        return a > b ? a : b
    }, -Infinity)
}

console.log(findLargest(arr))

const users = [
    { firstname: "Krishna", lastname: "Vasudev", age: 100 },
    { firstname: "Vijay", lastname: "Krishnan", age: 26 },
    { firstname: "Madhav", lastname: "Maheswar", age: 26 },
    { firstname: "Siva", lastname: "trilok", age: 100 },
]

const ages = users.reduce((acc, item) => {
    acc[item.age] = (acc[item.age] || 0) + 1
    return acc
}, {})

console.log("ages: ", ages)

