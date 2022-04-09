// 정수 제곱근 판별

// 내가 쓴 풀이
// x가 정수가 아닐 수 있기 때문에 이 경우를 체크해서 넣어주어야 한다.
function solution(n) {
  var x = Math.sqrt(n);
  return x == parseInt(x) ? (x + 1) ** 2 : -1;
}
// x가 parseInt(x)라면 문제에 제시된 대로 출력해준다. (삼항연산자)
