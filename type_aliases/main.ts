// Type aliases on fields or properties

type Name = string;

let firstName: Name = "Henry";
let lastName: Name;

// Unions 
type alphanumeric = string | number;

let input: alphanumeric;
input = 100; // valid
input = 'Hi'; // valid
// input = false; // Compiler error

// On intersections
type Personal = {
  name: string;
  age: number;
};

type Contact = {
  email: string;
  phone: string;
};

type Candidate = Personal & Contact;

let candidate: Candidate = {
  name: "Joe",
  age: 25,
  email: "joe@example.com",
  phone: "(408)-123-4567"
};

// On objects
type Car = {
    speed: number
    wells: number
    color: string
}

const toyotaPardo: Car = {
    speed: 120,
    wells: 4,
    color: "black"
}

console.log(toyotaPardo)


// Why type aliases are important
/*
    Even though they are all strings, the second version tells the 
    next developer exactly what kind of string is expected.
*/
// Without Aliases: What is what?
function updateAccount1(id: string, email: string, category: string) {}

// With Aliases: Self-documenting code
type UUID = string;
type Email = string;
type UserRole = "admin" | "editor" | "guest";

function updateAccount(id: UUID, email: Email, category: UserRole) {}

// Exercise
type AccountNumber = string;
type AccountBalance = number;
type AccountStatus = "active" | "frozen" | "closed"

type BankAccount = {
  accountNumber: AccountNumber;
  balance: AccountBalance;
  status: AccountStatus;
};

