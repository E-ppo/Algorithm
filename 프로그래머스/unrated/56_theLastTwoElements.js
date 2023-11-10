// 마지막 두 원소

const solution = (num_list) => {
  const [a, b] = num_list.slice(-2)
  return [...num_list, b > a ? b - a : b * 2]
}

console.log(solution([2, 1, 6]))
