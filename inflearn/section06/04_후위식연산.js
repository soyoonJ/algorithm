// 후위식연산 - 연산자가 뒤로 가있음
// 숫자 스택에 넣어놨다가 연산자 만나면 스택에서 꺼내서 계산

// 내 풀이 --------------------------------------------------
// 후위식연산에 대한 이해를 위해 힌트 확인 후 문제 풀이 진행
function mySolution(s) {
  let stack = [];
  let rt = 0;
  let lt = 0;

  for (x of s) {
    if (!isNaN(x)) {
      stack.push(x);
    } else {
      rt = Number(stack.pop());
      lt = Number(stack.pop());
      if (x === "+") stack.push(lt + rt);
      if (x === "-") stack.push(lt - rt);
      if (x === "*") stack.push(lt * rt);
      if (x === "/") stack.push(lt / rt);
    }
  }
  return stack[0];
}

// 강의 풀이 ------------------------------------------------
function solution(s) {
  let answer;
  stack = [];
  for (let x of s) {
    if (!isNaN(x)) stack.push(Number(x));
    else {
      let rt = stack.pop();
      let lt = stack.pop();
      if (x === "+") stack.push(lt + rt);
      else if (x === "-") stack.push(lt - rt);
      else if (x === "*") stack.push(lt * rt);
      else if (x === "/") stack.push(lt / rt);
    }
  }
  answer = stack[0];
  return answer;
}

// 입출력 ---------------------------------------------------
let str = "352+*9-";
console.log(mySolution(str));
console.log(solution(str));
