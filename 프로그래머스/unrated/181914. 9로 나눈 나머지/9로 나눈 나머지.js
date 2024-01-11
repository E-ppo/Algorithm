const solution = (number) =>  [...number].reduce((acc, cur) => acc+Number(cur), 0) % 9
