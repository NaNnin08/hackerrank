function stringConstruction(s) {
    let set = new Set();
    for (let i = 0; i < s.length; i++) {
        set.add(s[i]);        
    }
    return set.size;
}

let s = 'abab';

console.log(stringConstruction(s));