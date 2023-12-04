const solution = (num_list, n) => {
  let prevNum = []
  let afterNum = []

  for (i = 0; i < num_list.length; i++) {
    if (i < n) {
      prevNum.push(num_list[i])
    } else afterNum.push(num_list[i])
  }

  return [...afterNum, ...prevNum]
}