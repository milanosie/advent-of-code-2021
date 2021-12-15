import { test, readInput } from "../utils/index"

const prepareInput = (rawInput: string) => rawInput

const input = prepareInput(readInput()).split(/\r?\n/).filter(n => n)

function getSyntaxScore(input): number {
  let chars = []
  let score = 0
  const inputArray = input.split("")
  inputArray.forEach((item) => {
    if (score == 0) {
      switch (item) {
        case "(":
          chars.push(item)
          break
        case "[":
          chars.push(item)
          break
        case "{":
          chars.push(item)
          break
        case "<":
          chars.push(item)
          break
        case ")":
          if (chars[chars.length - 1] != "(") {
            score = 3
          } else {
            chars.splice(chars.length - 1, 1)
          }
          break
        case "]":
          if (chars[chars.length - 1] != "[") score = 57
          else {
            chars.splice(chars.length - 1, 1)
          }
          break
        case "}":
          if (chars[chars.length - 1] != "{") score = 1197
          else {
            chars.splice(chars.length - 1, 1)
          }
          break
        case ">":
          if (chars[chars.length - 1] != "<") score = 25137
          else {
            chars.splice(chars.length - 1, 1)
          }
          break
      }
    }
  })
  return score
}

const goA = (input) => {
  let score = 0
  input.forEach(i => score += getSyntaxScore(i))
  return score
}

function completeLine(input): number {
  let chars = []
  let score = 0
  const inputArray = input.split("")
  inputArray.forEach((item) => {
    switch (item) {
      case "(":
        chars.push(item)
        break
      case "[":
        chars.push(item)
        break
      case "{":
        chars.push(item)
        break
      case "<":
        chars.push(item)
        break
      case ")":
        chars.splice(chars.length - 1, 1)
        break
      case "]":
        chars.splice(chars.length - 1, 1)
        break
      case "}":
        chars.splice(chars.length - 1, 1)
        break
      case ">":
        chars.splice(chars.length - 1, 1)
        break
    }
  })

  chars.reverse();
  chars.forEach((c) => {
    switch (c) {
      case "(":
        score = score * 5 + 1
        break
      case "[":
        score = score * 5 + 2
        break
      case "{":
        score = score * 5 + 3
        break
      case "<":
        score = score * 5 + 4
        break
    }
  })
  return score
}

const goB = (input) => {
  let scores = []
  input = input.filter(i => getSyntaxScore(i) == 0)
  input.forEach(i => scores.push(completeLine(i)))
  scores.sort((a, b) => a - b)
  return scores[scores.length / 2 - 0.5];
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
