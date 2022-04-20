// 내 풀이 --------------------------------------------------
function mySolution(s) {
  let count = 0;
  for (x of s) {
    if (x === "(") count++;
    else count--;
  }
  if (count === 0) return "YES";
  else return "NO";
}

// 강의 풀이 ------------------------------------------------
// 스택 풀이
function solution(s) {
  let answer = "YES";
  let stack = [];
  for (let x of s) {
    if (x === "(") stack.push(x);
    else {
      if (stack.length === 0) return "NO";
      stack.pop();
    }
  }

  if (stack.length > 0) return "NO";
  return answer;
}

// 입출력 ---------------------------------------------------
let a = "(()(()))(()";
console.log(mySolution(a));
console.log(solution(a));
