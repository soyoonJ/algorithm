// 핸드폰 번호 가리기

// 내가 푼 코드
function solution(phone_number) {
  var star = "";
  for (let i = 0; i < phone_number.length - 4; i++) {
    star += "*";
  }
  var answer = star + phone_number.substr(-4, 4);
  return answer;
}
// phone_number의 길이-4만큼 *을 찍고 phone_number의 끝에서 4자리 4개 추출

// 다른 사람이 푼 코드
function hide_numbers(s) {
  var result = "*".repeat(s.length - 4) + s.slice(-4);
  //함수를 완성해주세요

  return result;
}

// 굳이 for문 쓸 필요 없이 .repeat로 길이-4만큼 반복하고 .slice 써서 끝에 4글자 반환 후 붙여주면 된다.
// 훨씬 간단한 방법
