function gameOfThrones(s) {
    let genap = 0;
    let ganjil = 0;
    let arr = s.split('').sort()
    for (let i = 0; i < s.length; i++) {
        if(arr[i] === arr[i+1]) {
            genap+=2;
            i+=1;
        } else {
            ganjil += 1;
        }
    }
    if(genap >= 1 && ganjil <= 1) {
        return 'YES';
    } else {
        return 'NO';
    }
    // return `genap: ${genap}, ganjil: ${ganjil}`;
}

let s = 'aaabbbb';

console.log(gameOfThrones(s));