function betterThanAverage(classPoints: number[], yourPoints: number) : boolean {
  const average = classPoints.reduce((sum, point) => sum + point, 0) / classPoints.length;
  return yourPoints > average;
}

console.log(betterThanAverage([2, 3], 5))