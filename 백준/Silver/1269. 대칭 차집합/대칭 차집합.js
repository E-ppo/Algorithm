const fs = require("fs")
const filePath = process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt"
const input = fs.readFileSync(filePath).toString().trim().split("\n")

const [count, A, B] = input.map((i) => i.split(" ").map(Number))

const setB = new Set(B)
const setA = new Set(A)

let charA = 0
let charB = 0

for (let x of A) {
  if (!setB.has(x)) {
    charA++
  }
}

for (let x of B) {
  if (!setA.has(x)) {
    charB++
  }
}

console.log(charA + charB)
