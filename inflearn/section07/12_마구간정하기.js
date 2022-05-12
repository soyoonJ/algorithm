// 내 풀이 --------------------------------------------------
// function mySolution(c, stable) {
//     let answer;
//     stable.sort((a,b)=>a-b)
//     let lt = stable[0];
//     let rt = stable[stable.length-1]
//     let mid = stable[parseInt(lt+rt/2)]

//     return answer;
// }

// 강의 풀이 ------------------------------------------------
function count(stable, dist) {
    let cnt=1, ep=stable[0];
    for(let i = 1; i<stable.length; i++) {
        if(stable[i]-ep>=dist) {
            cnt++;
            ep=stable[i];
        }
    }
    return cnt;
}

function solution(c, stable) {
     let answer;
     stable.sort((a,b)=>a-b);
     let lt = 1;
     let rt = stable[stable.length-1];
     while(lt<=rt) {
         let mid = parseInt((lt+rt)/2);
        //  c마리 이상이 되어야 함
         if(count(stable, mid)>=c) {
             answer = mid;
             lt = mid+1;
         } else {
             rt = mid-1;
         }
     }
     return answer;
}

// 입출력 ---------------------------------------------------
let arr=[1, 2, 8, 4, 9];
// console.log(mySolution(3, arr));
console.log(solution(3, arr));
