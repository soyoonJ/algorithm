// 서울에서 김서방 찾기

// 내가 쓴 코드
// for문을 돌면서 arr 중 Kim이 있는 위치를 찾아줌
// 이거 말고 더 좋은 방법이 있을 것 같았는데 아니나 다를까 더 간단한 방법이 있었다.
function solution(seoul) {
  var answer = "";
  for (let i = 0; i < seoul.length; i++) {
    if (seoul[i] == "Kim") {
      answer = `김서방은 ${i}에 있다`;
    }
  }

  return answer;
}

// 다른 사람이 쓴 코드
// for문 돌 필요 없이 바로 indexOf 찍어주면 됨
function findKim(seoul) {
  var idx = seoul.indexOf("Kim");
  return "김서방은 " + idx + "에 있다";
}
