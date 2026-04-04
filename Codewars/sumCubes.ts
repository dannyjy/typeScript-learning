function sumCubes(n: number): number {
    let sum: number = 0
    for (let i = 1; i <= n; i++) {
        sum += Math.pow(i,3)
    }
    return sum
}

console.log(sumCubes(2))