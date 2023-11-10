const fs = require("fs")
const filePath = process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt"
const input = fs.readFileSync(filePath).toString().trim().split("\n")

const solution = (input) => {
  const n = Number(input[0])
  const words = input.slice(1)

  let count = n

  for (let i = 0; i < n; i++) {
    const word = words[i]
    for (let j = 0; j < word.length - 1; j++) {
      if (word[j] !== word[j + 1] && word.slice(j + 1).includes(word[j])) {
        count--
        break
      }
    }
  }

  console.log(count)
}

solution(input)
