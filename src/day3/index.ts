import { test, readInput } from "../utils/index"

const prepareInput = (rawInput: string) => rawInput

const input = prepareInput(readInput())

const goA = (input) => {
  const numbers: string[] = input.split(/\r?\n/).filter(n => n);

  let gamma = '';
  let epsilon = '';
  for (let i = 0; i < numbers[0].length; i++) {
    let ones = 0;
    let zeroes = 0;
    numbers.forEach((v) => {
      v.substring(i, i+1) == '0' ? zeroes++ : ones++;
    });
    zeroes > ones ? gamma += '0' : gamma += '1';
    zeroes > ones ? epsilon += '1' : epsilon += '0';
  }
  console.log(gamma);
  console.log(epsilon);
  return parseInt(gamma, 2) * parseInt(epsilon, 2);
}

const goB = (input) => {
  return
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
