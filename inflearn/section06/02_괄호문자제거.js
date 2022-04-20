// 내 풀이 --------------------------------------------------
function mySolution(s) {
  let stack = [];
  let answer = "";
  for (x of s) {
    if (x === "(") {
      stack.push(x);
    } else if (x === ")") {
      stack.pop();
    } else if (stack.length === 0) {
      answer += x;
    }
  }
  return answer;
}

// 강의 풀이 ------------------------------------------------
function solution(s) {
  let answer;
  stack = [];
  for (let x of s) {
    if (x === ")") {
      while (stack.pop() !== "(");
    } else stack.push(x);
  }
  answer = stack.join("");
  return answer;
}

// 입출력 ---------------------------------------------------
let str = "(A(BC)D)EF(G(H)(IJ)K)LM(N)";
console.log(mySolution(str));
console.log(solution(str));
