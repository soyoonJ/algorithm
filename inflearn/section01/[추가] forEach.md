# forEach

```javascript
// predicate는 함수 자리
// thisArg는 생략 가능
// function forEach(predicate, thisArg) {
//     for(let i=0; i<a.length; i++) {
//         predicate(a[i], i)
//     }
// }

a = [10, 11, 12, 13, 14, 15];
a.forEach(
  function (v, i) {
    console.log(v, i, this);
  },
  [1, 2]
);
```
