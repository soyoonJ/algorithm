// 자연수 뒤집어 배열로 만들기

// 내가 짠 코드1
// 문자로 바꾸고 > 쪼개고 > 뒤집어 준 다음 > for문을 돌면서 parseInt를 통해 다시 숫자로 바꿔주었다.
function solution(n) {
  var arr = n.toString().split("").reverse();

  for (let i = 0; i < arr.length; i++) {
    arr[i] = parseInt(arr[i]);
  }
  return arr;
}

// 내가 짠 코드2
// 문자로 바꾸고 > 쪼개고 > 뒤집어 준 다음 > map을 활용해서 각 요소들을 다시 숫자로 바꿔주었다.
function solution(n) {
  return n
    .toString()
    .split("")
    .reverse()
    .map((el) => parseInt(el));
}

// 다른 사람이 짠 코드
function solution(n) {
  var arr = [];

  do {
    arr.push(n % 10);
    n = Math.floor(n / 10);
  } while (n > 0);

  return arr;
}

// 뭔가 싶어서 한참 쳐다봤는데..
// do while을 통해 10으로 나눈 나머지를 계속해서 뽑아내주고, 소숫점은 Math.floor를 통해 제거해주어서
// 최종적으로 요소가 배열에 들어가도록 한 코드였다.
// 굉장히 수학적인 풀이라서 신선하게 다가왔다!!!
