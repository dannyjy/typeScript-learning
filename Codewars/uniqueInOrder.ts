function uniqueInOrder (iterable: string | (string | number)[]):(string | number)[] {
    const arr: (string | number)[] = []
    for(let i = 0; i < iterable.length; i++){
        if(iterable[i] !== iterable[i + 1]){
            arr.push(iterable[i]!)
        }
    }
	return [...iterable].filter((v,i,a) => v !== a[i+1])
};

console.log(uniqueInOrder('AAAABBBCCDAABBB'))
console.log(uniqueInOrder([1,2,2,3,3,2,2]))