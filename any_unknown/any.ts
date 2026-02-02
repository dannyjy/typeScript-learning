let data: any;

data = 10.343
console.log(data.toFixed())
console.log(typeof data)

data = [1,2,3,4,5,6,7,8,9]

let sum: number = data.reduce((a:number,b:number): number => a + b);

console.log(sum)

const User: any = {
    name: "John",
    age: 34,
    city: "Kigali"
}

console.log(User)