// 문자열 바꿔서 찾기

const solution = (myString, pat) =>
  [...myString]
    .map((i) => (i === "A" ? "B" : "A"))
    .join("")
    .includes(pat)
    ? 1
    : 0
