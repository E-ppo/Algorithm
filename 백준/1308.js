const fs = require("fs")
const filePath = process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt"
const input = fs.readFileSync(filePath).toString().trim().split("\n")

const start = input[0].split(" ").map((i) => Number(i))
const end = input[1].split(" ").map((i) => Number(i))

const isLeapYear = (year) => ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0 ? 1 : 0)
const returnDays = (year, month, day) => {
  const monthDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
  let returnValue = 0

  for (i = 1; i < year; i++) {
    returnValue += 365 + isLeapYear(i)
  }

  for (i = 1; i < month; i++) {
    if (i === 2) returnValue += isLeapYear(year)
    returnValue += monthDays[i]
  }
  return (returnValue += day)
}

const startDays = returnDays(start[0], start[1], start[2])
const endDays = returnDays(end[0], end[1], end[2])

if (
  end[0] - start[0] > 1000 ||
  (end[0] - start[0] === 1000 && end[1] > start[1]) ||
  (end[0] - start[0] === 1000 && end[1] === start[1] && end[2] === start[2])
)
  console.log("gg")
else console.log(endDays - startDays)
