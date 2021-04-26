function superReducedString(s) {
    let out = s.split("");
    for (let i = 0; i < s.length; i++) {
        if(out !== []) {
            for (let j = 0; j < out.length; j++) {
                if(out[j] === out[j+1]) {
                    out.splice(j,2);
                    break;
                }
            }
        } else {
            break;
        }
       
    }
    out = out.join('');
    if(out === '') {
        return 'Empty String';
    } else {
        return out;
    }
}

let s = 'baab';

console.log(superReducedString(s));