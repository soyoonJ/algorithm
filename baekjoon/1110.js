// 더하기 사이클
let input = require("fs")
  .readFileSync("./dev/stdin")
  .toString()
  .trim()
  .split("\n");

// console.log(input);
// console.log(+input);

let N = +input;
let count = 0;

while (true) {
  input = (input % 10) * 10 + ((Math.floor(input / 10) + (input % 10)) % 10);
  count++;
  if (input === N) {
    console.log(count);
    break;
  }
}

// 시간초과
// let N = input[0];
// let origin = N;
// let count = 0;
// // console.log(N);

// while (true) {
//   N = String(N % 10) + String((+N[0] + +N[1]) % 10);
//   count++;

//   if (N === origin) {
//     console.log(count);
//     break;
//   }
// }

// const [N] = input;
// N.split("");
// console.log(N);
// console.log(arr);
