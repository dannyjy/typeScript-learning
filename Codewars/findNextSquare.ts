function findNextSquare(sq:number):number {
    const num: number = Math.sqrt(sq);
    return  Math.floor(num) !== num ? -1 : Math.pow((num + 1),2)
}

console.log(findNextSquare(114))
console.log(Math.pow(Math.sqrt(144) + 1,2))