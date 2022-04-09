// 2016년
function solution(a, b) {
  var day = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  var date = new Date(`2016, ${a}, ${b}`);
  return day[date.getDay()];
}

// .getDay()를 통해 일~토까지의 요일을 숫자로 반환받을 수 있다.
// day에 .getDay()를 붙여서 n번째 요소를 출력해낸다.
