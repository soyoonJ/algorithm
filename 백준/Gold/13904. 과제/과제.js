var fs = require("fs");
var input = fs.readFileSync("dev/stdin").toString().split("\n");

// 뒤에서부터?

// length 부터 시작해서 해당 일에 대기 없으면 그냥 지나가기
// 6일 개수 - 1개면 무조건 그거 진행
// 5일 개수 - 이전에 대기 없으니까 지나가기
// 4일 개수 - 2개 => 큰거 무조건 진행
// 3일 개수 - 4일1개, 3일1개 => 둘 중 큰거 진행
// 2일 개수 - 2일1개, 3일1개 => 둘 중 큰거 진행
// 1일 - 나머지 중 제일 큰거 진행

let score = 0;
const homeworks = input.slice(1);
const deadlines = homeworks.map((homework) => Number(homework.split(" ")[0]));

for (let i = Math.max(...deadlines); i > 0; i--) {
  const lastdayHomeworks = homeworks.filter(
    (homework) => Number(homework.split(" ")[0]) === i
  );
  const restHomeworks = homeworks.filter(
    (homework) => Number(homework.split(" ")[0]) > i
  );
  const allChoices = [...lastdayHomeworks, ...restHomeworks];

  if (allChoices.length <= 0) continue;

  const homeworkScores = allChoices.map((homework) =>
    Number(homework.split(" ")[1])
  );
  score = score + Math.max(...homeworkScores);

  let index = i;
  let targetScoreIndex = homeworks.indexOf(
    `${index} ${Math.max(...homeworkScores)}`
  );
  while (targetScoreIndex === -1) {
    index += 1;
    targetScoreIndex = homeworks.indexOf(
      `${index} ${Math.max(...homeworkScores)}`
    );
  }

  homeworks.splice(targetScoreIndex, 1);
}

console.log(score);