const fs = require("fs")
const filePath = process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt"
const input = fs.readFileSync(filePath).toString().trim().split("\n").map(Number) // 배열의 각 요소를 숫자로 변환

const max = Math.max(...input)
const index = input.indexOf(max)
console.log(max)
console.log(index + 1)
