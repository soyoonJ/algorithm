// 내 풀이 --------------------------------------------------
function mySolution(arr) {
  let answer = [];

  // 깊은 복사
  let origin = arr.slice();
  origin.sort((a, b) => a - b);
  //   console.log(arr, origin);

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== origin[i]) answer.push(i + 1);
  }

  return answer;
}

// 강의 풀이 ------------------------------------------------
function solution(arr) {
  let answer = [];
  let sortArr = arr.slice();
  sortArr.sort((a, b) => a - b);
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== sortArr[i]) answer.push(i + 1);
  }

  return answer;
}

// 입출력 ---------------------------------------------------
let arr = [120, 125, 152, 130, 135, 135, 143, 127, 160];
console.log(mySolution(arr));
console.log(solution(arr));
