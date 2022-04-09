// 수박수박수박수박수박수?

// 내가 쓴 코드
// n이 짝수일 때와 짝수가 아닐 때를 나누어서 작성했다.
// 홀수일 때는 n/2 한 값이 소수가 나와 Math.floor를 통해 값을 맞춰주도록 짰다.
function solution(n) {
  var answer = "";

  if (n % 2 == 0) {
    answer = "수박".repeat(n / 2);
  } else {
    answer = "수박".repeat(Math.floor(n / 2)) + "수";
  }
  return answer;
}

// [내가 쓴 코드2]
// 이틀 전에 풀고 오늘 다시 풀었을 때 repeat을 이용해서 좀 더 간단하게 풀 수 있었다.
function solution(n) {
  return n % 2 == 0 ? "수박".repeat(n / 2) : "수박".repeat(n / 2) + "수";
}

// 다른 사람이 쓴 코드
// repeat을 썼지만, repeat을 여러번 반복하지 않고,
// 앞에 붙여준 이후에 추가적으로 붙는 '수'에 대해서 삼항연산자를 통해 필요여부를 판단했다.
const waterMelon = (n) => {
  return "수박".repeat(n / 2) + (n % 2 === 1 ? "수" : "");
};
