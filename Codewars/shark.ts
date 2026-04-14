function shark(pontoonDistance: number, sharkDistance: number, youSpeed: number, sharkSpeed: number, dolphin: boolean): string {
    sharkSpeed = dolphin ? sharkSpeed / 2 : sharkSpeed
    return (sharkDistance / sharkSpeed) > (pontoonDistance / youSpeed) ? "Shark Bait" : "Alive"
}

console.log(shark(12, 50, 4, 8, true))