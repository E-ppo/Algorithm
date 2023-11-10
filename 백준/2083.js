const fs = require("fs")
const filePath = process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt"
const input = fs.readFileSync(filePath).toString().trim().split("\n")

for (i = 0; i < input.length - 1; i++) {
  const splitInput = input[i].split(" ")
  console.log(
    `${splitInput[0]} ${
      Number(splitInput[1]) > 17 || Number(splitInput[2]) >= 80 ? "Senior" : "Junior"
    }`
  )
}
