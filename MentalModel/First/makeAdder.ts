type adder = (b: number) => number

const makeAdder = (x:number): adder => {
  return (y) => x + y;
};

const add5 = makeAdder(5);
const result = add5(10); // should be number