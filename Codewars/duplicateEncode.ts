function duplicateEncode(word: string){
    const strArr = [...word.toLowerCase()]
    return strArr.map((char) => {
        let count: number = 0;
        for(let i: number = 0; i < strArr.length; i++){
            if(char === strArr[i]) {
                count++
            }
        }
        return (count > 1) ? ')' : '('
    }).join('')
}

console.log(duplicateEncode("dini"))