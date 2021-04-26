let s = '0101010';
let re = /(010)/g;
console.log(re.test(s));
console.log(s.substring(2));
console.log(s.substr(0,2)+'1'+s.substring(3));
console.log(s.indexOf('010'));
console.log(s[0] === '1' ? 'KOK' : 'LOL');
function beautifulBinaryString(b) {
    let count = 0;
    let re = /(010)/g;
    while (re.test(s)) {
        let n = b.indexOf('010');
        if(b[n] === '0') {
            b = b.substr(0,n) + '1' + b.substring(n+1);
            count += 1;
        } else {
            b = b.substr(0,n) + '0' + b.substring(n+1);
            count += 1;
        }     
    }
    return count;
}
console.log(beautifulBinaryString(s));