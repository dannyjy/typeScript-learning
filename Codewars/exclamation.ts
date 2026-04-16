function remove(s: string): string {
    return s.replaceAll("!","").concat("!")
}

console.log(remove("!Hi !Hi"))