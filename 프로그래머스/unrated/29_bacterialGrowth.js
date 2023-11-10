//세균증식

const solution = (n, t) =>
  Array(t)
    .fill(2)
    .reduce((a, b) => a * b) * n

console.log(solution(7, 15))

// n*Math.pow(2,t)
// n << t;
