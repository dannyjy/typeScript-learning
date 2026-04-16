const digitalRoot = (n:number):number => {
    const numArr = n.toString().split("").map(Number)
    let num = numArr.reduce((prev,cur) => prev + cur)
    if(n.toString().length === 1) {
        return num;
    }
    return digitalRoot(num)
};

console.log(digitalRoot(456))