function theLoveLetterMystery(s) {
    let count = 0;
    let arr = s.split('').map(elemen => elemen.charCodeAt(0));
    for (let i = 0; i < arr.length/2; i++) {
        if (arr[i]!==arr[arr.length-(i+1)]) {
            count += Math.abs(arr[i]-arr[arr.length-(i+1)])
        }        
    }
    return count;
}

let s = 'abcd';
let arr = s.split('');
console.log(s.charCodeAt(0))
arr = arr.map(elemen => elemen.charCodeAt(0));
arr[0] = 'KOLA';
console.log(arr);
console.log(theLoveLetterMystery(s));