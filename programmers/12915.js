// 문자열 정렬하기

function solution(strings, n) {
    // for문을 돌면서 i번째의 n번째 텍스트를 출력한다.
    for (let i=0; i<strings.length; i++) {
        const compare = strings[i][n]
        // 출력한 값을 각 단어의 앞에 붙여 업데이트 한다.
        strings[i] = compare + strings[i]
    }
    
    // 업데이트 된 strings를 배열한다.
    strings.sort();
    console.log(strings)
    
    // 임의로 붙여주었던 맨 앞자리 (0번째 인덱스) 문자를 slice를 활용하여 제거해준다.
    for (let i=0; i<strings.length; i++) {
        strings[i] = strings[i].slice(1)
    }
    
    return strings;
    
    // cf. localeCompare 활용 방법
    // return strings.sort((a,b)=> a[n]==b[n]?a.localeCompare(b):a[n].localeCompare(b[n]))
    
}