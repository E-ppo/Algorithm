const fs = require("fs")
const filePath = process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt"
const [nums, input] = require('fs').readFileSync(filePath).toString().trim().split('\n');
let [N, L] = nums.split(' ').map(Number);
const height = input.split(' ').map(Number).sort((a, b) => a - b);
for (const h of height) {
  if (L >= h) L++;
  else break;
}
console.log(L);