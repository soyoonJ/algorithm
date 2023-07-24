let fs = require("fs");
let input = fs.readFileSync("./dev/stdin").toString();

const S = +input;
let currentNum = 1;
let sum = 0;
let answer = 0;

while (sum < S) {
  sum += currentNum;
  if (sum > S) break;

  answer++;
  currentNum++;
}

console.log(answer);