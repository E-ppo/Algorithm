const fs = require("fs")
const filePath = process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt"
const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map((i) => Number(i))

let sum = 0
min = Number.MAX_SAFE_INTEGER

for (let x of input) {
  if (x % 2 !== 0) {
    sum += x
    if (min > x) min = x
  }
}

if (sum === 0) {
  console.log(-1)
} else {
  console.log(sum)
  console.log(min)
}
