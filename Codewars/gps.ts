const gps = (s:number, xs:number[]):number => {
  const newXs = xs.map((v,i,arr) => arr[i + 1]! - v).filter(Number).map(v => {
    let speed = (3600 * v)/s
    return Math.floor(speed)
  })

  return Math.max(...newXs)
}


console.log(gps(15,[0.0, 0.19, 0.5, 0.75, 1.0, 1.25, 1.5, 1.75, 2.0, 2.25]))