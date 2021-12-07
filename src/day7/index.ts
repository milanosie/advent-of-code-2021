import { test, readInput } from "../utils/index"

const prepareInput = (rawInput: string) => rawInput

const input = prepareInput(readInput())

const median = (numbers) => {
  const sorted = numbers.slice().sort((a, b) => a - b)
  const middle = Math.floor(sorted.length / 2)
  if (sorted.length % 2 === 0) return (sorted[middle - 1] + sorted[middle]) / 2
  return sorted[middle]
}

const goA = (input) => {
  const fuelArray: number[] = input.split(",").filter(n => n).map(n => parseInt(n, 10))
  let sum = 0
  fuelArray.forEach((fuel) => {
    sum += Math.abs(median(fuelArray) - fuel)
  })
  return sum
}


const goB = (input) => {
  const fuelArray: number[] = input.split(",").filter(n => n).map(n => parseInt(n, 10))
  let average = Math.floor(fuelArray.reduce((prev, cur) => prev + cur) / fuelArray.length)
  let sum = 0
  fuelArray.forEach((fuel) => {
    for (let i = 1; i <= Math.abs(average - fuel); i++) {
      sum += i
    }
  })
  return sum
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
