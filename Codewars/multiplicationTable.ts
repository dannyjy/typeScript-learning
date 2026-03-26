function multiplicationTable (size: number): number[][] {
  const arr: number[] = Array(size).fill(0);
  return arr.map((_, i) => arr.map((_, j) => (i + 1) * (j + 1)));
}