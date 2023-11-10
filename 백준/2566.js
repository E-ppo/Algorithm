const fs = require("fs")
const filePath = process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt"
const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map((i) => i.split(" ").map((j) => Number(j))) // 배열의 각 요소를 숫자로 변환

let max = 0
let y = 0
let x = 0

for (i = 0; i < 9; i++) {
  for (j = 0; j < 9; j++) {
    if (max < input[i][j]) {
      max = input[i][j]
      y = i + 1
      x = j + 1
    }
  }
}
console.log(max)
console.log(`${y} ${x}`)
