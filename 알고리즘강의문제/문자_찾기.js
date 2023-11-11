/*
	한 개의 문자열을 입력받고, 특정 문자를 입력받아 해당 특정문자가 입력받은 문자열에 몇 개 존재하는지 알아내는 프로그램을 작성하세요
	
	조건
	문자열의 길이는  100을 넘지 않습니다. 
	첫 줄에 해당하는 문자열을 출력합니다. 
*/

const solution = (s, t) => {
  // let count = 0
  // for (let x of s) {
  //   if (x === t) count += 1
  // }
  // return count

  return s.split(t).length - 1
}

let str = "COMPUTERPROGRAMMING"
console.log(solution(str, "R"))
