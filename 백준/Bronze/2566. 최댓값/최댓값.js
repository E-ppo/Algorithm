const fs = require("fs")
const filePath = process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt"
const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map((i) => i.split(" ").map((j) => Number(j))) // 배열의 각 요소를 숫자로 변환

let maxValue = 0
let coordinate = [0, 0]

for (let i = 0; i < 9; i++) {
  for (let j = 0; j < 9; j++) {
    if (maxValue < input[i][j]) {
      maxValue = input[i][j]
      coordinate[0] = i
      coordinate[1] = j
    }
  }
}
console.log(maxValue)
console.log(`${coordinate[0]+1} ${coordinate[1]+1}`)
