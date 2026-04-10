function nearestSq(n : number) : number {
    let num = Math.sqrt(n).toFixed(4)
    let [digit, decimal] = num.split(".")
    let first = decimal?.split('').map(Number)[0]
    return first! > 4 ? Math.pow((Number(digit) + 1),2) : Math.pow(Number(digit),2)
}

console.log(nearestSq(111))
console.log(Math.round(Math.sqrt(111)) **2)