/*
    Implement a function 'processData' using function overloading. It should: 
    1. Accept a single string and return it reversed. 
    2. Accept an array of numbers and return their sum. 
    3. Accept a boolean and return its opposite. Ensure the implementation signature is hidden from the public API.
*/
    
function ProcessData(input: string): string;
function ProcessData(input: number[]): number;
function ProcessData(input: boolean): boolean;
function ProcessData(input: any) {
    if (typeof input === "string") {
        return input.split("").reverse().join("");
    } else if (Array.isArray(input)) {
        return input.reduce((sum, num) => sum + num, 0);
    } else if (typeof input === "boolean") {
        return !input;
    }
}

console.log(ProcessData("Hello"))
console.log(ProcessData(true))
console.log(ProcessData([1,2,3,4,5]))