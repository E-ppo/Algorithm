// n개 간격의 원소들
const solution = (num_list, n) => num_list.filter((i, idx) => idx % n === 0)
