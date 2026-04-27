function switcheroo(x: string): string {
    return x.split("").map((v) => {
        if(v === "a") return "b"
        if(v === "b") return "a"
        return v
    }).join("")
}

console.log(switcheroo("abrrba"))