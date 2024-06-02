function solution(want, number, discount) {
    const saleHash = {}
    let answer = 0
    
    for(let item of new Set(discount)) {
        saleHash[item] = 0
    }
    
    discount.slice(0, 10).forEach(item => {
        saleHash[item]++
    })
    
    const sum = number.reduce((acc, cur) => acc + cur)  
    
    for(let i=0; i <= discount.length - sum; i++) {
        let check = true
        want.forEach((item, idx) => {
            const saleCount = saleHash[item] ?? 0
            if (saleCount < number[idx]) check = false
        })
        
        if (check) answer++
        
        saleHash[discount[i]]--
        saleHash[discount[10+i]]++
    }
    
    return answer

}