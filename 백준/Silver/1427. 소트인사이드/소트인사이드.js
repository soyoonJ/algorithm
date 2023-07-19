const fs = require("fs");
const input = fs.readFileSync("dev/stdin").toString();

const numberSort = [...input].sort((a, b) => Number(b) - Number(a));
console.log(Number(numberSort.join("")));