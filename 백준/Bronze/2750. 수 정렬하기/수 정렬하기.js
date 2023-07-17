const fs = require("fs");
const input = fs.readFileSync("dev/stdin").toString().split("\n");

const n = input[0];
const newArr = [];

for (let i = 1; i <= n; i++) {
  newArr.push(Number(input[i]));
}
newArr.sort((a, b) => a - b);

let answer = "";
for (let i of newArr) {
  answer += i + "\n";
}

console.log(answer);