const fs = require("fs")
const filePath = process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt"
const input = Number(fs.readFileSync(filePath).toString().trim())

for (i = 0; i < input; i++) {
  let star = ""
  for (let j = 1; j <= input; j++) {
    if (j < input - i) {
      star += " "
    } else {
      star += "*"
    }
  }
  console.log(star)
}
