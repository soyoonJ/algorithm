let timeInput = parseInt(require("fs").readFileSync("./dev/stdin").toString());

const times = [300, 60, 10];
let count = [0, 0, 0];
for (let i = 0; i < times.length; i++) {
  const tempCount = Math.floor(timeInput / times[i]);
  count[i] += tempCount;
  timeInput -= times[i] * tempCount;
}

const result = timeInput > 0 ? -1 : count.join(" ");
console.log(result);
