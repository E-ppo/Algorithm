// split은 객체에만 사용가능하니 한번 사용후에는 배열이 되므로 map을 사용해 중복split
const input = require("fs")
  .readFileSync(0)
  .toString()
  .trim()
  .split("\n")
  .map((x) => x.split(" "))
