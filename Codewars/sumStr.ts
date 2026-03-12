function sumStr(a: string, b: string): string {
  const numA = Number(a) || 0;
  const numB = Number(b) || 0;

  return (numA+ numB).toString();
}

console.log(sumStr('',''))