function solution(lottos, win_nums) {
    var answer = [];
    var correct = 0
    var count = 0
    
    // 확실히 일치하는 개수 구하기 
    for (let i=0; i<6; i++) {
        if(win_nums.includes(lottos[i])) {
            correct += 1
        }
    }

    // 최저 등급 구하기 (7등은 없기 떄문에 고려 필요)
    var min = 7-correct >= 6 ? 6 : 7-correct;
    
    // 0의 개수 구하기
    for (let j=0; j<6; j++) {
        if (lottos[j]===0) {
            count += 1
        } 
    }   
    
    // 최고 등급 구하기 (0등은 없기 때문에 같이 고려 필요)
    var max = 6-correct-count+1 >= 0? 7-correct-count:1
    
    console.log(correct)
    console.log(count)

    answer = [max, min]
    
    
    return answer;
}