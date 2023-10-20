//* 짝수 홀수의 개수

const solution = (num_list) => {
  const even = num_list.filter((item) => item % 2 === 0).length
  return [even, num_list.length - even]
}
