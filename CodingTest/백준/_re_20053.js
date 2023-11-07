const fs = require("fs")
const filePath = process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt"
const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map((i) => i.split(" ").map((j) => Number(j)))

const numbers = input.filter((i) => i[1])

for (i = 0; i < numbers.length; i++) {
  let min = numbers[i][0],
    max = numbers[i][0]
  for (j = 0; j < numbers[i].length; j++) {
    if (numbers[i][j] > max) max = numbers[i][j]
    if (numbers[i][j] < min) min = numbers[i][j]
  }
  console.log(`${min} ${max}`)
}
