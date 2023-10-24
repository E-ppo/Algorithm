// 수 조작하기

const solution = (n, control) => {
  const controlArray = { w: (n) => n + 1, s: (n) => n - 1, d: (n) => n + 10, a: (n) => n - 10 }
  return [...control].reduce((a, b) => controlArray[b](a), n)
}

console.log(solution(0, "wsdawsdassw"))
