const solution = (my_string, num1, num2) => {
  let answer = [...my_string]
  const length = answer.length

  for (i = 0; i < length; i++) {
    if (i === num1) {
      answer[i] = my_string[num2]
    } else if (i === num2) {
      answer[i] = my_string[num1]
    }
  }

  return answer.join("")
}
