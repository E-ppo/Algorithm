const fs = require("fs")
const filePath = process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt"
const input = Number(fs.readFileSync(filePath).toString().trim())

for (i = 0; i < input; i++) {
  let star = ""
  for (let j = input; j > i; j--) {
    star += "*"
  }
  console.log(star)
}
