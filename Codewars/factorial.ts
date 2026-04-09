function factorial(n: number) {
    if(n === 1 || n === 0) return 1
    let f = 1
    for(let i = n; i > 0; i--){
        f *= i
    }
    return f
}

console.log(factorial(4))