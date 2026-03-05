const powersOfTwo = (n:number):number[] => {
    const answer: number[] = [];
    for(let i: number = 0; i <= n; i++){
        answer.push(Math.pow(2,i))
    }
    return answer;
}

console.log(powersOfTwo(0))