/*
    Create an overloaded function 'format' that: 
    1. Takes a Date object and returns a string. 
    2. Takes a timestamp (number) and returns a string. 
    3. Takes a string date and returns a string. 
    Use a unified internal logic to transform all inputs to a standard 'YYYY-MM-DD' format.
*/

function format(date: Date): string;
function format(timestamp: number): string
function format(date: string): string
function format(input: any): string {
     const date = new Date(input);

    // Basic validation to ensure the input resulted in a valid date
    if (isNaN(date.getTime())) {
        throw new Error("Invalid date input provided.");
    }

    // 2. Transform to 'YYYY-MM-DD'
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');

    return `${year}-${month}-${day}`;
}

console.log(format(new Date()));
console.log(format(1700000000000));
console.log(format("2024-01-01"));