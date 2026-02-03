// object with the small 'o'
// It can hold any reference type but not primitive types
const Users: object = {
    name: "John",
    age: 23
}

const getName: object = () => {
    console.log("Hello, John")
} 

const namesArr: object = ["John","Jane","Doe"]
console.log(typeof Users)
console.log(getName)
console.log(namesArr)

// The Obeject with a capital 'O'
const User: Object = {
    name: "John",
    age: 23
}

const country: Object = "Rwanda";
const independanceYear: Object = 1962;
const taskArray: Object = [23,5,"Hello"]

console.log(country)
console.log(taskArray)
console.log(independanceYear)
console.log(typeof User)

// The unknown data Type
let username: unknown;
console.log(typeof username)

username = "John"
username = 98
console.log(typeof username)

let data: unknown;

data = [
    {
        name: "John",
        age: 35,
    },{
        name: "Jane",
        age: 18,
    }
]
console.log(typeof data)
if(Array.isArray(data)){
    data.forEach((d) => {
        console.log(d)
    })
}