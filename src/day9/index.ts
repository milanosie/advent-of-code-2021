import { test, readInput } from "../utils/index"

const prepareInput = (rawInput: string) => rawInput

const input = prepareInput(readInput())

const goA = (input) => {
  let heightMap = input.split(/\r?\n/).filter(n => n)
  let lowPoints: Array<number> = []

  heightMap.forEach((height, index) => {
    const heightLine = height.split("").map(i => parseInt(i, 10))
    if (index == 0) { // first row
      heightLine.forEach((lineItem, lineIndex) => {
        if (lineIndex == 0) { // top left
          if (lineItem < height[lineIndex + 1] && lineItem < parseInt(heightMap[index + 1][lineIndex], 10)) {
            lowPoints.push(lineItem)
          }
        } else if (lineIndex == heightLine.length - 1) { // top right
          if (lineItem < height[lineIndex - 1] && lineItem < parseInt(heightMap[index + 1][lineIndex], 10)) {
            lowPoints.push(lineItem)
          }
        }
        else { // top row, middle items
          if (lineItem < height[lineIndex - 1] && lineItem < height[lineIndex + 1] && lineItem < parseInt(heightMap[index + 1][lineIndex], 10)) {
            lowPoints.push(lineItem)
          }
        }
      })
    } else if (index == heightMap.length - 1) { // last row
      heightLine.forEach((lineItem, lineIndex) => {
        if (lineIndex == 0) { // top left
          if (lineItem < height[lineIndex + 1] && lineItem < parseInt(heightMap[index - 1][lineIndex], 10)) {
            lowPoints.push(lineItem)
          }
        } else if (lineIndex == heightLine.length - 1) { // top right
          if (lineItem < height[lineIndex - 1] && lineItem < parseInt(heightMap[index - 1][lineIndex], 10)) {
            lowPoints.push(lineItem)
          }
        }
        else { // top row, middle items
          if (lineItem < height[lineIndex - 1] && lineItem < height[lineIndex + 1] && lineItem < parseInt(heightMap[index - 1][lineIndex], 10)) {
            lowPoints.push(lineItem)
          }
        }
      })
    } else { // middle rows
      heightLine.forEach((lineItem, lineIndex) => {
        if (lineIndex == 0) { // left
          if (lineItem < height[lineIndex + 1] && lineItem < parseInt(heightMap[index - 1][lineIndex], 10) && lineItem < parseInt(heightMap[index + 1][lineIndex], 10)) {
            lowPoints.push(lineItem)
          }
        } else if (lineIndex == heightLine.length - 1) { // right
          if (lineItem < height[lineIndex - 1] && lineItem < parseInt(heightMap[index - 1][lineIndex], 10) && lineItem < parseInt(heightMap[index + 1][lineIndex], 10)) {
            lowPoints.push(lineItem)
          }
        }
        else { // top row, middle items
          if (lineItem < height[lineIndex - 1] && lineItem < height[lineIndex + 1] && lineItem < parseInt(heightMap[index - 1][lineIndex], 10) && lineItem < parseInt(heightMap[index + 1][lineIndex], 10)) {
            lowPoints.push(lineItem)
          }
        }
      })
    }

  })
  let riskLevel = 0;
  lowPoints.forEach((lp) => {
    riskLevel += lp + 1;
  })
  return riskLevel;
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
