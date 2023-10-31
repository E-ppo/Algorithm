// 카운트업  countUp

const solution = (start_num, end_num) =>
  Array(end_num - start_num + 1)
    .fill(start_num)
    .map((i, idx) => i + idx)
