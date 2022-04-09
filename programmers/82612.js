// 부족한 금액 계산하기

// 내가 작성한 코드
// price*count를 만든 후에 reduce를 활용하여 더해준다.
// total 금액이 money보다 크면 total-money를 통해 부족한 금액을 반환하고,
// 부족하지 않다면 0을 return한다.
function solution(price, money, count) {
  var arr = [];
  for (let i = 1; i <= count; i++) {
    arr.push(price * i);
  }
  var total = arr.reduce((acc, val) => acc + val);
  if (total > money) {
    return total - money;
  } else {
    return 0;
  }
}

// 다른 사람이 짠 코드 참고
function solution(price, money, count) {
  const tmp = (price * count * (count + 1)) / 2 - money;
  return tmp > 0 ? tmp : 0;
}
// cf. 다른 사람이 짠 코드 중 등차수열에 맞춰 작성한 코드
// total 금액 = (첫번째 수 + 마지막 수)*개수/2
// 가격 기본 단위까지 추가해야 하기 때문에 여기에 price를 곱해준다.

// 팀원이 짠 코드
//연서님 풀이
function solution(price, money, count) {
  // 부족한 금액
  let answer = 0;
  // count만큼 반복
  for (let i = 1; i <= count; i++) {
    // money - 현재 회차 x price
    money -= i * price;
  }
  // money가 음수이면 부족분 출력
  if (money < 0) {
    answer = -money;
  }
  // money가 양수이면 0을 리턴
  else {
    answer = 0;
  }
  return answer;
}

//혜인님 풀이
function solution(price, money, count) {
  let sum = 0;
  for (let i = 1; i <= count; i++) {
    sum += price * i;
  }
  return sum - money < 0 ? 0 : sum - money;
}

// 풀이 공유할 때 두 분 코드 보고 으앗? 왜 이렇게 꼬아 생각했지? 라는 생각을 많이 했다.
// 덕분에 배로 배울 수 있어서 너무 좋은 스터디,,, 문제는 아직 한 문제 한 문제 너무너무 어렵지만 팀원분들이 너무 좋아서 더 열심히 하게 된달까ㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋ

// ✨세상 짜-릿!!!!!!!!!!!!!!✨
