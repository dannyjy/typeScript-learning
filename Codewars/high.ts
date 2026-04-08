const high = (str: string): string => {
    const strArr = str.toLowerCase().split(" ");
    const scoredWords = strArr.map((word) => {
        let score: number =  word.split("").map((char,i) => {
            return word.charCodeAt(i) - 96;
        }).reduce((acc,val) => acc + val)
        return [word, score]
    })
    
    return scoredWords.reduce((prev,current) => (current[1]! > prev[1]!) ? current : prev)[0] as string
}

console.log(high("man has food to chop"))