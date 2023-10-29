//배열에서 문자열 대소문자 변경하기
const solution = (strArr) =>
  strArr.map((i, index) => (index % 2 === 0 ? i.toLowerCase() : i.toUpperCase()))
