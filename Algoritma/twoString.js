function twoStrings(s1, s2) {
    return (new RegExp(`[${s1}]`)).test(s2) ? 'YES' : 'NO';
/*     if((new RegExp(`[${s1}]`)).test(s2)) {
        return 'YES';
    }
    return 'NO'; */

    // return `n1: ${n1}, n2:${n2}`;
}

let s1 = 'hi';
let s2 = 'world';

console.log(twoStrings(s1,s2));