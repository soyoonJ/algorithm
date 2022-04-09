// 내적

// 사실 문제가 내적이라고 했을 때 ???????????????????????????????????
// 이 상태로 들어왔다.
// 극악의 난이도일 것 같아 달달다랃ㄹ 떨면서 들어왔는데 문제를 읽고 보니 생각보다 굉장히 친절한 문제였다.

// 내가 짠 코드
function solution(a, b) {
  var sum = 0;
  for (let i = 0; i < a.length; i++) {
    sum += a[i] * b[i];
  }
  return sum;
}
// a[i]*b[i] 값을 for문을 통해 더해주고 값을 반환했다.

// 다른 사람이 짠 코드
function solution(a, b) {
  return a.reduce((acc, _, i) => (acc += a[i] * b[i]), 0);
}
// acc 값을 a[i]*b[i]로 계속해서 업데이트 해주었다.
// acc : 누적값,
// i : index
// 0 : 초기값

// 처음엔 reduce가 너무 생소하고 어려웠는데 몇 번 반복해서 보다보니 이제 조금씩 익숙해지고 있다.
