// 문자열 내 p와 y의 개수

// 내가 짠 코드
function solution(s) {
  var arr = s.toUpperCase().split("");
  var p = arr.filter((element) => "P" === element).length;
  var y = arr.filter((element) => "Y" === element).length;
  if (p == y) {
    return true;
  } else {
    return false;
  }
}
// .toUpperCase()로 모든 문자를 대문자로 바꿔주고,
// .split('')을 통해 글자를 모두 나누어 배열로 만들어준다.
// .filter를 사용해서 p와 y값을 받는 요소를 새로운 배열로 뽑아준다.
// .length를 통해 새 배열의 길이를 바로 변수에 저장한다.
// p == y가 같다면 true를 반환하고, 그렇지 않다면 false를 반환한다.

// 다른 사람 코드
function numPY(s) {
  //함수를 완성하세요
  return (
    s.toUpperCase().split("P").length === s.toUpperCase().split("Y").length
  );
}

// 아래는 테스트로 출력해 보기 위한 코드입니다.
console.log(numPY("pPoooyY"));
console.log(numPY("Pyy"));

// s를 대문자로 바꾸고 P를 기준으로 나눈 길이와
// s를 대문자로 바꾸고 Y를 기준으로 나눈 길이가 같은지 확인한다.

// 이 방법도 되게 신선하다고 생각했다. 특정 문자 수로 나눈 길이가 같다면,
// 각 문자의 개수가 같을 거라는 발상을 한번에 할 수 있다는 것이 신기했고 대단하게 느껴지기도 했다.
