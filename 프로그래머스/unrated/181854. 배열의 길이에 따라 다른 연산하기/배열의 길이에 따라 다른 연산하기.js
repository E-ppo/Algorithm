const solution = (arr, n) => {
  var answer = []

  const odd = arr.length % 2 === 0 ? false : true

  for (i = 0; i < arr.length; i++) {
    if (odd && i % 2 === 0) {
      answer.push((arr[i] += n))
    } else if (!odd && i % 2 !== 0) {
      answer.push((arr[i] += n))
    } else answer.push(arr[i])
  }

  return answer
}