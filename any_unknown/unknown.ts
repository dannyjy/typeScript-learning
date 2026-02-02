let data: unknown;
data = [1,2,3,4,5,6,7,8]

let answer: number[] =(data as number[]).map((val:number) => val * val);
console.log(answer)

let value: unknown = 45;

if(typeof value === "number"){
    let newValue: number = value + 2
    console.log(newValue)
}

let objType: unknown;
objType = [23,5,6,6,12,89]


let sum: number = (objType as number[]).reduce((acc: number,val: number) => acc + val)
console.log(sum)

if(Array.isArray(objType)){
    objType.forEach((val:number) => {
        console.log(val)
    })
}