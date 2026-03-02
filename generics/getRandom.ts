// Create a generic function that takes an array and returns a random value from the array.

const getRandomValue = <T>(value: T[]):T | undefined => {
    const randomIndex: number = Math.floor(Math.random() * value.length);
    return value[randomIndex]
}

console.log(getRandomValue(["John","Jane","James","Don"]))
console.log(getRandomValue([23,45,76,99]))
console.log(getRandomValue([]))