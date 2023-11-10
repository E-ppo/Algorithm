// L 만들기
const solution = (myString) => [...myString].map((i) => i.charCodeAt() < 108 ? 'l' : i).join('')
