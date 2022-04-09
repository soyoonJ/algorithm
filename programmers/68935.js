// 3진법 뒤집기

// 이번 문제는 매서드를 특히 많이 찾아봤다.
// 진법변환이나 뒤집는 방법에 대해 기본적인 코드를 알아야 해결이 가능할 것 같아,
// 구글링을 통해 필요한 코드를 검색했고 그 이후 문제풀이를 시작했다.

// 내가 짠 코드
function solution(n) {
  var convert = n.toString(3);
  var reverse = convert.split("").reverse().join("");
  var answer = parseInt(reverse, 3);
  return answer;
}

// 주어진 변수 n을 .toString(3)을 통해 3진법으로 바꾼다.
// 문자를 하나씩 쪼개고 뒤집은 다음 다시 묶어준다.
// 3진법인 숫자를 parseInt를 통해 10진법으로 다시 변환 후 값을 반환한다.
