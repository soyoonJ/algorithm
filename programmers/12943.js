// 콜라츠 추측

// 내가 푼 코드
// for문 500번까지 돌면서 1이 나올때까지 몇번의 카운트가 있었는지 확인
// 그 안에서 짝수/홀수 나누어서 if문 추가 진행
// for문 돌렸는데도 1 안나오면 -1 (괄호 위치 조심)
function solution(num) {
  var answer = "";
  for (let i = 0; i < 500; i++) {
    if (num != 1) {
      if (num % 2 == 0) {
        num = num / 2;
      } else {
        num = num * 3 + 1;
      }
    } else {
      return (answer = i);
    }
  }
  return (answer = -1);
}

// 다른 사람이 푼 코드
// 이게 훨씬 깔끔해보인다!
// if문이나 for문을 밑에 계속 붙였을 때 뭐가 뭔지 모르겠어서 좀 헷갈렸는데,
// while로 하면 훨씬 짧으면서도 가독성 있는 코드로 보인다!!
function collatz(num) {
  var answer = 0;
  while (num != 1 && answer != 500) {
    num % 2 == 0 ? (num = num / 2) : (num = num * 3 + 1);
    answer++;
  }
  return num == 1 ? answer : -1;
}
