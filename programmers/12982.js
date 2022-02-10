// 방법1. 이게 더 빠름!
function solution(d, budget) {
    let count = 0;
    let sum = 0;
    
    d.sort((a,b)=>a-b)
    for(let i=0; i<d.length; i++) {
        sum += d[i]
        budget-sum >= 0 ? count ++ : count;
    }
    return count;
}


// 방법2.
// function solution(d, budget) {
//     let count = 0;
//     let sum = 0;
    
//     d.sort((a,b)=>a-b).map(e=>(budget-(sum+=e))>=0?count++:count)
//     return count;
// }

