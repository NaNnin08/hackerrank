function funnyString(s) {
    let arr = [];
    let rev = [];
    let diff = [];
    let diff2 = [];
    let out = '';
    for (let i = 0; i < s.length; i++) {
        arr.push(s[i].charCodeAt(0));        
    }
    for (let i = arr.length-1; i >= 0; i--) {
        rev.push(arr[i]);
    }
    for (let j = 0; j < arr.length-1; j++) {
        diff.push(Math.abs(Number(arr[j+1]) - Number(arr[j])));
        diff2.push(Math.abs(Number(rev[j]) - Number(rev[j+1])));
    }
    for (let j = 0; j < diff.length; j++) {
        if(diff[j] === diff2[j]) {
            out = 'Funny';
        } else {
            out = 'Not Funny';
            break;
        }        
    }
    console.log(out);
}

let s = 'uvzxrumuztyqyvpnji';

funnyString(s);