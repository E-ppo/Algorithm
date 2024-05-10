function solution(k, tangerine) {
  let size = 0
  const count = tangerine.sort((a, b) => a - b).reduce((acc, cur) => {
    if (cur === size) {
      acc[acc.length - 1]++
    } else {
      size = cur
      acc.push(1)
    }
    return acc
  }, [])

  return count.sort((a, b) => b - a).reduce((acc, cur) => {
    if (k > 0) {
      k -= cur
      acc++
    }
    return acc
  }, 0)
}