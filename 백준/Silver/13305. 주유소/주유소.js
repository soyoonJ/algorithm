let fs = require("fs");
let input = fs.readFileSync("./dev/stdin").toString().split("\n");

const roads = input[1].split(" ").map(Number);
const costs = input[2].split(" ").map(Number);

let totalCosts = roads[0] * costs[0];
let minCost = costs[0];

for (let i = 1; i < roads.length; i++) {
  if (costs[i] < minCost) {
    minCost = costs[i];
  }
  totalCosts += minCost * roads[i];
}

console.log(totalCosts);