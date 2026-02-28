function findDifference(a: [number, number, number], b: [number, number, number]): number{
  const [a1, a2, a3] = a;
  const [b1, b2, b3] = b;
  return (a1 * a2 * a3) - (b1 * b2 * b3);
}