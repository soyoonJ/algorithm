// 하샤드 수

// 내가 푼 코드
// 앞서 진행했던 방식과 마찬가지로 string/split/parseInt를 쓰고 뒷 부분은 true/false로 반환되게끔 작성했다.
function solution(x) {
  var num = String(x)
    .split("")
    .reduce((a, b) => a + parseInt(b), 0);
  return x % num == 0 ? true : false;
}

// 다른 사람이 푼 코드
// 앞에서 숫자 뒤집기에 사용했던 형식이랑 비슷하게,
// do while을 활용해서 짠 코드이다.
// 문자 접근이 아닌, 숫자 접근이 일반적으로 더 빠르다고 해서,
// 이제 문자접근은 어느정도 손에 익어가는 것 같으니, 수학적인 접근도 조금 익혀봐야겠다.
function solution(x) {
  let num = x;
  let sum = 0;
  do {
    sum += x % 10;
    x = Math.floor(x / 10);
  } while (x > 0);

  return !(num % sum);
}
