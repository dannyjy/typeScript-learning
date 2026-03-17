const cubeChecker = (volume: number, side: number) => volume === 0 ? false : Math.cbrt(volume) === side

console.log(cubeChecker(27,3))