import { test, readInput } from "../utils/index"

const prepareInput = (rawInput: string) => rawInput

const input = prepareInput(readInput())

const goA = (input) => {
  const numbers: number[] = input.split(/\r?\n/).filter(n => n).map(n => parseInt(n, 10));
  let count = 0;
  numbers.reduce((p, c) => {
    c > p ? count++ : 0;
    return c;
  });
  return count;
}

const goB = (input) => {
  const numbers: number[] = input.split(/\r?\n/).filter(n => n).map(n => parseInt(n, 10));
  let count = 0;
  numbers.reduce((p, c, i) => {
    numbers[i] + numbers[i + 1] + numbers[i + 2] > p ? count++ : 0;
    return numbers[i] + numbers[i + 1] + numbers[i + 2];
  });
  return count;
}


/* Results */

console.time("Time")
const resultA = goA(input)
const resultB = goB(input)
console.timeEnd("Time")

console.log("Solution to part 1:", resultA)
console.log("Solution to part 2:", resultB)
