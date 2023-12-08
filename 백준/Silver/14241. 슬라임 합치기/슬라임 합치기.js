const fs = require("fs")
const filePath = process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt"
let [n, ...input] = fs.readFileSync(filePath).toString().trim().split("\n")

let totalScore = 0

let slimes = input[0]
  .split(" ")
  .map(Number)
  .sort((a, b) => b - a)

for (let i = 0; i < slimes.length - 1; i++) {
  totalScore += slimes[i] * slimes[i + 1]
  slimes[i + 1] += slimes[i]
}

console.log(totalScore)
