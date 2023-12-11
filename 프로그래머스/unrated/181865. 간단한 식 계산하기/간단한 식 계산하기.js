const solution = (binomial) => {
  const value = binomial.split(" ")
  let answer = 0

  switch (value[1]) {
    case "+":
      answer = Number(value[0]) + Number(value[2])
      break
    case "-":
      answer = Number(value[0]) - Number(value[2])
      break
    case "*":
      answer = Number(value[0]) * Number(value[2])
      break
    default:
  }
  return answer
}