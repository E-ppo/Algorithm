const fs = require("fs")
const filePath = process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt"
const input = fs.readFileSync(filePath).toString().trim().split("\n")

// 그 해, 그 달의 날짜가 몇개인지 계산하는 함수
const returnDays = (year) => {
  const days = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
  if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) days[1] = 29
  return days
}

console.log(input)
