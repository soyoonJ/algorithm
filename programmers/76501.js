// 음양 더하기

// 제출한 코드
function solution(absolutes, signs) {
  var min = 0;
  var plus = 0;
  for (let i = 0; i < absolutes.length; i++) {
    if (signs[i] == false) {
      min = min - absolutes[i];
    } else {
      plus = plus + absolutes[i];
    }
    var answer = min + plus;
  }
  return answer;
}

// 문제를 이해하는 데에 집중했던 케이스였다.
// signs과 absolutes의 관계성에 대해 이해하니 코드를 구현할 수 있었다.
// signs가 false일 때와 true로 나누어 if문을 작성하는 틀을 생각했고,
// +와 -로 나누어 구현 후 마지막에 더해주는 방법으로 구현했다.

// 다른 분들을 보니 한줄에 모든 케이스를 몰아 넣는 방법도 있는데,
// 좀 더 문제를 풀어보면서 시도해봐야겠다.
// 삼향연산자와 화살표함수를 활용하여 구현한 방법이 대체적으로 다른사람이 푼 케이스에서 명쾌하고 현명하다고 인정을 많이 받는 것 같다.
