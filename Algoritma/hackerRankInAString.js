function hackerrankInString(s) {
    let re = /(h)+.*(a)+.*(c)+.*(k)+.*(e)+.*(r)+.*(r)+.*(a)+.*(n)+.*(k)+/g;
    if(re.test(s)) {
        return 'YES'
    } else {
        return 'NO'
    }
}

let s = 'hereiamstackerrank'

console.log(hackerrankInString(s));