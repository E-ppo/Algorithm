const fs = require("fs")
const filePath = process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt"
const input = fs.readFileSync(filePath).toString().trim().split("\n")

const [count, A, B] = input.map((i) => i.split(" ").map(Number))

const setB = new Set(B)
const setA = new Set(A)

const charA = A.filter((x) => !setB.has(x)).length
const charB = B.filter((x) => !setA.has(x)).length

console.log(charA + charB)
