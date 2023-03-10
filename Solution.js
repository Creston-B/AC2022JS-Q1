import fs from "fs";

//garbage implementation

const chunkdelim = "\r\n\r\n";
const delim = "\r\n";
let data = fs.readFileSync("./input.txt", "utf-8");

let elves = [[]];
let answer;

elves = getElves(data);
answer = findHighestCalCount(elves);

console.log(answer);



function getElves(data) {
  let chunks = data.split(chunkdelim);

  for (let i = 0; i < chunks.length; i++) {
    elves[i] = chunks[i].split(delim);
  }
  return(elves)
}

function findHighestCalCount(elves) {
  let index = 0;
  let cals = 0;
  
  for (let i = 0; i < elves.length; i++) {
    let elfcal = 0;
    elves[i].forEach(item => {
      elfcal += 1* item;
    });
    if (elfcal > cals) {
     cals = elfcal;
    index = i;
    }
  }
  
  return([index, cals]);
}