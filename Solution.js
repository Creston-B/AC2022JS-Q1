import fs from "fs";

class Elf {
  constructor(index, items) {
    this.index = index;
    this.items = items;
  }

  get totalCals() {
    let cals = 0;
    this.items.forEach((i) => {
      cals += 1 * i;
    });
    return cals;
  }
}

//garbage implementation

const chunkdelim = "\r\n\r\n";
const delim = "\r\n";
let data = fs.readFileSync("./input.txt", "utf-8");

let elves = [];
let answer;

elves = getElves(data);
sortElves(elves);

let topThree = takeThree(elves);
console.log(topThree)
console.log(
    'sum of top three: ' +
    +(topThree[0].totalCals + topThree[1].totalCals + topThree[2].totalCals)
);

function getElves(data) {
  let _elves = [];
  let chunks = data.split(chunkdelim);

  for (let i = 0; i < chunks.length; i++) {
    _elves[i] = new Elf(i, chunks[i].split(delim));
  }

  return _elves;
}

function sortElves(_elves) {
  return _elves.sort((a, b) => {
    return b.totalCals - a.totalCals;
  });
}

function takeThree(_arr) {
  return [_arr[0], _arr[1], _arr[2]];
}
