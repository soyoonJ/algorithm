// 직사각형 별찍기

// 내 풀이
// star를 빈값으로 변수 지정하고, for문을 하나 추가해서 구현했다.
process.stdin.setEncoding("utf8");
process.stdin.on("data", (data) => {
  const n = data.split(" ");
  const a = Number(n[0]),
    b = Number(n[1]);

  for (let i = 0; i < b; i++) {
    var star = "";
    for (let j = 0; j < a; j++) {
      star = star + "*";
    }
    console.log(star);
  }
});

// 다른사람들이 짠 코드
process.stdin.setEncoding("utf8");
process.stdin.on("data", (data) => {
  const n = data.split(" ");
  const a = Number(n[0]),
    b = Number(n[1]);
  const row = "*".repeat(a);
  for (let i = 0; i < b; i++) {
    console.log(row);
  }
});

// 가장 인상깊었던 부분은 .repeat() 이었다.
// 이렇게 되면 굳이 for문을 두번 쓰지 않고도 깔끔하게 완성할 수 있다는 점이 굉장히 효율적으로 보였다.

// 아직까지는 LEVEL1이 전혀 난이도가 낮은 문제처럼 느껴지지 않지만
// 오늘부터 꾸준히 공부하면 금방 익숙해질거라고 계속 되뇌이고 있다!!

// 컴퓨터랑 심도있는 대화를 할 수 있는 개발자가 되는 그 날까즤...☆
