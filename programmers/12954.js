// x만큼 간격이 있는 n개의 숫자

// 내가 짠 코드
function solution(x, n) {
  var answer = [];
  for (let i = 1; i <= n; i++) {
    answer.push(x * i);
  }
  return answer;
}

// 다른 사람 풀이
function solution(x, n) {
  return Array(n)
    .fill(x)
    .map((v, i) => (i + 1) * v);
}

// 유난히 다른 사람들이 푼 코드를 보면 reduce와 함께 map이 많이 나오는 것 같다.
// 어제 처음 맞닥뜨린 삼항연산자도 익혀가는 중이었는데 갑자기 map이 나오니 너무 당황스러워서
// 아예 완벽하게 짚고 넘어가야 할 것 같았다.
// https://www.youtube.com/watch?v=vUB3TfLWzL0

// 니꼬쌤과 함께하는 map 공부하깈ㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋ
// 검색하다 마주쳐서 속으로 급 반갑ㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋ
// 여튼 이영상을 보고나니 그래도 map에 대한 대략적인 감이 생겼다.
// Array(n).fill(x).map((v, i) => (i + 1) * v)
// 이 부분이 이해가 전혀 되지 않아서 도대체 이 사람의 머리 속은 어떤 생각으로 가득 차 있을까? 라는 느낌이었는데,
// 하나하나 뜯어보니 이해가 됐다.

// <코드해석>
// Array(n) - length가 n인 array 생성
// .fill(x) - 배열을 x라는 정적인 값으로 채운다
// map((v,i) => (i+1)*v)
// - map은 v라는 변수를 가지고 있고(v는 array를 돌면서 element하나씩을 가진다) i는 index이다(0번째, 1번째,,,,)
// - 현재 앞단까지의 array가 [x, x, ,x, x, ,,, x] (n개만큼 생성되어 있음) 구성되어 있다.
// - x자리에 (i+1)*v를 해주면서 n-1번째까지 돌려준다 (n-1번째인 이유는 0번째가 포함되기 때문)
// - i에 +1을 하는 이유는, index는 0부터 시작하기 때문이다.
// - 결과적으로 array에는 [x, x*2, x*3, x*4, ,,, x*n]가 채워진다.
