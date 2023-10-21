//n의 배수 고르기
const solution = (n, numlist) => numlist.filter((i) => i % n === 0)

console.log(solution(3, [4, 5, 6, 7, 8, 9, 10, 11, 12]))
