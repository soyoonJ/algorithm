// 소수 구하기
const input = require("fs")
  .readFileSync("./dev/stdin")
  .toString()
  .trim()
  .split("\n");

let M = Number(input[0].split(" ")[0]);
let N = Number(input[0].split(" ")[1]);

function isPrime(num) {
  if (num === 1) {
    return false;
  } else {
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  }
}

for (let i = M; i <= N; i++) {
  isPrime(i) ? console.log(i) : null;
}
