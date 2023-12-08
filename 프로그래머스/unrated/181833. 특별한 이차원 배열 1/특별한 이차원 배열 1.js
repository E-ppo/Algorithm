const solution = (n) => {
  let answer = []

  for (i = 0; i < n; i++) {
    let rowArr = []
    for (j = 0; j < n; j++) {
      if (i === j) {
        rowArr.push(1)
      } else rowArr.push(0)
    }
    answer.push(rowArr)
  }
  return answer
}
