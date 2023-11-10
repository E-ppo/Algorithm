const fs = require("fs")
const filePath = process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt"
const input = fs.readFileSync(filePath).toString().trim().split("\n").map(Number)

let sum = input.reduce((a, b) => a + b, 0)
let flag = false
for (let i = 0; i < 8; i++) {
  for (let j = i + 1; j < 9; j++) {
    if (sum - (input[i] + input[j]) == 100) {
      input.splice(j, 1)
      input.splice(i, 1)
      flag = true
      break
    }
  }
  if (flag) break
}

console.log(input.sort((a, b) => a - b).join("\n"))
