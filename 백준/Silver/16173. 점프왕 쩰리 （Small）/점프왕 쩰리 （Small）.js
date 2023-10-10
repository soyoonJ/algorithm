let fs = require("fs");
let input = fs.readFileSync("./dev/stdin").toString().split("\n");

class Queue {
  constructor() {
    this._arr = [];
  }
  enqueue(item) {
    this._arr.push(item);
  }
  dequeue() {
    return this._arr.shift();
  }
  getLength() {
    return this._arr.length;
  }
}

const size = Number(input[0]);
const graph = Array.from({ length: size }, (_, i) =>
  input[i + 1].split(" ").map(Number)
);

const bfs = () => {
  const queue = new Queue();
  queue.enqueue([0, 0]);

  while (queue.getLength() !== 0) {
    const [x, y] = queue.dequeue();
    const distance = graph[y][x];
    graph[y][x] = 0;

    if (distance === -1) {
      return true;
    }

    for (let [nxtX, nxtY] of [
      [x + distance, y],
      [x, y + distance],
    ]) {
      if (nxtX < size && nxtY < size && graph[nxtY][nxtX] !== 0) {
        queue.enqueue([nxtX, nxtY]);
      }
    }
  }

  return false;
};

console.log(bfs() ? "HaruHaru" : "Hing");