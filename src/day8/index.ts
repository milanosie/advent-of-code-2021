import { test, readInput } from "../utils/index"

const prepareInput = (rawInput: string) => rawInput

const input = prepareInput(readInput())

const searchOutput = (output: string) => {
  let a = output.match(/a/g)?.length > 0 ? 1 : 0
  let b = output.match(/b/g)?.length > 0 ? 1 : 0
  let c = output.match(/c/g)?.length > 0 ? 1 : 0
  let d = output.match(/d/g)?.length > 0 ? 1 : 0
  let e = output.match(/e/g)?.length > 0 ? 1 : 0
  let f = output.match(/f/g)?.length > 0 ? 1 : 0
  let g = output.match(/g/g)?.length > 0 ? 1 : 0

  const sum = a + b + c + d + e + f + g
  if (sum == 2 || sum == 4 || sum == 3 || sum == 7) return 1
  return 0
}

const goA = (input) => {
  let segments = input.split(/\r?\n/).filter(n => n)
  let count = 0
  segments.forEach((segment) => {
    segment = segment.split("|")
    const segmentItems = segment[1].split(" ")
    segmentItems.forEach((se) => {
      count += searchOutput(se)
    })
  })
  return count
}

function findUniqueBetweenTwo(string1, string2) {
  let unique: Array<string> = new Array<string>();
  for(let i = 0; i < string1.length; i++) {
    if(string2.indexOf(string1[i]) == -1) {
      unique.push(string1[i]);
    }
  }
  return unique;
}

function getUniquePatterns(segmentElement): string[] {
  const elements = segmentElement.split(" ")
  elements.sort(function(a, b) {
    return a.length - b.length
  })
  const patterns = []
  let L: Array<string>;
  elements.forEach((element) => {
    switch (element.length) {
      case 2:
        patterns[1] = element
        break
      case 3:
        patterns[7] = element
        break
      case 4:
        patterns[4] = element
        L = findUniqueBetweenTwo(patterns[4], patterns[1]);
        break
      case 7:
        patterns[8] = element
        break
      case 5:
        if (element.indexOf(patterns[1][0]) != -1 && element.indexOf(patterns[1][1]) != -1) {
          patterns[3] = element
          break
        }
        if (element.indexOf(L[0]) != -1 && element.indexOf(L[1]) != -1) {
          patterns[5] = element
          break
        }
        patterns[2] = element
        break
      case 6:
        if (element.indexOf(patterns[4][0]) != -1 && element.indexOf(patterns[4][1]) != -1
          && element.indexOf(patterns[4][2]) != -1 && element.indexOf(patterns[4][3]) != -1) {
          patterns[9] = element
          break
        }
        if (element.indexOf(L[0]) != -1 && element.indexOf(L[1]) != -1) {
          patterns[6] = element
          break
        }
        patterns[0] = element
        break
    }
  })
  return patterns
}

const goB = (input) => {
  let segments = input.split(/\r?\n/).filter(n => n)
  let count = 0
  segments.forEach((segment) => {
    let segmentCount = ""
    segment = segment.split("|")
    const uniquePatterns = getUniquePatterns(segment[0])
    const outputArray = segment[1].split(" ").filter(n => n)
    outputArray.forEach((output) => {
      uniquePatterns.forEach((uniquePattern, index) => {
        if (uniquePattern.length !== output.length) return
        let found = 0
        for (let i = 0; i <= output.length; i++) {
          if (output.indexOf(uniquePattern[i]) != -1) {
            found++
          }
        }
        if (found == output.length) {
          segmentCount += index
        }
      })
    })
    count += parseInt(segmentCount, 10)
  })
  return count
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
