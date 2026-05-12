function race(v1 : number, v2 : number, g : number) : [number, number, number] | null {
    const gap: number = v2 - v1;
    const time = (g/gap) * 3600
    const hour = Math.floor(time / 3600)
    const min = Math.floor(time % 3600 / 60)
    const sec = Math.floor(time % 60);

    return [hour,min,sec];
}

console.log(race(80, 91, 37))
console.log(race(80, 100, 40))