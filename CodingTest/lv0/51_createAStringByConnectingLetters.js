// 글자 이어 붙여 문자열 만들기

const solution = (my_string, index_list) => index_list.map((i) => my_string[i]).join("")

console.log(solution("zpiaz", [1, 2, 0, 0, 3]))
