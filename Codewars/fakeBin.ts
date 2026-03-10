const fakeBin = (x:string):string => {
  const strArr: string[] = x.split("");
  return strArr.map((num: string) => (parseInt(num) < 5) ?'0' :'1').join("")
};