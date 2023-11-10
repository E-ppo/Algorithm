// 카운트다운

const solution = (start, end_num) =>
  Array(start - end_num + 1)
    .fill(start)
    .map((s, i) => s - i)
