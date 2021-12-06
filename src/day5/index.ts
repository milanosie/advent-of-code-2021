import { readInput } from "../utils/index"

const prepareInput = (rawInput: string) => rawInput

const input = prepareInput(readInput())

const goA = (input) => {
  input= input.split(/\r?\n/).filter(n => n);

  const overlaps = new Array();
  const lines = createLinesArray(input);
  const allLines = [];
  lines.forEach((line, index) => {
    const x1 = getX(line[0]);
    const y1 = getY(line[0]);

    const x2 = getX(line[1]);
    const y2 = getY(line[1]);
    let linesArray = [];
    // No diagonals
    if(x1 !== x2 && y1 !== y2) return;

    // horizontal
    if(y1 == y2) {
      linesArray = createHorizontalLine(parseInt(y1, 10), parseInt(x1, 10), parseInt(x2, 10));
    }
     else if(x1 == x2) {
       linesArray = createVerticalLine(parseInt(x1, 10), parseInt(y1, 10), parseInt(y2, 10));
    }
     allLines.push(linesArray);
  });

  allLines.forEach((lineArray, index) => {
    lineArray.forEach(line => {
      allLines.forEach((anotherLineArray, anotherIndex) => {
        if(index !== anotherIndex) {
          if(anotherLineArray.includes(line)) {
            if(overlaps.includes(line)) return;
            overlaps.push(line);
          }
        }
      });
    })
  })
  return overlaps.length;
}

const getX = (line: string) =>  {
  return line.substring(0, line.indexOf(','));
}

const getY = (line: string) => {
  return line.substring(line.indexOf(',') + 1, line.length);
}
const createHorizontalLine = (y, x1, x2) => {
  const linesArray = [];
  if(parseInt(x1, 10) <= parseInt(x2, 10)) {
    for(let i = x1; i <= x2; i++) {
      linesArray.push(i + ',' + y);
    }
  } else {
    for(let i = x2; i <= x1; i++) {
      linesArray.push(i + ',' + y);
    }
  }
  return linesArray;
};

const createVerticalLine = (x, y1, y2) => {
  const linesArray = [];
  if(parseInt(y1, 10) <= parseInt(y2, 10)) {
    for(let i = y1; i <= y2; i++) {
      linesArray.push(x + ',' + i);
    }
  } else {
    for(let i = y2; i <= y1; i++) {
      linesArray.push(x + ',' + i);
    }
  }
  return linesArray;
};

const goB = (input) => {
  return
}

const createLinesArray = (input) => {
  const lines = []
  input.forEach(i => {
    i = i.split(' -> ');
    lines.push(i);
  })
  return lines;
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
