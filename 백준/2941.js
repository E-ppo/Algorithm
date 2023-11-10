const fs = require("fs")
const filePath = process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt"
const input = fs.readFileSync(filePath).toString().trim()

const croatia = ["c=", "c-", "dz=", "d-", "lj", "nj", "s=", "z="]
const solution = (input) => {
  for (let alpha of croatia) {
    input = input.replaceAll(alpha, "C")
  }
  return input.length
}

console.log(solution(input))
