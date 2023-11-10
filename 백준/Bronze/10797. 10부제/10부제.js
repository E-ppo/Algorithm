const fs = require("fs")
const filePath = process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt"
const input = fs.readFileSync(filePath).toString().trim().split("\n")

const num = Number(input[0])
const numbers = input[1].split(" ").map((i) => Number(i))

let count = 0

for (i = 0; i < numbers.length; i++) {
  if (numbers[i] === num) count += 1
}

console.log(count)
