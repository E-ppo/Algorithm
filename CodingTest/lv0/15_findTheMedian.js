//* 중앙값 구하기

const solution = (array) =>
  array.sort((a, b) => a - b)[Math.trunc(array.length / 2)];
