function solution(n) {
    let ans = 0;
    let num = n;
    let numOfOne = func(n);
    while (true) {
      num++;
      if (numOfOne === func(num)) {
        ans = num;
        break;
      }
    }
        return ans;
}

const func = (num) => num.toString(2).match(/1/g).length;