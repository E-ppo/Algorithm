const fs = require("fs")
const filePath = process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt"
let [n, ...input] = fs.readFileSync(filePath).toString().trim().split("\n")

input = input.map(Number).sort((a, b) => a - b)
console.log(input.join("\n"))
