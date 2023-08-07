let fs = require("fs");
let input = fs.readFileSync("./dev/stdin").toString().split(" ").map(Number);

let [n, m] = input;

let arr = [];
for (let i = 1; i <= n; i++) arr.push(i);

let selected = [];
let visited = Array(n).fill(false);

let answer = "";
function dfs(arr, depth) {
  if (depth === m) {
    let result = "";
    for (let i of selected) result += arr[i] + " ";
    if (
      result.trim() ===
      result
        .split(" ")
        .sort((a, b) => a - b)
        .join(" ")
        .trim()
    )
      answer += result + "\n";
    return;
  }

  for (let i = 0; i < n; i++) {
    if (visited[i]) continue;

    selected.push(i);
    visited[i] = true;

    dfs(arr, depth + 1);

    selected.pop();
    visited[i] = false;
  }
}

dfs(arr, 0);
console.log(answer);