const fs = require("fs");
const input = fs.readFileSync("dev/stdin").toString().split("\n");

const N = Number(input[0]);
const newArr = [];

for (let i = 1; i <= N; i++) {
  newArr.push(input[i].split(" "));
}

newArr.sort((a, b) => {
  if (a[0] !== b[0]) {
    return Number(a[0]) - Number(b[0]);
  } else {
    return Number(a[1]) - Number(b[1]);
  }
});

let answer = "";
for (let i of newArr) {
  answer += i.join(" ") + "\n";
}
console.log(answer);