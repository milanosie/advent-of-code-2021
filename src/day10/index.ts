import { test, readInput } from "../utils/index"

const prepareInput = (rawInput: string) => rawInput

const input = prepareInput(readInput()).split(/\r?\n/).filter(n => n);

function getSyntaxScore(input): number {
  let chars = [];
  let score = 0;
  const inputArray = input.split('');
  inputArray.forEach((item) => {
    if(score == 0) {
      switch (item) {
        case '(':
          chars.push(item);
          break;
        case '[':
          chars.push(item);
          break;
        case '{':
          chars.push(item);
          break;
        case '<':
          chars.push(item);
          break;
        case ')':
          if(chars[chars.length - 1] != '(') {
            score = 3;
          }
          else {
            chars.splice(chars.length - 1, 1);
          }
            break;
        case ']':
          if(chars[chars.length - 1] != '[') score = 57;
          else {
            chars.splice(chars.length - 1, 1);
          }
          break;
        case '}':
          if(chars[chars.length - 1] != '{') score = 1197;
          else {
            chars.splice(chars.length - 1, 1);
          }
          break;
        case '>':
          if(chars[chars.length - 1] != '<') score = 25137;
          else {
            chars.splice(chars.length - 1, 1);
          }
          break;
      }
    }
  });
  return score
}

const goA = (input) => {
  let score = 0;
  input.forEach(i => score += getSyntaxScore(i));
  return score;
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
