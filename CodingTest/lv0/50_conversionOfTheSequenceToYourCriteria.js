// 조건에 맞게 수열 변환하기

const solution = (arr) =>
  arr.map((i) => (i >= 50 && i % 2 === 0 ? i / 2 : i < 50 && i % 2 !== 0 ? i * 2 : i))
