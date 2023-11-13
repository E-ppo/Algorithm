/*
	소문자로 된 단어(문자열)가 입력되면 그 단어의 가운데 문자를 출력하는 프로그램을 작성하세요.
	단, 단어의 길이가 짝수일 경우 가운데 2개의 문자를 출력합니다. 

	조건 
	첫 줄에 문자열이 입력된다.  문자열의 길이는 100을 넘지 않습니다. 
	첫 줄에 가운데 문자를 출력합니다. 
 */

function solution(s) {
  let answer
  let mid = Math.floor(s.length / 2)

  if (s.length % 2 !== 0) {
    answer = s[mid]
    // answer = s.substr(mid, 1)
  } else {
    answer = s[mid - 1] + s[mid]
    // answer = s.substr(mid-1, 2)
  }

  return answer
}
console.log(solution("study"))
