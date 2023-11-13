/*
	소문자로 된 한개의 문자열이 입력되면 중복된 문자를 제거하고 출력하는 프로그램을 작성하세요 
	제거된 문자열의 각 문자는 원래 문자열의 순서를 유지합니다. 

	조건 
	첫 줄에 문자열이 입력됩니다. 
	첫 줄에 중복문자가 제거된 문자열을 출력합니다. 
 */

// console.log(s.indexOf("k")) // 첫번째로 발견하는 문자열의 인덱스를 추출

function solution(s) {
  let answer = ""
  for (i = 0; i < s.length; i++) {
    if (s.indexOf(s[i]) === i) answer += s[i]
  }
  return answer
}
console.log(solution("ksekkset"))
