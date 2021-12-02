import { test, readInput } from "../utils/index"

const prepareInput = (rawInput: string) => rawInput

const input = prepareInput(readInput())

const directions: string[] = input.split(/\r?\n/).filter(n => n);
const goA = (input) => {
  let hor = 0;
  let dep = 0;

  directions.forEach(d => {
    const direction = d.substring(0, d.indexOf(' '));
    const value = Number(d.substring(d.indexOf(' '), d.length));
    switch(direction) {
      case 'forward':
        hor += value;
        break;
      case 'down':
        dep += value;
        break;
      case 'up':
        dep -= value;
        break;
    }
  });
  return hor * dep;
}

const goB = (input) => {
  let hor = 0;
  let dep = 0;
  let aim = 0;
  directions.forEach(d => {
    const direction = d.substring(0, d.indexOf(' '));
    const value = Number(d.substring(d.indexOf(' '), d.length));
    switch(direction) {
      case 'forward':
        hor += value;
        dep += (aim * value);
        break;
      case 'down':
        aim += value;
        break;
      case 'up':
        aim -= value;
        break;
    }
  });
  return hor * dep;
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
