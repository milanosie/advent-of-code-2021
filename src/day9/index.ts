import { test, readInput } from "../utils/index"

const prepareInput = (rawInput: string) => rawInput

const input = prepareInput(readInput())

function findLowPoints(heightMap, lowPoints: [[number, number, number]]) {
  heightMap.forEach((height, index) => {
    const heightLine = height.split("").map(i => parseInt(i, 10))
    if (index == 0) { // first row
      heightLine.forEach((lineItem, lineIndex) => {
        if (lineIndex == 0) { // top left
          if (lineItem < height[lineIndex + 1] && lineItem < parseInt(heightMap[index + 1][lineIndex], 10)) {
            lowPoints.push([lineItem, index, lineIndex])
          }
        } else if (lineIndex == heightLine.length - 1) { // top right
          if (lineItem < height[lineIndex - 1] && lineItem < parseInt(heightMap[index + 1][lineIndex], 10)) {
            lowPoints.push([lineItem, index, lineIndex])
          }
        } else { // top row, middle items
          if (lineItem < height[lineIndex - 1] && lineItem < height[lineIndex + 1] && lineItem < parseInt(heightMap[index + 1][lineIndex], 10)) {
            lowPoints.push([lineItem, index, lineIndex])
          }
        }
      })
    } else if (index == heightMap.length - 1) { // last row
      heightLine.forEach((lineItem, lineIndex) => {
        if (lineIndex == 0) { // top left
          if (lineItem < height[lineIndex + 1] && lineItem < parseInt(heightMap[index - 1][lineIndex], 10)) {
            lowPoints.push([lineItem, index, lineIndex])
          }
        } else if (lineIndex == heightLine.length - 1) { // top right
          if (lineItem < height[lineIndex - 1] && lineItem < parseInt(heightMap[index - 1][lineIndex], 10)) {
            lowPoints.push([lineItem, index, lineIndex])
          }
        } else { // top row, middle items
          if (lineItem < height[lineIndex - 1] && lineItem < height[lineIndex + 1] && lineItem < parseInt(heightMap[index - 1][lineIndex], 10)) {
            lowPoints.push([lineItem, index, lineIndex])
          }
        }
      })
    } else { // middle rows
      heightLine.forEach((lineItem, lineIndex) => {
        if (lineIndex == 0) { // left
          if (lineItem < height[lineIndex + 1] && lineItem < parseInt(heightMap[index - 1][lineIndex], 10) && lineItem < parseInt(heightMap[index + 1][lineIndex], 10)) {
            lowPoints.push([lineItem, index, lineIndex])
          }
        } else if (lineIndex == heightLine.length - 1) { // right
          if (lineItem < height[lineIndex - 1] && lineItem < parseInt(heightMap[index - 1][lineIndex], 10) && lineItem < parseInt(heightMap[index + 1][lineIndex], 10)) {
            lowPoints.push([lineItem, index, lineIndex])
          }
        } else { // top row, middle items
          if (lineItem < height[lineIndex - 1] && lineItem < height[lineIndex + 1] && lineItem < parseInt(heightMap[index - 1][lineIndex], 10) && lineItem < parseInt(heightMap[index + 1][lineIndex], 10)) {
            lowPoints.push([lineItem, index, lineIndex])
          }
        }
      })
    }
  })
  return lowPoints;
}

// Returns the size of the basin
function findBasinSize(heightMap, x, y): number {
  const result = 0;
  const pointsVisited: Set<string> = new Set<string>()

  return result;
}


const goA = (input) => {
  let heightMap = input.split(/\r?\n/).filter(n => n)
  let lowPoints: [[number, number, number]] = [[-1, -1, -1]]
  lowPoints = findLowPoints(heightMap, lowPoints)
  lowPoints.splice(0, 1);
  let riskLevel = 0;
  lowPoints.forEach((lp) => {
    riskLevel += lp[0] + 1;
  })
  return riskLevel;
}

const goB = (input) => {
  let heightMap = input.split(/\r?\n/).filter(n => n)
  let lowPoints: [[number, number, number]] = [[-1, -1, -1]]
  lowPoints = findLowPoints(heightMap, lowPoints)
  lowPoints.splice(0, 1);
  const basins = [];
  lowPoints.forEach((lp) => {
    basins.push(findBasinSize(heightMap, lp[1], lp[2]));
  })
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
