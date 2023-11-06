/*
	삼각형 판별하기 
	길이가 서로 다른 A, B, C 세 개의 막대 길이가 주어지면
	이 세 막대로 삼각형을 만들 수 있으면 'YES'를 출력하고, 만들 수 없으면 'NO'를 출력한다. 
 */

// 세변의 길이가 주어질 때 삼각형이 될 수 있는 조건은 두 변의 길이의 합이 나머지 한 변의 길이보다 커야 함

const solution = (a, b, c) => {
  // 가장 긴 막대의 길이를 구해야함
  let max
  let sum = a + b + c

  if (a < b) max = b
  else answer = a
  if (c > max) max = c

  if (sum - max > max) return "YES"
  else return "NO"
}

console.log(solution(13, 33, 17))
