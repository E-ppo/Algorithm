const fs = require("fs")
const filePath = process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt"
const input = fs.readFileSync(filePath).toString().trim().split("\n")
input.splice(0, 1)

const answer = input.sort((a, b) => {
  if (a.length !== b.length) {
    return a.length - b.length
  }

  // 길이가 같으면 사전 순으로 정렬
  return a.localeCompare(b)
})

const unique = Array.from(new Set(answer))
for (let x of unique) {
  console.log(x)
}
