/* let arr = 'A';
let s = arr.charCodeAt(0);
console.log(s);
console.log(String.fromCharCode(s));
 */
function caesarCipher(s, k) {
    let arr = [];
    let re = /[a-zA-Z]/;
    for (let i = 0; i < s.length; i++) {
        if(re.test(s[i])) {
            let convert = s[i].charCodeAt(0);
            if(convert >= 65 && convert <= 90 && convert < 97) {
                convert += k;
                for (let i = 0; i < k ;i++) {
                    if(convert > 90) {
                        convert += 64 - 90;
                    } else {
                        break;
                    }                
                }
                convert = String.fromCharCode(convert);
                arr.push(convert);
            }
            else if(convert >= 97) {
                convert += k;
                for (let i = 0; i < k ;i++) {
                    if(convert > 122) {
                        convert += 96 - 122;
                    } else {
                        break;
                    }                
                }
                convert = String.fromCharCode(convert);
                arr.push(convert);
            } 
        } else {
            arr.push(s[i]);
        }      
    }
    return arr.join('');
}

let s = 'Hello_World!';
console.log(caesarCipher(s, 4));