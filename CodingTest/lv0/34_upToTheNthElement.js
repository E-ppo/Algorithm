//n번째 원소까지

const solution = (num_list, n) => num_list.filter((item, index) => index < n)

console.log(solution([5, 2, 1, 7, 5], 3))
