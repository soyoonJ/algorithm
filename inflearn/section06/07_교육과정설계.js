// 내 풀이 --------------------------------------------------
function mySolution(need, plan) {
  let queue = need.split("");
  for (let x of plan) {
    if (queue.includes(x)) {
      if (queue.shift() !== x) return "NO";
    }
  }
  return "YES";
}

// 강의 풀이 ------------------------------------------------
function solution(need, plan) {
  let answer = "YES";
  let queue = need.split("");
  for (let x of plan) {
    if (queue.includes(x)) {
      if (x !== queue.shift()) return "NO";
    }
  }
  // 빼먹었다!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
  if (queue.length > 0) return "NO";
  return answer;
}

// 입출력 ---------------------------------------------------
let a = "CBA";
let b = "CBDAGE";
console.log(mySolution(a, b));
console.log(solution(a, b));
