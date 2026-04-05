function solve(arr: string[]) : Number[] {
    const alphabets = "abcdefghijklmnopqrstuvwxyz".split("")
    let nums: number[] = []
    nums = arr.map((s:string) => {
        let counter: number = 0;
        s.toLowerCase().split("").forEach((char,i) => {
            const index = alphabets.indexOf(char);
            if (index === i) {
                counter++
            }
        })
        return counter
    }) as number[]
    return nums;
}

console.log(solve(["abc",'db']))