const input = require("fs")
  .readFileSync("./dev/stdin")
  .toString()
  .trim()
  .split("\n");

let fiveKg = Math.floor(input / 5);

while (fiveKg >= 0) {
  let remain = input - fiveKg * 5;
  if (remain % 3 === 0) {
    console.log(fiveKg + remain / 3);
    return;
  } else {
    fiveKg--;
  }
}

console.log(-1);