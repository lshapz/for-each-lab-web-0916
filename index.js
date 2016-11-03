function iterativeLog(array){
  array.forEach(element=> {
    console.log(`${array.indexOf(element)}: ${element}`)

  })

}

function iterate(callback){
  const array = [1, 2, 3, 4]
  array.forEach(callback)
  return array
}
function doToArray(array, callback){
  array.forEach(callback)
  return array
}