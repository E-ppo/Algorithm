const solution = (arr, n) => {
  var answer = []

  for (i = 0; i < arr.length; i++) {
    for (j = 0; j < arr[i].length; j++) {
      if (i + j <= n) {
        answer.push(arr[i][j])
      }
    }
  }

  return answer.reduce((a, b) => a + b)
}