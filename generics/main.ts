function addOne<T> (arr: T): T {
    return arr;
}

const arr: number[] = [1,2,3,4,5,6]
const strArr: string[] = ["John","Jane","Joshua"]

console.log(addOne<number>(234))
console.log(addOne("John"))