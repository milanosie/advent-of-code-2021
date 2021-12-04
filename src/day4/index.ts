import { test, readInput } from "../utils/index"

const prepareInput = (rawInput: string) => rawInput

const input = prepareInput(readInput())

const goA = (input) => {
  const numbers: string[] = input.split(/\n\s*\n/).filter(n => n);
  const drawer = numbers[0].split(',').map(n => parseInt(n, 10));
  let drawnNumbers: number[] = [];
  let cartArray = [];
  const carts = numbers.filter((n, i) => i > 0);

  let bingoFound = -1;
  let winningNumber;

  const checkBingo = (cart, drawnNumbers: number[], cartIndex: number) => {
    // rows
    let i = 0;
    while(i <= 20) {
      if (drawnNumbers.find(d => d == cart[i]) && drawnNumbers.find(d => d == cart[i + 1]) && drawnNumbers.find(d => d == cart[i + 2]) && drawnNumbers.find(d => d == cart[i + 3]) && drawnNumbers.find(d => d == cart[i + 4])) {
        bingoFound = cartIndex;
        winningNumber = drawnNumbers[drawnNumbers.length - 1];
      }
      else if (drawnNumbers.find(d => d == cart[i]) && drawnNumbers.find(d => d == cart[i + 5]) && drawnNumbers.find(d => d == cart[i + 10]) && drawnNumbers.find(d => d == cart[i + 15]) && drawnNumbers.find(d => d == cart[i + 20])) {
        bingoFound = cartIndex;
        winningNumber = drawnNumbers[drawnNumbers.length - 1];
      }
      i = i + 5;
    }
  }
  carts.forEach(c => {
    c.split(/\r?\n/);
  });
  carts.forEach((cart, i) => {
    cartArray[i] = [];
    for (let a = 0; a < 73; a = a + 3) {
      cartArray[i].push(parseInt(cart[a] + cart[a + 1], 10));
    }
  });
  drawer.forEach(d => {
    if(bingoFound > -1) return;
    drawnNumbers.push(d);
    cartArray.forEach((c, cartIndex) => {
      if(bingoFound > -1) return;
      checkBingo(c, drawnNumbers, cartIndex);
    })
  });
  let sum = 0;
  cartArray[bingoFound].forEach(c => {
    console.log(c);
    if(!drawnNumbers.find(d => d === c)) {
      sum += c;
    }
  });
  return winningNumber * sum
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
