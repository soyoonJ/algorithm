// 내 풀이 --------------------------------------------------
function mySolution(arr) {
  let answer = arr;
  answer = arr.sort((a, b) => {
    if (a[0] !== b[0]) return a[0] - b[0];
    else return a[1] - b[1];
  });
  return answer;
}

// 강의 풀이 ------------------------------------------------
function solution(arr) {
  let answer = arr;
  arr.sort((a, b) => {
    if (a[0] === b[0]) return a[1] - b[1];
    else return a[0] - b[0];
  });
  return answer;
}

// 입출력 ---------------------------------------------------
let arr = [
  [2, 7],
  [1, 3],
  [1, 2],
  [2, 5],
  [3, 6],
];
console.log(mySolution(arr));
console.log(solution(arr));
