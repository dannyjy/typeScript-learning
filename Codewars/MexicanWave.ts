function wave(str: string): Array<string>{
  return str.split('').map((char,i,arr) => {
    if(char === ' ') return null
    let copy = [...arr]
    copy[i] = copy[i]!.toUpperCase()
    return copy.join("")
  }).filter(item => item !== null)
}

console.log(wave("hello"))