function solution(n, k) {
    const list = []
    for(let i=n; i>0; i--) {
        i%k===0?list.push(i):i
    }
    
    return list.sort((a,b)=>a-b)
}