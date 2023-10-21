//숨어있는 숫자의 덧셈 (1)

// const solution = (my_string) => [...my_string].filter((i) => i.charCodeAt() < 65).reduce((a, b) => Number(a) + Number(b))xw
const solution = (my_string) => [...my_string].filter((i) => !isNaN(i)).reduce((a, b) => Number(a) + Number(b))

console.log(solution("aAb1B2cC34oOp"))
