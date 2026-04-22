function multiTable(number:number):string {
    return Array.from({length: 10}, (_,i) => `${i+1} * ${number} = ${(i + 1) * number}`).join("\n")
}

console.log(multiTable(5))