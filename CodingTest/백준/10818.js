/*
	109612(KB)	984(ms)

const fs = require("fs")
const filePath = process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt"
const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map((i) => i.split(" ").map((j) => Number(j)))

const solution = (input) => {
  let numbers = input[1].sort((a, b) => a - b)
  return `${numbers[0]} ${numbers[numbers.length - 1]}`
}

console.log(solution(input))

 */

/*
	120476(KB)	844(ms)
 */
const fs = require("fs")
const filePath = process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt"
const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map((i) => i.split(" ").map((j) => Number(j)))

const solution = (input) => {
  let min = input[1][0],
    max = input[1][0]

  for (i = 0; i < +input[0]; i++) {
    if (input[1][i] < min) min = input[1][i]
    if (input[1][i] > max) max = input[1][i]
  }

  return `${min} ${max}`
}

console.log(solution(input))

/*
	90668(KB)	480(ms)

let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

let count = Number(input[0]);
let numbers = input[1].split(' ').map(x=> Number(x));

let max = numbers[0]; 
let min = numbers[0];

for (let i = 1; i < count; i++) {
  if (max < numbers[i]) {
    max = numbers[i];
  }
  
  if (min > numbers[i]) {
    min = numbers[i];
  }
}

console.log(`${min} ${max}`);

 */
