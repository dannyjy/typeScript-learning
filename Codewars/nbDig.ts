class G964 {
    public static nbDig(n: number, d: number): number {
        let count: number = 0
        for (let i = 0; i <= n; i++) {
            const square: number = i * i
            const digits: string = square.toString()
            for (const digit of digits) {
                if (parseInt(digit) === d) {
                    count++
                }
            }
        }
        return count
    }
}

let num: number = G964.nbDig(5750, 0) // 4700
console.log(num)