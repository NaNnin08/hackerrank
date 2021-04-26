function getMaxLessThanK(n, k) {
    let max = 0;
    for(let i=1; i<=n; i++) {
        for(let j=i+1; j<= n; j++) {
            let bin = i & j;
            if(bin > max && bin < k) {
                max = bin;
            }
        }
    }
    return max;
}

console.log(getMaxLessThanK(5,3));