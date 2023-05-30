function solution(num_list) {
    let odd = num_list[0]
    let even = 0
    num_list.reduce((acc,cur,i) => (i+1)%2 ? odd+=cur : even+=cur)
    
    return Math.max(odd, even)
}