/*
	N개의 문자열이 입력되면 그 중 가장 긴 문자열을 출력하는 프로그램을 작성하세요

	조건
	첫 줄에 자연수 N이 주어진다 (3<=N<=30)
	두 번째 줄 부터 N개의 문자열이 주어진다.  문자열의 길이는 100을 넘지않습니다. 
	각 문자열의 길이는 서로 다릅니다. 
	첫 줄에 가낭 긴 문자열을 출력합니다. 
*/

function solution(s) {
  let answer = ""
  let count = Number.MIN_SAFE_INTEGER

  for (let x of s) {
    if (x.length > count) {
      count = x.length
      answer = x
    }
  }

  return answer
}
let str = ["teacher", "time", "student", "beautiful", "good"]
console.log(solution(str))
