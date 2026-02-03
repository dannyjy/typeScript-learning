// functions in typescript specify the return type and there parameter and if you don't specify the return type
// it is set to void which means it returns nothing.
function println(){
}

type ID = number

type User = {
    id: ID
    name: string
    age: number
    country: string
}
const user1: User = {
    id: 1,
    name: "Jane",
    age: 29,
    country: "Uganda"
}
const user2: User = {
    id: 2,
    name: "John",
    age: 35,
    country: "Kenya"
}

const array: Array<User> = [
    user1,
    user2
]

function add(a: ID,b: number): number{
    return a + b;
}
console.log(add(2,4))

function getUser(id:number,usersArray: Array<User>): User{
    return usersArray.find((user: User) => user.id === id) as User
}

console.log(getUser(1,array))


// The rest parameter in C#
function restParameter(...rest: number[]): number[]{
    return rest.map((val: number) => val * 2)
}

const arr: number[] = [1,2,3,4,5]

// console.log(restParameter(2,3,4,5,6,7,8))
// console.log(restParameter(...arr))

// You can use the type aliases to define a callback or properties on the function or a method.
type MathOp = (firstNumber:number,secondNumber:number) => number;

function calculate(a: number, b: number,callback:MathOp){
    return callback(a,b)
}