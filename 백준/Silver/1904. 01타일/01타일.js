let fs = require("fs");
let input = fs.readFileSync("./dev/stdin").toString().split('\n');

let N = Number(input[0]);

const d = Array(1000001).fill(0);
d[1] = 1;
d[2] = 2;

for (let i = 3; i <= N; i++) {
  d[i] = (d[i - 2] + d[i - 1]) % 15746;
}

console.log(d[N]);