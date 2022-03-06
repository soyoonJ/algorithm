// 2839번 설탕배달

const input = require("fs")
  .readFileSync("./dev/stdin")
  .toString()
  .trim()
  .split("\n");
let N = Number(input[0]);

// 5kg 봉지 최대치
let fiveKg = Math.floor(input / 5);
// console.log(fiveKg);

while (fiveKg >= 0) {
  let remain = input - fiveKg * 5;
  if (remain % 3 === 0) {
    console.log(fiveKg + remain / 3);
    return;
  } else {
    fiveKg--;
  }
}
// 조건문 빠져나왔는데도 못 구한거면 -1
console.log(-1);

// //--------------------------------------------------------------------------
// // 문제풀이 시도 (이건 실패)
// // let remain = input-Math.floor(input/5)*5
// // return remain%3 === 0 ? remain/3+Math.floor(input/5) : -1

// // // 다섯봉지 최대
// // let five = Math.floor(input / 5);
// // // 남은 kg
// // let rest = input - five * 5;
// // if (rest % 3 === 0) {
// //   let three = rest / 3;
// //   console.log(five + three);
// // } else {
// //   console.log(-1);
// // }

// //--------------------------------------------------------------------------
// // 다른 사람 문제풀이
// let fs = require("fs");
// let input = fs.readFileSync("/dev/stdin").toString();

// let N = Number(input);
// let five = 0;
// let three = 0;

// // 조건문이 참일 때 계속 반복하려고 씀
// while (true) {
//   // 5로 나누어 떨어질 경우 조건문 빠져나감
//   if (N % 5 === 0) {
//     five = N / 5;
//     console.log(five + three);
//     break;
//   }
//   // N이 0보다 작을 경우 결국 값을 못 구했다는 거니까 -1 출력
//   if (N < 0) {
//     console.log(-1);
//     break;
//   }
//   // 3kg 수를 구할 때 굳이 3으로 나눌 필요 없이 -3을 하고 three에 1씩 추가
//   N = N - 3;
//   three++;
// }
