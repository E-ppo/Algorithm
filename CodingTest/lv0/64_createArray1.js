// 배열만들기1
const solution = (n, k) =>  {
    let array =[]
    for(i=1; k*i<=n; i++){
        array.push(k*i)
    }
    return array
}
