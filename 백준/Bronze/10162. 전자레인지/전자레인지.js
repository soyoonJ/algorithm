let timeInput = parseInt(require("fs").readFileSync("./dev/stdin").toString());

const times = [300, 60, 10];

let result = "";

for (let time of times) {
  result += Math.trunc(timeInput / time) + " ";
  timeInput %= time;
}

result = timeInput > 0 ? -1 : result;

console.log(result);