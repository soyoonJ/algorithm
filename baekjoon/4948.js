// 베르트랑 공준
const input = require("fs")
  .readFileSync("./dev/stdin")
  .toString()
  .trim()
  .split("\n");

// console.log(input);

for (let i = 0; i < input.length - 1; i++) {
  console.log(solution(+input[i]));
}

function isPrime(num) {
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

function solution(num) {
  let count = 0;
  for (let i = num + 1; i <= 2 * num; i++) {
    if (isPrime(i)) {
      count++;
    }
  }
  return count;
}

// 시도한 방법 (틀림)
// const input = require("fs")
//   .readFileSync("./dev/stdin")
//   .toString()
//   .trim()
//   .split("\n");

// let count = 0;

// for (let i = input + 1; i <= 2 * input; i++) {
//   for (let j = i; j <= Math.sqrt(i); j++) {
//     if (i % j === 0) {
//       count++;
//     }
//   }
// }
// console.log(count);
