//문자열 정수의 합

const solution = (num_str) => [...num_str].reduce((a, b) => Number(a) + Number(b))
