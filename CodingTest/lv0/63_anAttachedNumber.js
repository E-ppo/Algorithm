// 이어붙인수 

const solution = (num_list) => Number(num_list.filter(i => i%2===0).join(''))+ Number(num_list.filter(i => i%2 !==0).join(''))
