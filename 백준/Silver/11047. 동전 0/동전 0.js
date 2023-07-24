const fs = require("fs");
const input = fs.readFileSync("./dev/stdin").toString().split("\n");

const condition = input[0].split(" ").map(Number);
const coinNum = condition[0];
let value = condition[1];

const coins = input
  .splice(1)
  .map(Number)
  .sort((a, b) => b - a);

let answer = 0;

for (let i = 0; i < coinNum; i++) {
  if (value <= 0) break;
  if (value / coins[i] < 1) continue;

  answer += Math.floor(value / coins[i]);
  value -= Math.floor(value / coins[i]) * coins[i];
}

console.log(answer);