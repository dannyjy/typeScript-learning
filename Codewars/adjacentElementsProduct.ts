function adjacentElementsProduct(arr: number[]): number {
  let maxProduct: number = arr[0]! * arr[1]!;
  for (let i = 1; i < arr.length - 1; i++) {
    const product: number = arr[i]! * arr[i + 1]!;
    if (product > maxProduct) {
      maxProduct = product;
    }
  }
  return maxProduct;
}