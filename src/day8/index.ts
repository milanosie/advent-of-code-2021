import { test, readInput } from "../utils/index"

const prepareInput = (rawInput: string) => rawInput

const input = prepareInput(readInput())

const searchOutput = (output: string) => {
  // 1
  let a = 0;
  let b = 0;
  let c = 0;
  let d = 0;
  let e = 0;
  let f = 0;
  let g = 0;

  a = output.match(/a/g)?.length > 0 ? 1 : 0;
  b = output.match(/b/g)?.length > 0 ? 1 : 0;
  c = output.match(/c/g)?.length > 0 ? 1 : 0;
  d = output.match(/d/g)?.length > 0 ? 1 : 0;
  e = output.match(/e/g)?.length > 0 ? 1 : 0;
  f = output.match(/f/g)?.length > 0 ? 1 : 0;
  g = output.match(/g/g)?.length > 0 ? 1 : 0;

  const sum  = a + b + c + d + e +f +g;
  if(sum == 2 || sum == 4 || sum == 3 || sum == 7) return 1;
  return 0;
}

const goA = (input) => {
  let segments = input.split(/\r?\n/).filter(n => n);
  let count = 0;
  segments.forEach((segment) => {
    segment = segment.split('|');
    const segmentItems = segment[1].split(' ');
    segmentItems.forEach((se) => {
      count += searchOutput(se);
    })
  });
  return count;
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
