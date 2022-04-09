// 행렬의 덧셈

// 내가 짠 코드
function solution(arr1, arr2) {
  var answer = [];
  for (let i = 0; i < arr1.length; i++) {
    answer[i] = [];
    for (let j = 0; j < arr1[i].length; j++) {
      answer[i][j] = arr1[i][j] + arr2[i][j];
    }
  }
  return answer;
}

// 내가 짠 코드
function solution(arr1, arr2) {
  var answer = [];
  for (let i = 0; i < arr1.length; i++) {
    answer[i] = [];
    for (let j = 0; j < arr1[i].length; j++) {
      answer[i][j] = arr1[i][j] + arr2[i][j];
    }
  }
  return answer;
}

// 오늘 헤맸던 문제 중 하나다.
// 붙잡고 있어도 해결되지가 않아 답에서 살짝 힌트를 얻으려고 했는데 답안도 해석이 되지 않아서
// 한참 끙끙 거리다가 겨우 이해하고 팀원들에게 풀이방법을 공유했다.
// 처음엔 말하면서 이게 맞나? 하는 생각이 들었는데 점심시간 갖자고 말하자마자 갑자기 이해가 돼서
// 신나는 마음으로 점심을 먹고 룰루랄라 풀이방법을 다시 공유했다.

// 1. 겉에 들어갈 배열을 만들어준다
// 2. 안에 들어갈 작은 배열을 만들어주기 위해 1차로 for문을 돌려 틀을 만든다.
// 3. 작은 배열 안에 있는 수를 각자 더해주기 위해 2차로 for문을 돌린다.
// 4. 최종적으로 더해진 answer을 return 한다.
