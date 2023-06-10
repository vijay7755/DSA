function linearSearch(arr, value){
    
    let result;

    arr.forEach((e, index) => {
      if(e === value) {
          result = index
          return result
      }
  })

  return (result||result===0) ? result : -1
  
}

console.log(linearSearch([100], 100))