//* 배열의 평균값

const solution = (numbers) =>
  numbers.reduce((sum, value) => sum + value) / numbers.length;
