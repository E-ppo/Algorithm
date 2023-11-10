/*
	자연수 N이 입력되면 1부터 N까지의 합을 출력하는 프로그램을 작성하세요
	조건 : 첫 번째 줄에 20이하의 자연수 N이 입력된다. 
 */

const solution = (n) => {
  let answer = 0
  for (i = 1; i <= n; i++) {
    // 1부터 n까지의 합
    answer += i
  }
  return answer
}

console.log(solution(6))
