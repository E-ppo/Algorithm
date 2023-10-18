//  최댓값 만들기

const solution = (numbers) => {
  const sortNumbers = numbers.sort((a, b) => a - b);
  return (
    sortNumbers[sortNumbers.length - 1] * sortNumbers[sortNumbers.length - 2]
  );
};
