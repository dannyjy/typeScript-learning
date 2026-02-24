function checkExam(array1: string[], array2: string[]): number {
    let marks: number = 0;
    for(let i: number = 0; i < array1.length; i++){
        if(array1[i] === array2[i]){
            marks+=4
        }else if(array2[i] === ""){
            marks+=0
        }
        else{
            marks-=1
        }
    }
    return marks < 0 ? 0 : marks
}

console.log(checkExam(["a", "a", "b", "b"], ["a", "c", "b", "d"]))
console.log(checkExam(["a", "a", "c", "b"], ["a", "a", "b",  ""]))