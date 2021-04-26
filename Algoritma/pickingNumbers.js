function pickingNumbers(a) {
    // Write your code here
    let arr = [];
    for (let i = 0; i < a.length; i++) {
        for (let j = i+1; j < a.length; j++) {
            let qu = [a[i]];
            if(Math.abs(a[i]-a[j]) <= 1) {
                qu.push(a[j]);
                for (let k = j+1; k < a.length; k++) {
                    if (a[j] === a[k] || a[i] === a[k]) {
                        qu.push(a[k]);
                    }                 
                }
            }  
            if (qu.length > arr.length) {
                arr = qu;
            }           
        }       
    }
    return arr.length;
}

const arr = [4, 6, 5, 3, 3, 1];

console.log(pickingNumbers(arr));