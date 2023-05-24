const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let input = [];
rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  input.shift();

  const coins = [25, 10, 5, 1];

  let result = [];
  for (let change of input) {
    let count = [];
    for (let coin of coins) {
      count.push(~~(change / coin));
      change %= coin;
    }
    result.push(count.join(" "));
  }
  console.log(result.join("\n"));

  process.exit();
});