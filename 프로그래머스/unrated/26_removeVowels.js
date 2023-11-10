//모음제거

const solution = (my_string) => [...my_string].filter((i) => !["a", "e", "i", "o", "u"].includes(i)).join("")

//my_string.replace(/[aeiou]/g, '') ㅋㅋㅋㅋㅋ정규식 쓸껄 겁나 어렵게 생각했네
