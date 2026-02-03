// To define multiple methods is typescript, We use method overloading
// define the structure of the method then create another method with the same name
// that performs type checking on the data types of the paramters and the return type

function add(a: number, b: number): number;
function add(a: string, b: string): string;

function add(a: number | string, b: number | string): number | string {
    if (typeof a === 'number' && typeof b === 'number') {
        return a + b;
    } else if (typeof a === 'string' && typeof b === 'string') {
        return a + b;
    }
    throw new Error('Invalid arguments');
}

function sum(a: number, b: number): number;
function sum(a: number, b: number, c: number): number;

function sum(a: number, b: number, c?: number): number {
    if (c) return a + b + c;
    return a + b;
}

