const fs = require("fs");
const input = fs.readFileSync("dev/stdin").toString().split("\n");

const N = Number(input[0]);
const newArr = [];
for (let i = 1; i <= N; i++) {
  newArr.push(input[i].split(" "));
}

newArr.sort((a, b) => Number(a[0]) - Number(b[0]));

let answer = "";
for (let member of newArr) {
  answer += `${member[0]} ${member[1]}\n`;
}

console.log(answer);