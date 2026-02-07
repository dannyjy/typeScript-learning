interface Boat{
    speed: number
}

interface Car{
    speed: number
}

const getFromCar = (obj:Car) => {
    console.log(obj.speed)
}

let obj: Boat = {
    speed: 123
}

getFromCar(obj)


interface Person {
  readonly ssn: string;
  firstName: string;
  lastName: string;
}

let person: Person;
person = {
  ssn: '171-28-0926',
  firstName: 'John',
  lastName: 'Doe',
};

// Function Interfaces
interface StringFormat {
    (str: string, isUpper: boolean): string
}

let format: StringFormat;

format = function (str: string, isUpper: boolean) {
    return isUpper ? str.toLocaleUpperCase() : str.toLocaleLowerCase();
};

console.log(format('hi', true));