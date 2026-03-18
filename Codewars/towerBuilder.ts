const towerBuilder= (nFloor: number): string[] => {
    const strArr: string[] = []
    for(let i = 0; i < nFloor; i++){
        let build: string = ''
        build += " ".repeat(nFloor - i - 1)
        build += "*".repeat(i * 2 + 1)
        build += " ".repeat(nFloor - i - 1)
        strArr.push(build)
    }
    return strArr;
}

console.log(towerBuilder(3))