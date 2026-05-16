// Area of a circle A = PI * (r*r)
const squareArea = (num: number): number => {
    const radius = (2 * num) / Math.PI;
    return Math.pow(radius, 2);
}

console.log(squareArea(3))