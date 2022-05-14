// 재귀함수 & 스택프레임 개념 설명을 위한 문제

function solution(n) {
    // 재귀함수 : 자기가 자기 자신을 호출
    // DFS : 깊이우선탐색, L : level의 약자
    function DFS(L) {
        if(L==0) return;
        // DFS(L-1)과 console.log(L)의 위치만 바꿨는데 출력 순서 뒤집어지는 이유 > stack과 관련
        // stack
        else {
            // DFS(L-1)을 만나는 순간 바로 다시 DFS(L)로 넘어감 (4번째 라인)
            // 값이 stack에 쌓인 상태
            // 3,2,1까지 끝나고 L이 0이 되어 return 되면 복귀주소인 DFS(L-1)로 넘어옴
            DFS(L-1);
            // 스택에서 값이 꺼내짐 (후입선출 => 1,2,3 순서로 출력됨)
            console.log(L);
        }
    }
    DFS(n)
}

solution(3);