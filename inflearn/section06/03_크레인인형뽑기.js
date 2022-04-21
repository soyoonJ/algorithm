// 내 풀이 --------------------------------------------------
function mySolution(board, moves) {
  let basket = [];
  let answer = 0;
  for (let x of moves) {
    for (let y of board) {
      if (y[x - 1] !== 0) {
        if (y[x - 1] === basket[basket.length - 1]) {
          basket.pop();
          answer += 2;
        } else {
          basket.push(y[x - 1]);
        }
        y[x - 1] = 0;
        break;
      }
    }
  }
  return answer;
}

// 강의 풀이 ------------------------------------------------
function solution(board, moves) {
  let answer = 0;
  let stack = [];
  moves.forEach((position) => {
    for (let i = 0; i < board.length; i++) {
      if (board[i][position - 1] !== 0) {
        let tmp = board[i][position - 1];
        board[i][position - 1] = 0;
        if (tmp === stack[stack.length - 1]) {
          stack.pop();
          answer += 2;
        } else stack.push(tmp);
        break;
      }
    }
  });
  return answer;
}

// 입출력 ---------------------------------------------------
let a = [
  [0, 0, 0, 0, 0],
  [0, 0, 1, 0, 3],
  [0, 2, 5, 0, 1],
  [4, 2, 4, 4, 2],
  [3, 5, 1, 3, 1],
];

let b = [1, 5, 3, 5, 1, 2, 1, 4];
// console.log(mySolution(a, b));
console.log(solution(a, b));
