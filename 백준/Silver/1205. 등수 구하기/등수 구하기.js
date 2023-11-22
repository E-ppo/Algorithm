const fs = require("fs")
const filePath = process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt"
const input = fs.readFileSync(filePath).toString().trim().split("\n")

const nsp = input[0].split(" ").map(Number)
if (nsp[0] === 0) return console.log(1)
const score = input[1].split(" ").map(Number)

let tesuRank = 1

for (i = 0; i < score.length; i++) {
  if (score[i] > nsp[1]) {
    tesuRank++
  } else if (score[nsp[2] - 1] >= nsp[1]) {
    return console.log(-1)
  }
}

console.log(nsp[2] < tesuRank ? -1 : tesuRank)
