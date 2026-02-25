function dutyFree(normPrice: number, discount: number, hol: number): number{
  return Math.floor(hol / (normPrice * discount / 100));
}

console.log(dutyFree(12,50,1000))