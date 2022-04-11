// 최소직사각형

// 솔직히 이 문제를 보고 '어떻게 이게 LEVEL1이야?!?!?!!?!?!?!?!!?!?!!?!!' 라는 생각이 머리 속에서 마구마구 뛰어다녔다.
// 그동안의 문제는 정말 천사같이 친절하고 착하고 자세하고 행복했구나를 느끼면서
// 문제 분석에만 오랜 시간을 들였다.

// 제출한 코드
function solution(sizes) {
  var big = [];
  var small = [];

  for (let i = 0; i < sizes.length; i++) {
    if (sizes[i][0] > sizes[i][1]) {
      big.push(sizes[i][0]);
      small.push(sizes[i][1]);
    } else {
      big.push(sizes[i][1]);
      small.push(sizes[i][0]);
    }
  }
  return Math.max(...big) * Math.max(...small);
}

// 우선, 가로길이와 세로길이를 비교해서 큰 값과 작은 값을 분리한다. 회전시키는 것이 가능하기 때문에 큰값/작은 값끼리 모아 보는 것이 가장 빠르고, 또 그래야 모든 명함을 수납할 수 있는 가장 작은 지갑을 만들 수 있다.

// 코드를 생성할 때 쉽게 구분할 수 있도록 변수는 big과 small로 빈 배열을 생성했다.
// 그리고 sizes의 length를 for문으로 돌면서, 각 요소 간의 비교가 가능하도록 만들었다.
// 가로가 길 수도 있고, 세로가 길 수도 있기 때문에 if 문으로 상황을 나누어 비교 결과에 따라 big과 small의 요소로 들어가도록 만들었다.

// 최종적으로 big 배열과 small 배열이 만들어 졌다면, 그 중에서 가장 큰 값을 반환하여 곱해주어야 하기 때문에
// 최대값을 골라주는 Math.max(...arr)라는 매서드를 활용했다.
// 그리고 추출된 값들을 서로 곱하여 결과값을 반환했다.

// 다른 사람이 작성한 코드
function solution(sizes) {
  const [hor, ver] = sizes.reduce(
    ([h, v], [a, b]) => [
      Math.max(h, Math.max(a, b)),
      Math.max(v, Math.min(a, b)),
    ],
    [0, 0]
  );
  return hor * ver;
}
// Math.max(a,b)와 Math.min(a,b)로 나누어 한번에 최소값과 최대값을 분리했고,
// h,v와 추가로 비교할 수 있도록 넣은 후 각 분류에서 Math.max를 적용했다.
// 결국 왼쪽은 큰 값 중 큰 값 / 오른쪽은 작은 값 중 큰 값을 나타내는 부분이다.
// 한번에 적어 효율적이긴 하지만 아직까지 reduce가 이렇게 자유자재로 머리속에서 떠오르지는 않는다.
// 문제를 풀 때 가능하다면 몇 번씩 쓰는 연습 중에 있고, 나머지는 이렇게 다른 제출 코드들을 분석해보면서 익혀나가야겠다.

// 이번 문제는 어려웠던만큼 풀어낸 다음 한번 더 얘기하는 시간을 가졌는데,
// 직접 코드를 설명하고나니 덕분에 코드가 좀 더 기억에 잘 남아있다.