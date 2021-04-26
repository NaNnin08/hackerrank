function marsExploration(s) {
    let arr = s.match(/.{1,3}/g);
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if(arr[i] !== 'SOS') {
            let arr2 = arr[i].split("");
            if(arr2[0] !== 'S') {
                count += 1;
            }
            if(arr2[1] !== 'O') {
                count +=1;
            }
            if(arr2[2] !== 'S') {
                count +=1;
            }
        }        
    } 
    return count;
}

let s = 'SOSSPSSQSSOR';

console.log(marsExploration(s));