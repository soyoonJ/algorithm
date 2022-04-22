// 내 풀이 --------------------------------------------------
// 힌트 참고 풀이 진행
function mySolution(n, k) {
  let Prince = Array.from({ length: n }, (x, i) => i + 1);
  //   console.log(Prince);
  while (Prince.length !== 1) {
    for (let i = 1; i < k; i++) {
      Prince.push(Prince.shift());
    }
    Prince.shift();
  }
  return Prince.shift();
}

// 강의 풀이 ------------------------------------------------
function solution(n, k) {
  let answer;
  let queue = Array.from({ length: n }, (v, i) => i + 1);
  while (queue.length) {
    for (let i = 1; i < k; i++) queue.push(queue.shift());
    queue.shift();
    if (queue.length === 1) answer = queue.shift();
  }
  return answer;
}

// 입출력 ---------------------------------------------------
console.log(mySolution(8, 3));
console.log(solution(8, 3));
