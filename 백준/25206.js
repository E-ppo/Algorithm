const fs = require("fs")
const filePath = process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt"
const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map((i) => i.split(" "))

const creditTable = {
  "A+": 4.5,
  A0: 4.0,
  "B+": 3.5,
  B0: 3.0,
  "C+": 2.5,
  C0: 2.0,
  "D+": 1.5,
  D0: 1.0,
  F: 0.0,
}

const solution = (input) => {
  let total = 0
  let average = 0
  for (i = 0; i < input.length; i++) {
    if (input[i][2] === "P") continue
    average += Number(input[i][1])
    total += Number(input[i][1]) * Number(creditTable[input[i][2]])
  }
  return total / average
}

console.log(solution(input))
