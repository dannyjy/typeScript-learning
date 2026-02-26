interface Person {
    name: string
    age?: number
}

function describePerson(person: Person): string {
  const agePart = person.age ? ` who is ${person.age} years old` : '';
  return `${person.name}${agePart}`;
}

const user2 = { id: 1, name: "alice" };

console.log(describePerson(user2))