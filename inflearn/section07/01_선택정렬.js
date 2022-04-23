// 내 풀이 --------------------------------------------------
function mySolution(arr) {
  return arr.sort((a, b) => a - b);
}

// 강의 풀이 ------------------------------------------------
// 선택정렬 방식 : 이중 for문, 앞에서부터 돌면서 나머지 중 가장 작은걸로 계속해서 업데이트 해줌
function solution(arr) {
  let answer = arr;
  for (let i = 0; i < arr.length - 1; i++) {
    let idx = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[idx]) idx = j;
    }
    // 위치 바꾸는거, 최신 javascript에서 지원해줌 - 오 이거 신기하다!!!
    [arr[i], arr[idx]] = [arr[idx], arr[i]];
  }
  return answer;
}

// 입출력 ---------------------------------------------------
let arr = [13, 5, 11, 7, 23, 15];
console.log(mySolution(arr));
console.log(solution(arr));
