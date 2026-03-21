function capitals (word: string): number[] {
	const arr: number[] = []
    word.split("").forEach((char: string,i: number) => {
        if(char === char.toUpperCase()){
            arr.push(i)
        }
    })
    return arr.sort((a,b) => a - b);
}

console.log(capitals("CodEWaRs"))