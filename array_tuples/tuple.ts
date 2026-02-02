// Tuple
const tuple: [string,number] = ["Hello",34]
console.log(typeof tuple)

const rgb: [number,number,number] = [234,12,566]
console.log(rgb)

const getRGBA = (rgba: [number,number,number,number?]) : string => {
    return `rgba(${rgba.toString()})`
}

console.log(getRGBA([255,0,0]))