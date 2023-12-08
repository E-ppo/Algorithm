const solution = (arr) => {
  let answer = 1
  let len = arr.length

  for (i = 0; i < len; i++) {
    for (j = 0; j < len; j++) {
      if (arr[i][j] !== arr[j][i]) answer = 0
    }
  }

  return ~~answer
}