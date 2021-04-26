function pangrams(s) {
    let set = new Set();
    let arr = s.split(" ").join("").split("");
    arr.forEach(string => {
        set.add(string.toLowerCase());
    });
    if(set.size === 26) {
        return 'pangram';
    } else {
        return 'not pangram';
    }
}

let s = 'We promptly judged antique ivory buckles for the prize';
console.log(pangrams(s));