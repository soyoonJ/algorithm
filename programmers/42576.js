// 완주하지 못한 선수

// 내가 제출한 코드
// participant와 completion을 동일하게 정렬 후 for문을 돌면서 i번째에 있는 이름이 다르다면,
// 해당 위치의 participant를 반환해주면 된다.
function solution(participant, completion) {
  participant.sort();
  completion.sort();

  for (let i = 0; i < participant.length; i++) {
    if (participant[i] != completion[i]) {
      return participant[i];
    }
  }
}
// 뭔가 더 좋은 방법이 있을 것 같아서 확인해보니 해시테이블이라는 것이 있었다.
// 해시를 사용할 경우에는 key를 받아 바로바로 찾기 때문에 속도에 있어 훨씬 빠르다고 한다.
// O(1) 상수시간이라는 것이 나왔는데, 계속해서 항목이 추가되어도 선형적으로 시간이 점점 증가하는 것이 아니라,
// 동일한 시간이 걸린다고 얘기하고 있다.
