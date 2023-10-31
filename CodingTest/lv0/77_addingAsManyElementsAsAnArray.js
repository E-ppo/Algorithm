// 배열의 원소만큼 추가하기
const solution = (arr) => [].concat(...arr.map((i) => Array(i).fill(i)))
