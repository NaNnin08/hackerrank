function gemstones(arr) {
    let count = 0;
/*     let x = arr[0].split('');
    arr.splice(0,1);
    for (let i = 0; i < x.length; i++) {
        let re = new RegExp(`[${x[i]}]+`);
        let same = true;
        for (let j = 0; j < arr.length; j++) {
            same = same && re.test(arr[j]);  
            if(same === true && j === arr.length-1) {
                count += 1;
            }          
        }  
    } */
    for (let i = 97; i <= 122; i++) {
        if(arr.every(element => element.includes(String.fromCharCode(i)))) {
            count += 1;
        }        
    }
    return count;
}

let arr = ['basdfj', 'asdlkjfdjsa', 'bnafvfnsd', 'oafhdlasd'];
console.log(arr.every(element => element.includes('a'))) // akan mengembalikan nilai boolean true(jika memenuhi kriteria) dan false(jika tidak memenuhi kritia)
console.log(gemstones(arr));