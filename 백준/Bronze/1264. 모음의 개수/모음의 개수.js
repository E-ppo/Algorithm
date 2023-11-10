const fs = require("fs")
const filePath = process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt"
const input = fs.readFileSync(filePath).toString().trim().split("\n")

const vowel = ["a", "e", "i", "o", "u"]

for (i = 0; i < input.length-1; i++) {
  const low = input[i].toLowerCase()
  console.log([...low].filter((i) => ["a", "e", "i", "o", "u"].includes(i)).length)
}
