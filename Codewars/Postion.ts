function position(alphabet:string):string {
  const alphabetArray = "abcdefghijklmnopqrstuvwxyz".split("");
  return `Position of alphabet: ${alphabetArray.indexOf(alphabet) + 1}`;
}