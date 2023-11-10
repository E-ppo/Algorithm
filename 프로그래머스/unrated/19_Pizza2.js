//* 피자나누기 2

const solution = (n) => {
  let result = 1
  while ((result * 6) % n) {
    result++
  }
  return result
}
