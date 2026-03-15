function basicOp(operation: string, value1: number, value2: number): number {
    let answer: number = 0;
    switch(operation){
        case '+':
            answer = value1 + value2
        break
        case '-':
            answer = value1 - value2
        break
        case '/':
            answer = value1 / value2
        break
        case '*':
            answer = value1 * value2
        break
        default:
            answer = value1 + value2
        break
    }
    return answer;
}

console.log(basicOp("+",3,5))