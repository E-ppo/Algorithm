const fs = require("fs")
const filePath = process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt"
const input = fs.readFileSync(filePath).toString().trim().split("\n")

const [n, tesuS, p] = input[0].split(" ").map(Number)
if (n === 0) return console.log(1)
const score = input[1].split(" ").map(Number)

let tesuRank = 1

for (i = 0; i < score.length; i++) {
  if (score[i] > tesuS) {
    tesuRank++
  } else if (score[p - 1] >= tesuS) {
    return console.log(-1)
  }
}

console.log(p < tesuRank ? -1 : tesuRank)
