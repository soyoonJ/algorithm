// 자릿수 더하기

// 제출한 풀이
// n을 나누기 위해서는 문자 취급을 해주어야 하기 때문에
// toString을 통해 문자열로 변환한 후 split을 통해 숫자별로 나누어준다.
// 그 이후 reduce 함수를 사용해서 각각의 숫자를 parseInt로 바꾸는 동시에 더해준다.
function solution(n) {
  var word = n.toString().split("");
  return word.reduce((a, b) => parseInt(a) + parseInt(b), 0);
}
