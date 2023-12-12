const solution = (a, b) => {
  let sum = Number(`${a}${b}`)
  let mul = 2 * a * b

  if (sum === mul) return sum
  else return sum > mul ? sum : mul
}