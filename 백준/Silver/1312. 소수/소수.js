const fs = require("fs")
const filePath = process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt"
const input = fs.readFileSync(filePath).toString().trim().split("\n")[0].split(" ").map(Number)

let a = input[0]
let b = input[1]
let n = input[2]

let remainder = a % b

for (let i = 0; i < n - 1; i++) {
  remainder = (remainder * 10) % b
}

console.log(Math.floor((remainder * 10) / b))
