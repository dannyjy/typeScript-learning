function quarterOf(month: number): number {
  return Math.ceil(month / 3);
}

console.log(quarterOf(11))

// console.log(12 * (1 / 4))