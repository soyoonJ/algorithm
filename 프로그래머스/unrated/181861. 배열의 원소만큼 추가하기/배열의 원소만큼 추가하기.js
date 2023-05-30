function solution(arr) {
    const new_arr = []
    arr.map(el => {
        for(let i=0; i<el; i++) {
            new_arr.push(el)
        }
    })
    
    return new_arr
}