const correct = (s: string): string => {
    return s.split('').map((char) => {
        if(char === "5")return "S"
        if(char === "1") return "I"
        if(char === "0") return "O"
        return char
    }).join("")
}

console.log(correct("L0ND0N"))