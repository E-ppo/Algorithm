// rockPaperScissors

const solution = (rsp) => {
  const winArray = { 2: 0, 0: 5, 5: 2 }
  return [...rsp].map((i) => winArray[i]).join("")
}

console.log(solution("205"))
