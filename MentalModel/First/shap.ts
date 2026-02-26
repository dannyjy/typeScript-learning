type Rectangle = {
    kind: "rectangle"
    width: number
    height: number
}

type Circle = {
    kind: "circle"
    radius: number
}

type Shape = Rectangle | Circle

function getArea(shape: Shape): number {
  if(shape.kind === "circle"){
    return (Math.PI * Math.pow(shape.radius,2))
  }else if(shape.kind === "rectangle"){
    return (shape.height * shape.width)
  }else{
    return -1
  }
}

console.log(getArea({ kind: 'circle', radius: 10 }))
console.log(getArea({ kind: 'rectangle', width: 4, height: 5 }))