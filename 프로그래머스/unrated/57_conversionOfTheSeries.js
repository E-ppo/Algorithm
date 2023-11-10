//수열변환하기 3
const solution = (arr, k) => {
  //맵이 돌때마다 조건을 계산하게 하지 않기 위해 미리 k의 조건에 따른 함수 지정
  const cur = k % 2 !== 0 ? (a) => a * k : (a) => a + k
  return arr.map((i) => cur(i))
}
