// 평균 구하기

// 내가 짠 코드
function solution(arr) {
  var total = 0;
  for (let i = 0; i < arr.length; i++) {
    total += arr[i];
  }
  var answer = total / arr.length;
  return answer;
}

// 다른 사람이 짠 코드
function average(array) {
  return array.reduce((a, b) => a + b) / array.length;
}

// 전체 코드 합산값 = array.reduce((a,b) => a+b)
// 평균 = 합산값 / array.length
