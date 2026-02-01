/*
To create a variable you will have to use the type annotation syntax which makes it much simple to understand
and assign types to a variable.
    let variableName: type;
    let variableName: type = value;
    const constantName: type = value;

    Data Type
    Primitive Data Type(string, number, boolean, null, undefined, any).
    Non-Primitive Data Types include (Class,array,function)
*/

const firstName: string = "Hello";
let test: number = 32;
let running: boolean = false;
console.log(running)
console.log(test)

const names: number[] = [1,2,3,4,5,6,7,8,9,10];
const t: any[] = ['Danny','John',23,true];
console.log(names)
console.log(t)

let username = "John Doe";
let binary: number = 0b011;
let hexa: number = 0xA1
let oct: number = 0xA
console.log(binary)
console.log(hexa)