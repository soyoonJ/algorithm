// 정수 내림차순으로 배치하기

// 내가 짠 코드
// 문자변환 > 쪼개기 > sort를 활용한 내림차순 > join을 통해 코드를 작성했다.
function solution(n) {
  return parseInt(
    n
      .toString()
      .split("")
      .sort((a, b) => b - a)
      .join("")
  );
}

// 다른 사람이 짠 코드
// 앞에서 진행했던 자연수 뒤집어 배열로 만들기와 유사한 코드
// 숫자로 코드를 짜는 것이 더 빠르다고 한다.
function solution(n) {
  var nums = [];
  do {
    nums.push(n % 10);
    n = Math.floor(n / 10);
  } while (n > 0);

  return nums.sort((a, b) => b - a).join("") * 1;
}
// 마지막에 붙는 *1은 숫자로 자료형 변환을 위해 넣어준 것
