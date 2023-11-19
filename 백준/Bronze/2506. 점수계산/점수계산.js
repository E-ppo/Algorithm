const fs = require("fs")
const filePath = process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt"
const input = fs.readFileSync(filePath).toString().trim().split("\n")

const Numbers = input[1].split(" ").map((i) => Number(i))

let answer = 0
let count = 0

for (let x of Numbers) {
  if (x === 1) {
    count += 1
    answer += count
  } else {
    count = 0
  }
}

console.log(answer)
