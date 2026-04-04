function partlist(arr: string[]): string[][] {
    return arr.map((v,i,a) => {
        const newArr = [...a]
        let value = arr.slice(0,i + 1)
        value.forEach(_ => {
            newArr.shift()
        });
        return [value.join(" "),newArr.join(" ")]
    }).splice(0,arr.length - 1) as string[][]
}

console.log(partlist(["az", "toto", "picaro", "zone", "kiwi"]))