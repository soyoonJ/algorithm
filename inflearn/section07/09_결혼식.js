// 내 풀이 --------------------------------------------------
function mySolution(times) {
  times.sort((a, b) => a[0] - b[0]);
  //   console.log(times);
  let max = 0;
  for (let i = 0; i < times.length - 1; i++) {
    let count = 1;
    for (let j = i + 1; j < times.length; j++) {
      if (times[i][1] > times[j][0]) count++;
    }
    if (count > max) max = count;
  }
  return max;
}

// 강의 풀이 ------------------------------------------------
// 배열을 쪼개서 저장 후 sort
// s 만날 때마다 더해주고, e 나올 때마다 빼주기!
// 떠나는걸 먼저 반영해줘야 하기 때문에 s, e 중에는 e를 우선으로 정렬 해주어야 함
function solution(times) {
  let answer = Number.MIN_SAFE_INTEGER;
  let T_line = [];
  for (let x of times) {
    T_line.push([x[0], "s"]);
    T_line.push([x[1], "e"]);
  }
  T_line.sort((a, b) => {
    // 아스키코드 기준으로 정렬
    if (a[0] === b[0]) return a[1].charCodeAt() - b[1].charCodeAt();
    else return a[0] - b[0];
  });
  //   console.log(T_line);
  let cnt = 0;
  for (let x of T_line) {
    if (x[1] === "s") cnt++;
    else cnt--;
    answer = Math.max(answer, cnt);
  }
  return answer;
}

// 입출력 ---------------------------------------------------
let arr = [
  [14, 18],
  [12, 15],
  [15, 20],
  [20, 30],
  [5, 14],
];
console.log(mySolution(arr));
console.log(solution(arr));
