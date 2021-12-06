import { test, readInput } from "../utils/index"

const prepareInput = (rawInput: string) => rawInput

const input = prepareInput(readInput())

const goA = (input) => {
  const fishes: number[] = input.split(",").filter(n => n).map(n => parseInt(n, 10))
  for (let i = 0; i < 80; i++) {
    fishes.forEach((fish, i) => {
      fishes[i]--
      if (fishes[i] == -1) {
        fishes.push(8)
        fishes[i] = 6
      }
    })
  }
  return fishes.length
}

const goB = (input) => {
  const fishes: number[] = input.split(",").filter(n => n).map(n => parseInt(n, 10))

  let fishAges = [
    fishes.filter(f => f == 0).length,
    fishes.filter(f => f == 1).length,
    fishes.filter(f => f == 2).length,
    fishes.filter(f => f == 3).length,
    fishes.filter(f => f == 4).length,
    fishes.filter(f => f == 5).length,
    fishes.filter(f => f == 6).length,
    fishes.filter(f => f == 7).length,
    fishes.filter(f => f == 8).length];

  for(let i = 0; i <= 256; i++) {
    let newFish = 0;
    fishAges.forEach((fishAge, i) => {
      if(i == 0) {
        newFish = fishAges[i];
      }
      fishAges[i] = fishAges[i + 1];
      if(i == 6) {
        fishAges[i] += newFish;
      }
      if(i == 8) {
        fishAges[i] = newFish;
      }
    });
  }
  let sum = 0;
  for(let i = 0; i < 8; i++) {
    sum += fishAges[i];
  }
  return sum;
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
