// 내 풀이 --------------------------------------------------
function mySolution(s, t) {
  let answer = 0;

  // 3글자씩 map 돌린 다음에 하단 실행
  for (let rt = t.length - 1; rt < s.length; rt++) {
    let tmp = s.substring(rt - 2, rt + 1);
    let sH = new Map();
    for (let x of tmp) {
      if (sH.has(x)) sH.set(x, sH.get(x) + 1);
      else sH.set(x, 1);
    }

    let anagram = true;
    for (x of t) {
      if (!sH.has(x) || sH.get(x) === 0) anagram = false;
      else sH.set(x, sH.get(x) - 1);
    }
    if (anagram === true) answer++;
  }
  return answer;
}

// 강의 풀이 ------------------------------------------------
// function compareMaps(map1, map2) {
//   if (map1.size !== map2.size) return false;
//   for (let [key, val] of map1) {
//     if (!map2.has(key) || map2.get(key) !== val) return false;
//   }
//   return true;
// }
// function solution(s, t) {
//   let answer = 0;
//   let tH = new Map();
//   let sH = new Map();

//   // t 먼저 비교
//   for (let x of t) {
//     if (tH.has(x)) tH.set(x, tH.get(x) + 1);
//     else tH.set(x, 1);
//   }
//   // s 맨앞 두자리 수 먼저 비교
//   let len = t.length - 1;
//   for (let i = 0; i < len; i++) {
//     if (sH.has(s[i])) sH.set(s[i], sH.get(s[i]) + 1);
//     else sH.set(s[i], 1);
//   }
//   // rt 추가해서 나머지 다 돌아가면서 비교
//   let lt = 0;
//   for (let rt = len; rt < s.length; rt++) {
//     if (sH.has(s[rt])) sH.set(s[rt], sH.get(s[rt]) + 1);
//     else sH.set(s[rt], 1);
//     if (compareMaps(sH, tH)) answer++;
//     sH.set(s[lt], sH.get(s[lt]) - 1);
//     if (sH.get(s[lt]) === 0) sH.delete(s[lt]);
//     lt++;
//   }

//   return answer;
// }

// 강의 풀이2 ------------------------------------------------
// 투포인터/슬라이딩/해쉬 모두 사용해서 for문 한번만 돌기!!
function solution(s, t) {
  let answer = 0;
  let sH = new Map();
  // t를 -1로 세팅하고 값이 있으면 더해나가는 방법
  for (let x of t) {
    sH.set(x, (sH.get(x) || 0) - 1);
  }
  // 기본값 먼저 세팅하기
  let len = t.length - 1;
  for (let i = 0; i < len; i++) {
    sH.set(s[i], (sH.get(s[i]) || 0) + 1);
    if (sH.get(s[i]) === 0) sH.delete(s[i]);
  }
  // 투포인터로 업데이 for문 한번 싹 돌면서 업데이트 값 반영
  let lt = 0;
  for (let rt = len; rt < s.length; rt++) {
    // rt에 대한 판단 후 반영해주는 작업 및 size 체크해서 answer 카운팅
    sH.set(s[rt], (sH.get(s[rt]) || 0) + 1);
    if (sH.get(s[rt]) === 0) sH.delete(s[rt]);
    if (sH.size === 0) answer++;
    // 기존 lt를 지우고 오른쪽으로 한칸 이동시키는 작업
    sH.set(s[lt], (sH.get(s[lt]) || 0) - 1);
    if (sH.get(s[lt]) === 0) sH.delete(s[lt]);
    lt++;
  }
  return answer;
}
console.log(solution("bacacbcba", "abc"));

// 입출력 ---------------------------------------------------
let a = "bacaAacba";
let b = "abc";
console.log(mySolution(a, b));
console.log(solution(a, b));
