const fs = require("fs")
const filePath = process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt"
const input = fs.readFileSync(filePath).toString().trim()

const solution = (input) => {
  const N = Number(input)
  return Math.sqrt(N)
}

console.log(solution(input))
