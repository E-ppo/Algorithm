// 꼬리문자열 

const solution = (str_list, ex) => str_list.filter(i => !i.includes(ex)).join('')
