const fs = require("fs")
const filePath = process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt"
const input = fs.readFileSync(filePath).toString().trim().split("\n")

for (let i = 0, len = input.length - 1; i < len; i++) {
  let arr = input[i].split(" "),
    n = +arr.shift(),
    res = []

  for (let j = 0; j < n; j++) {
    if (res[res.length - 1] !== arr[j]) {
      res.push(arr[j])
    }
  }

  res.push("$")
  console.log(res.join(" "))
}
