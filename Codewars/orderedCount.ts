function orderedCount(text: string): [string, number][] {
    const textArr = text.split("")
    const uniqueTxt = [...new Set(textArr)]
    return uniqueTxt.map((t) => {
        let count: number = 0
        textArr.forEach(v => {
            if(t === v){
                count++
            }
        })
        return [t,count]
    })
}

// console.log(orderedCount("12334566521"))
console.log(orderedCount("DANIELLA "))