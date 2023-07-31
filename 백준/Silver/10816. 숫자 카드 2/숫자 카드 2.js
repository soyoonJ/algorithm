let fs = require("fs");
let input = fs.readFileSync("./dev/stdin").toString().split("\n");

const myCards = input[1]
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b);
const compareCards = input[3].split(" ").map(Number);

let answer = "";

let myCardMap = new Map();
for (let i of myCards) {
  if (myCardMap.has(i)) {
    myCardMap.set(i, myCardMap.get(i) + 1);
  } else {
    myCardMap.set(i, 1);
  }
}

for (let i of compareCards) {
  let count = 0;
  if (myCardMap.has(i)) count = myCardMap.get(i);

  answer += count + " ";
}

console.log(answer);