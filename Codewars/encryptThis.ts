const encryptThis = (str: string): string => {
    return str.split(" ").map((s) => {
        const first = s.charCodeAt(0).toString();
        const rest = s.split("").slice(1);
        return first + rest.map((c,i) => {
            if(i === 0) return rest[rest.length - 1]
            if(i === rest.length - 1) return rest[0]
            return c
        }).join("")
    }).join(" ")
}

console.log(encryptThis("Hello"))
console.log(encryptThis("A wise old owl lived in an oak"))
console.log(encryptThis("The more he saw the less he spoke")) // 84eh 109ero 104e 115wa 116eh 108sse 104e 115eokp