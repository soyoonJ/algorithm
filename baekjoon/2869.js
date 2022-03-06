const input = require("fs")
  .readFileSync("./dev/stdin")
  .toString()
  .trim()
  .split("\n");

let [A, B, V] = input[0].split(" ").map((x) => +x);
// let A = Number(input[0]);
// let B = Number(input[1]);
// let V = Number(input[2]);
// console.log(A, B, V);

// 다른문제풀이
// 올라가는 높이 : A-B
// 마지막 날은 미끄러진 높이 미리 제외해줌
console.log(Math.ceil((V - B) / (A - B)));

// // 시간초과
// let count = 0;
// while (V >= 0) {
//   if (V - A <= 0) {
//     console.log(count);
//     break;
//   }
//   V = V - A + B;
//   count++;
// }
