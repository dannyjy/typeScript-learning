// Arrays in typeScript
const arr1: number[] = [1,2,3,4,5,6]
console.log(arr1)
// Multiple data types in TypeScript
const arr2: (string | number | boolean)[] = [1,"Hello",43,"yellow","King",255]
console.log(arr2)

const sumNumbers = (arr: number[]) : number => {
    if(arr.length === 1) return arr[0]!
    if(arr.length === 0) return 0
    return arr.reduce((acc,val) => acc + val)
}

console.log(sumNumbers([]))
console.log(sumNumbers([120]))
console.log(sumNumbers([120,0,2,4,5,6,70,]))