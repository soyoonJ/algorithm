// 내 풀이 --------------------------------------------------
function mySolution(arr) {
  return arr.sort((a, b) => a - b);
}

// 강의 풀이 ------------------------------------------------
// 버블정렬 : 이중 for문, j가 2개씩 비교하면서 한바퀴 쭉 돌고, 또 그 다음에서 2개씩 비교하면서 업데이트 반복
// 많이 교체를 하니까 성능 면에서는 그렇게 좋은 건 아님
function solution(arr) {
  let answer = arr;
  for (let i = 0; i < arr.length - 1; i++) {
    for (j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return answer;
}

// 입출력 ---------------------------------------------------
let arr = [13, 5, 11, 7, 23, 15];
console.log(mySolution(arr));
console.log(solution(arr));
