// 내 풀이
function mySolution(k, arr) {
  let answer = 0;
  let sum = 0;
  // 처음 k개 합 구한 다음에 하나씩 뺴고 더해가면서 하는 방식 시도
  for (let i = 0; i < k; i++) {
    sum += arr[i];
  }
  answer = sum;

  for (let i = k; i < arr.length; i++) {
    sum += arr[i] - arr[i - k];
    answer = Math.max(answer, sum);
  }

  return answer;
}

// 강의 풀이 ------------------------------------------------
function solution(k, arr) {
  let answer,
    sum = 0;
  for (let i = 0; i < k; i++) sum += arr[i];
  answer = sum;
  for (let i = k; i < arr.length; i++) {
    sum += arr[i] - arr[i - k];
    answer = Math.max(answer, sum);
  }
  return answer;
}

// 입출력 ---------------------------------------------------
let a = [12, 15, 11, 20, 25, 10, 20, 19, 13, 15];
console.log(mySolution(3, a));
console.log(solution(3, a));
