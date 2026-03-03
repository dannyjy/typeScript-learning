function printArray(array:Number[]){
  if(!Array.isArray(array)){
    return "Expected function to return a value"
  }
  return array.join(",")
}