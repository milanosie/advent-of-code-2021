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
  return parseInt(gamma, 2) * parseInt(epsilon, 2);
}

const goB = (input) => {
  let numbers: string[] = input.split(/\r?\n/).filter(n => n);
  let oxygen = '';
  let co2 = '';

  for (let i = 0; i < numbers[0].length; i++) {
    numbers = filterNumbers(numbers, i, false);
    if(numbers.length === 1) {
      oxygen = numbers[0];
    }
  }
  numbers = input.split(/\r?\n/).filter(n => n);
  for (let i = 0; i < numbers[0].length; i++) {
    numbers = filterNumbers(numbers, i, true);
    if(numbers.length === 1) {
      co2 = numbers[0];
    }
  }
  return parseInt(oxygen, 2) * parseInt(co2, 2);
}

function filterNumbers(numbers: string[], i: number, one: boolean) {
  if(numbers.length > 1) {
    let ones = 0;
    let zeroes = 0;
    numbers.forEach((v) => {
      v.substring(i, i+1) == '0' ? zeroes++ : ones++;
    });
    zeroes > ones ? numbers = numbers.filter(n => n.substring(i, i + 1) === (one ? '1' : '0')) : numbers = numbers.filter(n => n.substring(i, i + 1) === (one ? '0' : '1'));
  }
  return numbers;
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
