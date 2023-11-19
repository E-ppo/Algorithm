const solution = (score) => {
  let n = score.length
  let average = Array.from({ length: n }, () => 1)
  let answer = Array.from({ length: n }, () => 1)

  for (i = 0; i < n; i++) {
    average[i] = (score[i][0] + score[i][1]) / 2
  }

  for (i = 0; i < n; i++) {
    for (j = 0; j < n; j++) {
      if (average[j] > average[i]) answer[i]++
    }
  }
  return answer
}