// 가운데 글자 가져오기
// 내 풀이
function solution(s) {
    var answer = ''
    if (s.length%2 == 0) {
      var location = s.length/2 -1
      return answer = s.substr(location,2)
    } else {
      var location = Math.ceil(s.length/2)-1
      return answer = s.substr(location,1)
    }
    return answer;
  }

  
//   가운데 글자를 반환하라고 해서 처음 세문제 중 가장 막혔던 문제였다.
//   구글링으로 검색한 끝에 알아낸 .substr과 Math.ceil.
//   substr은 비슷한 코드로 .substring이 있어서, 문제 풀고 난 후에도 개념을 구분해서 생각하는데에 시간을 할애했다.
//   뒤에 ing 차이로 자칫하면 다른 내용이 추출될 수 있어,
//   특히나 자동완성이 되는 vs code 에서 추후에 활용하려면 미리 헷갈리지 않게 잘 잡고 있어야겠다는 생각이 들었다.

// 다른사람들이 짠 코드
function solution(s) {
    return s.substr(Math.ceil(s.length / 2) - 1, s.length % 2 === 0 ? 2 : 1);
}


// 구현하고 뿌듯했는데 다른 사람이 짠 코드가 딱 한줄이라 처음 보고 이게 뭐지?!?!?!?!?!?!?!?!?!?!?! 하고 한참을 들여다 봤다.
// 처음에 봤을 땐 이게 뭐지 싶었는데 다른 문제들에서도 반복적으로 나오고 있어서 점차 눈에 익다보니,
// 대략적으로 해석할 수 있는 부분까지 온 것 같다.
// 이렇게 하면 코드 자체도 훨씬 짧기도 해서 비슷한 코드 풀이를 계속 보면서 눈에 익혀 나가야 겠다는 생각을 했다.