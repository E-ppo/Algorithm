const fs = require("fs")
const filePath = process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt"
let input = fs.readFileSync(filePath).toString().trim().split("\n").map(Number)

const sortNum = [...input].sort((a, b) => b - a).slice(0, 5)

// 합
console.log(sortNum.reduce((a, b) => a + b))

let indexArray = []

for (let x of sortNum) {
  indexArray.push(input.indexOf(x) + 1)
}

//순서
console.log(indexArray.sort((a, b) => a - b).join(" "))
