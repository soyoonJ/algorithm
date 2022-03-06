// https://www.youtube.com/watch?v=v_Ynw4tkA2k

// 입출력 2개일 때 예시
// 1 12
const input = require("fs")
  .readFileSync("./dev/stdin")
  .toString()
  .trim()
  .split("\n");

// 문제가 여러 줄로 나올 때
// const input = require("fs")
//   .readFileSync("./dev/stdin")
//   .toString()
//   .trim()
//   .split(" ");

let [b, c] = input[0].split(" ").map((x) => +x);

let N = Number(input);

// cd baekjoon
// node ./2869.js
