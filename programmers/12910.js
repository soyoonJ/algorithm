// 나누어 떨어지는 숫자 배열

// 내가 쓴 코드
function solution(arr, divisor) {
  var answer = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % divisor == 0) {
      answer.push(arr[i]);
    }
  }
  return answer.length == 0 ? [-1] : answer.sort((a, b) => a - b);
}

// array의 각 element를 나누어 확인하기 위해 for문을 돌려준다.
// divisor로 나누었을 때 0인 값을 찾아서 빈 배열인 answer에 추가한다.
// 만약 0으로 떨어지는 값이 없다면, answer의 length가 0이 될 것이기 때문에,
// answer.length == 0이 된다면 -1을 반환하고,
// 그렇지 않다면 오름차순으로 answer 배열을 정리해 반환한다.

// 오름차순 정렬  .sort((a,b) => a-b)
// 내림차순 정렬  .sort((a,b) => b-a)

// 다른 사람들이 작성한 코드
function solution(arr, divisor) {
  var answer = arr.filter((v) => v % divisor == 0);
  return answer.length == 0 ? [-1] : answer.sort((a, b) => a - b);
}

// filter를 통해 array의 요소 중 divisor로 나누었을 때 딱 떨어지는 값을 걸러낸다.
// .filter(element => element%divisor == 0)

// 정렬도 새롭게 알게 되기도 했지만,
// .filter도 오늘 문제 풀면서 자주 보였다.
// 이번에 문제 풀면서 새롭게 보이는 매서드가 참 많은 것 같닼ㅋㅋ
// 아직 익숙하지 않지만 새롭게 알게 될 때마다 정리할 예정이다.
