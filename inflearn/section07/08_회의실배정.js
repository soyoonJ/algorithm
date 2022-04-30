// 내 풀이 --------------------------------------------------
// 힌트 파악 후 문제 풀이 진행
function mySolution(meeting) {
  let answer = 0;
  meeting.sort((a, b) => {
    if (a[1] === b[1]) return a[0] - b[0];
    else return a[1] - b[1];
  });
  //   console.log(meeting);
  let endTime = 0;
  for (let x of meeting) {
    if (endTime <= x[0]) {
      answer++;
      endTime = x[1];
    }
  }
  return answer;
}

// 강의 풀이 ------------------------------------------------
// 그리디 문제 대표
function solution(meeting) {
  let answer = 0;
  meeting.sort((a, b) => {
    if (a[1] === b[1]) return a[0] - b[0];
    else return a[1] - b[1];
  });
  let et = 0;
  for (let x of meeting) {
    if (x[0] >= et) {
      answer++;
      et = x[1];
    }
  }
  return answer;
}

// 입출력 ---------------------------------------------------
let arr = [
  [1, 4],
  [2, 3],
  [3, 5],
  [4, 6],
  [5, 7],
];
console.log(mySolution(arr));
console.log(solution(arr));
