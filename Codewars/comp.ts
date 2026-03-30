function comp(a1: number[] | null, a2: number[] | null): boolean {
    if(a1 === null || a2 === null) return false
    let arr1 = a1?.map(v=> v*v);
    let ans: boolean[] = a2!.map(v2 => {
        if(arr1?.includes(v2)){
            arr1?.splice(arr1.indexOf(v2), 1)
            return true
        }
        return false
    })
    return ans.includes(false) ? false : true
}

console.log(comp([2,2,3],[4,9,9]))