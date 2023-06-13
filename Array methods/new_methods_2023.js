// Latest Array method "with" to modifiy the array element without modifying the original array 
const persons = ["Vijay", "Krishnan", "Mahadev", "Murugan"]

const modifiedArr = persons.with(3, "karthick")
console.log(modifiedArr)