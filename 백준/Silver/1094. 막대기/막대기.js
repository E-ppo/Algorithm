const fs = require("fs")
const filePath = process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt"
let input = Number(fs.readFileSync(filePath).toString().trim())

let count = 0

while (input > 0) {
  if (input % 2 === 1) {
    count++
  }
  input = Math.floor(input / 2)
}

console.log(count)
