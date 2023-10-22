// 접두사인지 확인하기

const solution = (my_string, is_prefix) => (my_string.slice(0, is_prefix.length) === is_prefix ? 1 : 0)

console.log(solution("banana", "ban"))
