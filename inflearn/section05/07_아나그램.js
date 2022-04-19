// 내 풀이 --------------------------------------------------
function mySolution(str1, str2) {
  let answer = "YES";
  let sH = new Map();

  for (x of str1) {
    if (sH.has(x)) sH.set(x, sH.get(x) + 1);
    else sH.set(x, 1);
  }

  //   두개를 어떻게 비교하지? - 가지고 있지 않을 때는 일단 NO / 하나씩 빼서!
  for (x of str2) {
    if (!sH.has(x) || sH.get(x) === 0) answer = "NO";
    sH.set(x, sH.get(x) - 1);
  }

  return answer;
}

// 강의 풀이 ------------------------------------------------
function solution(str1, str2) {
  let answer = "YES";
  let sH = new Map();
  for (let x of str1) {
    if (sH.has(x)) sH.set(x, sH.get(x) + 1);
    else sH.set(x, 1);
  }
  for (let x of str2) {
    // 길이가 같은 문자열이기 때문에 하나가 적다면 하나가 많게 됨.
    // 때문에 해당 식이 가능해지는 것
    if (!sH.has(x) || sH.get(x) === 0) return "NO";
    sH.set(x, sH.get(x) - 1);
  }

  return answer;
}
// 입출력 ---------------------------------------------------
// 1번
// let a = "AbaAeCe";
// let b = "baeeACA";
// 2번
let a = "abaCC";
let b = "Caaab";
console.log(mySolution(a, b));
console.log(solution(a, b));
