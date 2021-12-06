import { test, readInput } from "../utils/index"

const prepareInput = (rawInput: string) => rawInput

const input = prepareInput(readInput())

const goA = (input) => {
  input= input.split(/\r?\n/).filter(n => n);

  const overlaps = new Set();
  const lines = createLinesArray(input);
  lines.forEach((line, index) => {
    const x1 = getX(line[0]);
    const y1 = getY(line[0]);
    const x2 = getX(line[1]);
    const y2 = getY(line[1]);
    let linesArray;
    // No diagonals
    if(x1 !== x2 && y1 !== y2) return;

    // horizontal
    if(y1 == y2) {
      linesArray = createHorizontalLine(y1, x1, x2);
    }
     else {
       linesArray = createVerticalLine(x1, y1, y2);
    }

     lines.forEach((otherLine, otherIndex) => {
       if(index !== otherIndex) {
         const ox1 = getX(otherLine[0]);
         const oy1 = getY(otherLine[0]);
         const ox2 = getX(otherLine[1]);
         const oy2 = getY(otherLine[1]);
         if(ox1 !== ox2 && oy1 !== oy2) return;
         let otherLinesArray;
         // horizontal
         if(oy1 == oy2) {
           otherLinesArray = createHorizontalLine(oy1, ox1, ox2);
         }
         // vertical
         else {
           otherLinesArray = createVerticalLine(ox1, oy1, oy2);
         }

         otherLinesArray.forEach((li) => {
           let value = '';
           if(linesArray.indexOf(li) > -1) {
             value = li;
           }

              if(value) {
                overlaps.add(value);
              }

         })
       }
     });
  })
  return overlaps.size;
}

const getX = (line: string) =>  {
  const x = line.substring(0, line.indexOf(','));
  return x;
}

const getY = (line: string) => {
  const y = line.substring(line.indexOf(',') + 1, line.length);
  return y;
}
const createHorizontalLine = (y, x1, x2) => {
  const linesArray = [];
  if(x1 <= x2) {
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
  if(y1 <= y2) {
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

const createLine = (co1, co2) => {
  const linesArray = [];
  if(co1 < co2) {
    for(let i = co1; i <= co2; i++) {
      linesArray.push(parseInt(i, 10));
    }
  } else {
    for(let i = co2; i <= co1; i++) {
      linesArray.push(parseInt(i, 10));
    }
  }
  return linesArray;

}

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
