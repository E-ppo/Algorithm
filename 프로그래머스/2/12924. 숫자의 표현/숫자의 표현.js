function solution (num) {
    let answer = 0;

  for(i=1; i<=num; i++) {
    if (num%i == 0 && i%2 == 1)
      answer++
  }
    return answer;
}
