function solution(n) {
    let fibonacci = [0, 1];
    for(i = 2; i <= n; i++){
        fibonacci[i] = (fibonacci[i-1] + fibonacci[i-2]) % 1234567;
    }
    return fibonacci[n];
}