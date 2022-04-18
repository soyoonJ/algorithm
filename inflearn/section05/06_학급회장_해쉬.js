function mySolution(s) {
  // 내 풀이
  let splited = s.split("");

  max = 0;
  let A = splited.filter((e) => e === "A").length;
  let B = splited.filter((e) => e === "B").length;
  let C = splited.filter((e) => e === "C").length;
  let D = splited.filter((e) => e === "D").length;
  let E = splited.filter((e) => e === "E").length;

  max = Math.max(A, B, C, D, E);

  if (max === A) return "A";
  if (max === B) return "B";
  if (max === C) return "C";
  if (max === D) return "D";
  if (max === E) return "E";
}

// 강의 풀이 ------------------------------------------------
function solution(s) {
  let answer;
  // 해쉬 생성
  let sH = new Map();
  for (let x of s) {
    // x키가 존재하면 +1, 아니면 1로 세팅
    if (sH.has(x)) sH.set(x, sH.get(x) + 1);
    else sH.set(x, 1);
  }
  // 최댓값 구하기
  let max = Number.MIN_SAFE_INTEGER;
  for (let [key, val] of sH) {
    if (val > max) {
      max = val;
      answer = key;
    }
  }
  return answer;
}

// 입출력 ---------------------------------------------------
let str = "BACBACCACCBDEDE";
console.log(mySolution(str));
console.log(solution(str));
