// 없는 숫자 더하기

// 제출한 코드
function solution(numbers) {
  var array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  var answer = 0;
  for (let i = 0; i < array.length; i++) {
    if (numbers.includes(array[i]) == false) {
      answer = answer + array[i];
    }
  }
  return answer;
}

// 이렇게 짜고 보니 굳이 var array는 만들지 않아도 됐다.
// 길이가 정해져있다보니 그냥 array.length를 쓰지 않고 10으로 대체해도 됐었고,
// array[i]는 그냥 i로 집어넣으면 훨씬 깔끔한 코드가 나올 것 같다.
// 그치만 전반적인 로직은 구현해내서 쀼듯🥰
