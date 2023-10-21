// 대문자와 소문자
const solution = (my_string) => [...my_string].map((i) => (i === i.toUpperCase() ? i.toLowerCase() : i.toUpperCase())).join("")

console.log(solution("abCdEfghIJ"))
