// turn vowels into numbers
function encode(str: string): string {
    'aeiou'.split("").forEach((v,i) => {
        str = str.split("").map((char) => (char === v) ? (i+1) : char).join("")
    })
    return str;
}

// turn numbers back into vowels
function decode(str: string): string {
    'aeiou'.split("").forEach((v,i) => {
        str = str.split("").map((char) => (char === (i + 1).toString()) ? v : char).join("")
    })
    return str;
}

console.log(encode('hello'))
console.log(decode('h2ll4'))