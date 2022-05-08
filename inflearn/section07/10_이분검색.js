// 내 풀이 --------------------------------------------------
function mySolution(target, arr) {
    let answer = 1;
    arr.sort((a,b)=>a-b)
    // console.log(arr)
    for (x of arr) {
        if (x===target) break;
        else answer++;
    }
    return answer;
}

// 강의 풀이 ------------------------------------------------
// 이분검색 풀이 log로 따져서 가능
// 8개면 3번, 1024개면 10번만에 비교 가능
function solution(target, arr) {
    let answer;
    arr.sort((a,b) => a-b);
    let lt = 0, rt = arr.length-1;
    // mid값이랑 비교하고 또 자르고 비교하고 자르고 비교하고 반복
    while(lt<=rt) {
        let mid = parseInt((lt+rt)/2);
        if(arr[mid]===target) {
            answer = mid+1;
            break;
        }
        else if(arr[mid]>target) rt=mid-1;
        else lt = mid+1;
    }

    return answer;
}

// 입출력 ---------------------------------------------------
let arr=[23, 87, 65, 12, 57, 32, 99, 81];
console.log(mySolution(32, arr));
console.log(solution(32, arr));
