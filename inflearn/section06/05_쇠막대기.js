// 내 풀이 : 실패... --------------------------------------------------
// function mySolution(s) {
//   let answer = 0;
//   let stack = [];
//   let laserPosition = [];
//   for (let i = 0; i < s.length; i++) {
//     if (s[i] === "(") {
//       stack.push(i);
//     } else if (s[i - 1] === "(") {
//       stack.pop();
//       laserPosition.push(i - 1);
//     } else {
//       //   console.log(laserPosition);
//       console.log(stack, stack.pop());
//       let count = 0;
//       let startPoint = stack.pop();
//       for (let j = 0; j < laserPosition.length; j++) {
//         if (startPoint < j) count++;
//       }
//       answer += count + 1;
//     }
//   }
//   return answer;
// }

// 강의 풀이 ------------------------------------------------
// 어렵게 생각할 거 없이 막대의 끝이면 하나 pop 하고 stack 길이 체크하면 됨.
// 그때그때 잘린거 더하는 개념!! 마지막에는 한번 더해줘야 함
function solution(s) {
  let answer = 0;
  let stack = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") stack.push(s[i]);
    else {
      stack.pop();
      if (s[i - 1] === "(") answer += stack.length;
      // 막대기의 끝이면 하나 더해주기
      else answer++;
    }
  }
  return answer;
}

// 입출력 ---------------------------------------------------
let a = "()(((()())(())()))(())";
// console.log(mySolution(a));
console.log(solution(a));
