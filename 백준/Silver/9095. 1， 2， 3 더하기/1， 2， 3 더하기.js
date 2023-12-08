const fs = require("fs")
const filePath = process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt"
let [n, ...input] = fs.readFileSync(filePath).toString().trim().split("\n")

input = input.map(Number)

const num = [0, 1, 2, 4]

for (let i = 4; i <= Math.max(...input); i++) {
  num[i] = num[i - 3] + num[i - 2] + num[i - 1]
}

input.forEach((v) => {
  console.log(num[v])
})
