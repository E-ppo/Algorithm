// 할일목록

const solution = (todo_list, finished) => todo_list.filter((i, idx) => !finished[idx])
