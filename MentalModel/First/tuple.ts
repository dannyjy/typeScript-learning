function greet([firstName, lastName]: [string,string]) {
  return `Hello, ${firstName} ${lastName}`;
}


console.log(greet(["Jane","Doe"]))