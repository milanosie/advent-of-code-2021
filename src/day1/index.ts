import { test, readInput } from "../utils/index"

const prepareInput = (rawInput: string) => rawInput

const input = prepareInput(readInput())

const goA = (input) => {
  const numbers: number[] = input.split(/\r?\n/).filter(n => n).map(n => parseInt(n, 10));
  let count = 0;
  numbers.reduce((p, c) => {
    if(c > p) {
     count++;
    }
    return c;
  });
  return count;


}

const goB = (input) => {
  const numbers: number[] = input.split(/\r?\n/).filter(n => n).map(n => parseInt(n, 10));
  let count = 0;

  let previousWindow = 1000000;
  numbers.forEach((n, i) => {
    let window = n + numbers[i + 1] + numbers[i + 2];
    if(window > previousWindow) {
      count++;
    }
    previousWindow = window;
  })
  return count;
}

/* Tests */

// test()

/* Results */

console.time("Time")
const resultA = goA(input)
const resultB = goB(input)
console.timeEnd("Time")

console.log("Solution to part 1:", resultA)
console.log("Solution to part 2:", resultB)
