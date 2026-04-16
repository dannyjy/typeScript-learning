function tidyNumber(num: number): boolean {
    return num.toString().split("").map((v,i,a) => {
        if(a.length - 1 === i) return;
        return v <= a[i + 1]! ? true : false
    }).filter(v => v !== undefined)
    .every(v => v === true)
}

console.log(tidyNumber(12345))
console.log(tidyNumber(5123))