function sameFrequency(num1, num2){
  let str1 = String(num1)
  let str2 = String(num2)
  if(str1.length != str2.length) return false
  
  let obj1 = {}
  let obj2 = {}
  str1.split('').forEach(key => {
      obj1[key] = (obj1[key] || 0) + 1
  })
  str2.split('').forEach(key => {
      obj2[key] = (obj2[key] || 0) + 1
  })
  console.log(obj1)
  console.log(obj2)
  
  let arr = Object.keys(obj1)
  const result = arr.map(item => { // array.map itself should be return. Here for loop should be used.
      console.log(item)
      if( !(obj2.hasOwnProperty(item)) ) {
          return false
      }
      if(obj1[item] !== obj2[item]) {
          return false
      }
  })

  console.log("result: ", result)
  if(result === false) return result 
  return true
}


console.log(sameFrequency(1823, 2814))