//뒤에서 5등까지

const solution = (num_list) => num_list.sort((a, b) => a - b).slice(0, 5)
