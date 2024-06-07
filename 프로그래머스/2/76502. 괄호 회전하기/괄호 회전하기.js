function solution(s) {
    let answer = 0;
    let arr = [...s];
    let bracket = { '(': ')', '[': ']', '{': '}' };
    for (let i = 0; i < arr.length; i++) {
        if (i) arr.push(arr.shift());

        let stack = arr.reduce((acc, cur) => {
            bracket[acc[acc.length-1]] === cur ? acc.pop() : acc.push(cur);
            return acc;
        }, []);
        if (!stack.length) answer++;
    }
    return answer;
}