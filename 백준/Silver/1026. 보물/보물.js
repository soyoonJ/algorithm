var fs = require("fs");
var input = fs.readFileSync("/dev/stdin").toString().split("\n");

const count = Number(input[0]);
const A = input[1].split(" ").map(Number);
const B = input[2].split(" ").map(Number);

let result = 0;

A.sort((a, b) => a - b);
B.sort((a, b) => b - a);

for (let i = 0; i < count; i++) {
  result += A[i] * B[i];
}
console.log(result);