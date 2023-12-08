const fs = require("fs")
const filePath = process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt"
let input = fs.readFileSync(filePath).toString().trim()

if (input % 2 === 0) console.log("CY")
else console.log("SK")
