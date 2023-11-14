const fs = require("fs")
const filePath = process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt"
const input = fs.readFileSync(filePath).toString().trim().split("\n")

// console.log(input[1].map((i) => Number(i)))
const numbers = input[1].split(" ").map((i) => Number(i))

const answer = numbers.filter((i, idx) => numbers.indexOf(i) === idx).sort((a, b) => a - b)
console.log(answer.join(" "))
