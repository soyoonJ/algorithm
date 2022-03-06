// ACM 호텔
const input = require("fs")
  .readFileSync("./dev/stdin")
  .toString()
  .trim()
  .split("\n");

// console.log(input);

const testNum = Number(input[0]);

const solution = (arr) => {
  const [H, W, N] = arr.split(" ").map((e) => Number(e));

  let count = 0;
  for (let i = 1; i <= W; i++) {
    for (let j = 1; j <= H; j++) {
      count++;
      if (count === N) {
        // 지금 넘버인 상태라, 그대로 더하면 연산이 됨. 방 번호를 만들어줘야 하기 때문에 String으로 변환 후 합치기
        console.log(String(j) + String(i < 10 ? "0" + String(i) : i));
        break;
      }
    }
  }
};

// solution initialize 하기 전엔 실행이 안돼서 하단으로!
for (let i = 1; i <= testNum; i++) solution(input[i]);
