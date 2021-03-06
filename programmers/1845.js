// 폰켓몬
// https://programmers.co.kr/learn/courses/30/lessons/1845

// // filter 사용 방법
// function solution (nums) {
//     // 최대 가져갈 수 있는 수
//     const max = nums.length/2
//     // 중복제거한 배열
//     const filter = nums.filter((e,i)=> nums.indexOf(e) === i).length
    
//     return filter > max ? max : filter
// }

// 이게 더 빠름
// new Set 사용할 때는 length 말고 size 쓰면 한방에 해결 가능!
function solution(nums) {
    // 최대 가져갈 수 있는 폰켓몬 수
    const max = nums.length/2
    // 폰켓몬 중복제거
    // const origin = [...new Set(nums)]
    const origin = new Set(nums).size
    // console.log(...origin)
    // return origin.length > max ? max : origin.length
    return origin > max ? max : origin
}