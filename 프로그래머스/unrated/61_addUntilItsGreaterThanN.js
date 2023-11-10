// n보다 커질 떄까지 더하기

const solution = (numbers, n) => numbers.reduce((a, b) => (a <= n ? a + b : a))
