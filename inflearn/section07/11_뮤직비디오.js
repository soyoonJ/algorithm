// 내 풀이 --------------------------------------------------
// function mySolution(m, songs) {
//     // 평균?
//     const average = songs.reduce((a,b)=>a+b)/m;
//     // console.log(average)
//     for (x of songs) {
//     }
// }

// 강의 풀이 ------------------------------------------------
// m장 안에 배치하는 과정
// mid 값보다 크면 DVD 늘리기
function count(songs, capacity) {
    // DVD 한 장은 있어야 하니까 cnt=1로 시작
    let cnt=1, sum=0;
    for (let x of songs) {
        if(sum+x>capacity) {
            cnt++;
            sum=x;
        }
        else sum+=x;
    }
    return cnt;
}

// 전체 틀
function solution(m, songs) {
    let answer;
    // lt 초기값 : songs 중에 가장 큰 값
    let lt=Math.max(...songs);
    // rt 초기값 : songs 총합
    let rt=songs.reduce((a,b)=>a+b, 0);
    while(lt<=rt) {
        let mid=parseInt((lt+rt)/2);
        if(count(songs, mid) <= m) {
            answer=mid;
            rt=mid-1;
        }
        else lt=mid+1;
    }

    return answer;
}

// 입출력 ---------------------------------------------------
let arr=[1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(mySolution(3, arr));
console.log(solution(3, arr));
