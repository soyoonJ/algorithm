const fs = require("fs");
const input = fs.readFileSync("dev/stdin").toString().split("\n");

const [N, K] = input[0].split(" ").map(Number);
const kids = input[1].split(" ").map(Number);
const heightDiff = [];

for (let i = 0; i < kids.length - 1; i++) {
  heightDiff.push(kids[i + 1] - kids[i]);
}

heightDiff.sort((a, b) => a - b);

let answer = 0;
for (let i = 0; i < heightDiff.length - (K - 1); i++) {
  answer += heightDiff[i];
}

console.log(answer);