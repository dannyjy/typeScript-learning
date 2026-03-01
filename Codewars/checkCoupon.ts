function checkCoupon(enteredCode: string, correctCode: string, currentDate: string, expirationDate: string): boolean {
  return enteredCode === correctCode && new Date(currentDate) <= new Date(expirationDate);
}

console.log(checkCoupon('123', '123', 'September 5, 2014', 'October 1, 2014'))