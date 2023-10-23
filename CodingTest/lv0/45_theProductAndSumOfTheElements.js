// prettier-ignore
//원소들의 곱과 합
const solution = (num_list) => (num_list.reduce((a, b) => a * b) < Math.pow(num_list.reduce((a, b) => a + b),2) ? 1 : 0)
