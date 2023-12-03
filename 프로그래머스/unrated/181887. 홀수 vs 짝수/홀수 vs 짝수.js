const solution = (num_list) => {
  let sum1 = 0
  let sum2 = 0
  for (i = 1; i <= num_list.length; i++) {
    if (i % 2 === 0) sum1 += num_list[i - 1]
    else sum2 += num_list[i - 1]
  }
  return sum1 > sum2 ? sum1 : sum2
}