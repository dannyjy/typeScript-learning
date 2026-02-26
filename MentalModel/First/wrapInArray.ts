function wrapInArray<T> (input: T): T[] {
    const array: T[] = []
    array.push(input)
    return array
}

const result = wrapInArray(42); // number[]
const result2 = wrapInArray("hello"); // string[]

console.log(result)
console.log(result2)