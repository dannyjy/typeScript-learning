const smallEnough = (a: number[], limit: number): boolean => a.every(n => n <= limit)

console.log(smallEnough([2,4,5,6],10))