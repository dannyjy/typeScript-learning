function merge<T extends object, U extends object> (obj: T,obj2: U): T & U{
    return {...obj,...obj2}
}

let user: {name: string,age: number} = {
    name: "John Doe",
    age: 43
}

let rescidence: {country: string, city: string} ={
    country: "Rwanda",
    city: "Kigali"
}

let merged = merge(user,rescidence)

const getProperty = <O extends object, K extends keyof O>(obj: O,key: K): O[K] => {
    return obj[key]
}

console.log(getProperty(merged, "name"))

type User = {
    id: (string | number)
    name: string,
}

const users: User[] = [
    {
        id: 34,
        name: "John"
    },{
        id: "34dgg234dff",
        name: "John"
    },{
        id: "dfrr2445",
        name: "John"
    },{
        id: 1455,
        name: "John"
    }
]

const testObj2 = [
    {
        id: 34,
        name: "John",
        country: "Rwanda"
    },{
        id: "34dgg234dff",
        name: "John",
        country: "Rwanda"
    },{
        id: "dfrr2445",
        name: "John",
        country: "Rwanda"
    }
]
type ObjWithId = {
    id: string | number
}

function getUserFromId<O extends ObjWithId,T extends string | number>(arr: O[],id: T){
    return arr.find((user) => user.id === id);
}

console.log(getUserFromId(users, "34dgg234dff"))
console.log(getUserFromId(testObj2, 34))