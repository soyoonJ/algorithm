// 문자열 다루기 기본

// 내가 짠 코드
function solution(s) {
  var answer = true;
  var result = parseInt(s);
  answer = (s.length == 4 || s.length == 6) && s == result ? true : false;

  return answer;
}

// isNaN을 써서 활용했는데 제출을 했으나 테스트 케이스에서 1개가 자꾸 실패가 뜸.
// 소수 같은 부분에서 걸릴 수 있기 때문에 isNaN이 아닌 정수로 한정 지어주고,
// 나머지 값을 날릴 수 있도록 설정해두어야 함.
