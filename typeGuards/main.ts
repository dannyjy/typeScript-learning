// The main type guard function that checks if a value is a string
function isString(value: any): value is string {
    return typeof value === 'string';
}

// Example usage of the type guard function
const value1: any = "Hello, World!";
const value2: any = 42;
if (isString(value1)) {
    console.log(`Value1 is a string: ${value1}`);
} else {    console.log(`Value1 is not a string: ${value1}`);
}

if (isString(value2)) {
    console.log(`Value2 is a string: ${value2}`);
}

// Using the instanceof operator as a type guard
class Animal {
    makeSound() {
        console.log("Some sound");
    }
}

class Dog extends Animal {
    makeSound() {
        console.log("Woof!");
    }   
}

function isDog(animal: Animal): animal is Dog {
    return animal instanceof Dog;
}

const myAnimal: Animal = new Dog();
if (isDog(myAnimal)) {
    myAnimal.makeSound(); // This will call the Dog's makeSound method
}