// 배열 비교하기

const solution = (arr1, arr2) => {
  if (arr1.length === arr2.length) {
    if (arr1.reduce((a, b) => a + b) > arr2.reduce((a, b) => a + b)) return 1
    else if (arr1.reduce((a, b) => a + b) < arr2.reduce((a, b) => a + b)) return -1
    return 0
  } else if (arr1.length > arr2.length) return 1
  else return -1
}
