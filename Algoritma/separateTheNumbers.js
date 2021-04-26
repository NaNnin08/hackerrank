const BigInt = require("big-integer");
/* function separateNumbers(s) {
    let out = '';
    if(s.length > 1) {
        for (let i = 1; i < s.length; i++) {
            let se = s.split('');
            let arr = s.match(new RegExp(`.{1,${i}}`, 'g'));
            let first = parseInt(arr[0]) + 1;
            let leng = (first.toString()).length;
            se.splice(0,arr[0].length);
            let arr2 = se.join('').match(new RegExp(`.{1,${leng}}`, 'g'));
            let second = parseInt(arr2[0]);
            if(first === second) {
                if(arr2.length === 1) {
                    out = `YES ${first-1}`;
                    break;
                } else {
                    for (let j = 0; j < arr2.length-1; j++) {
                        if(parseInt(arr2[j+1]) - parseInt(arr2[j]) === 1) {
                            out = `YES ${first-1}`;
                            if(j === arr2.length-2) {
                                i = s.length;
                            }
                        } else if(parseInt(arr2[j+1]) < parseInt(arr2[j])) {
                            let leng2 = ((parseInt(arr2[j])+1).toString()).length;
                            let arr3 = se;
                            arr3.splice(0,j+i);
                            arr3 = arr3.join('').match(new RegExp(`.{1,${leng2}}`, 'g'));
                            if(arr3 === null) {
                                break;
                            }
                            if(arr3[0].startsWith((second.toString())[0])) {
                                arr3 = arr3.join('').split('');
                                arr3.splice(0,1);
                                arr3 = arr3.join('').match(new RegExp(`.{1,${leng2}}`, 'g'));
                            }
                            if((parseInt(arr2[j])+1) === parseInt(arr3[0])) {
                                if(arr3.length === 1) {
                                    out = `YES ${first-1}`;
                                    i = j = s.length;                                    
                                } else {
                                    for (let k = 0; k < arr3.length-1; k++) {
                                        if(parseInt(arr3[k+1]) - parseInt(arr3[k]) === 1) {
                                            out = `YES ${first-1}`;
                                            i = j = s.length;
                                        } else {
                                            out = `NO`;
                                            break;
                                        }                                  
                                    }
                                }
                            }
                        } else {
                            out = `NO`;
                            break;
                        }
                    }
                }
            } else if(arr2.length === 1) {
                out = 'NO'
            } else {
                out = 'NO';
            }
        }            
    } else {
        out = 'NO';
    }
    console.log(out);
} */
/* function separateNumbers(s) {
    let out = '';
    if(s.length > 1) {
        for (let i = 1; i < s.length; i++) {
            let se = s.split('');
            let arr = s.match(new RegExp(`.{1,${i}}`, 'g'));
            let first = parseFloat(arr[0]);
            let leng = (first.toString()).length;
            se.splice(0,arr[0].length);
            let arr2 = se.join('').match(new RegExp(`.{1,${leng}}`, 'g'));
            let second = parseFloat(arr2[0]);
            if((first+1) === second) {
                if(arr2.length === 1) {
                    out = `YES ${first}`;
                    break;
                } else {
                    for (let j = 0; j < arr2.length-1; j++) {
                        if(parseFloat(arr2[j+1]) - parseFloat(arr2[j]) === 1) {
                            out = `YES ${first}`;
                        } 
                        if(parseFloat(arr2[j+1]) < parseFloat(arr2[j])) {
                            let leng2 = ((parseFloat(arr2[j])+1).toString()).length;
                            let arr3 = se;
                            arr3.splice(0,j+i);
                            arr3 = arr3.join('').match(new RegExp(`.{1,${leng2}}`, 'g'));
                            if(arr3 === null) {
                                break;
                            }
                            if(arr3[0].startsWith((second.toString())[0])) {
                                arr3 = arr3.join('').split('');
                                arr3.splice(0,1);
                                arr3 = arr3.join('').match(new RegExp(`.{1,${leng2}}`, 'g'));
                            }
                            if((parseFloat(arr2[j])+1) === parseFloat(arr3[0])) {
                                if(arr3.length === 1) {
                                    out = `YES ${first}`;
                                    i = j = s.length;                                    
                                } else {
                                    for (let k = 0; k < arr3.length-1; k++) {
                                        if(parseFloat(arr3[k+1]) - parseFloat(arr3[k]) === 1) {
                                            out = `YES ${first}`;
                                            i = j = s.length;
                                        }                                  
                                    }
                                }
                            }
                        }
                    }
                }
            } else {
                out =`NO`;
            }
        }            
    } else {
        out = 'NO';
    }
    console.log(out);
} */
 
function separateNumbers(s) {
    for (let l = 1; l <= s.length / 2; l++) {
        const n = s.substr(0, l)
        let test = n
        let a = BigInt(n)
        while (test.length <= s.length) {
            test += `${++a}`
            
            if (test !== s.substr(0, test.length)) {
                break
            }

            if (test === s) {
                console.log(`YES ${n}`)
                return
            }
        }
    }
    console.log("NO")
}

let s = '999100010001';
separateNumbers(s);

/*
    ---ver 1---
let out = '';
if(s.length > 1) {
    for (let i = 1; i < s.length; i++) {
        let se = s.split('');
        let arr = s.match(new RegExp(`.{1,${i}}`, 'g'));
        let first = parseFloat(arr[0]) + 1;
        let leng = (first.toString()).length;
        se.splice(0,arr[0].length);
        let arr2 = se.join('').match(new RegExp(`.{1,${leng}}`, 'g'));
        let second = parseFloat(arr2[0]);
        if(first === second) {
            if(arr2.length === 1) {
                out = `YES ${first-1}`;
                break;
            } else {
                for (let j = 0; j < arr2.length-1; j++) {
                    if(parseFloat(arr2[j+1]) - parseFloat(arr2[j]) === 1) {
                        out = `YES ${first-1}`;
                    } else {
                        out = `NO`;
                        break;
                    }
                }
            }
            break;
        } else if(arr2.length === 1) {
            out = 'NO'
        } else {
            out = 'NO';
        }
    }            
} else {
    out = 'NO';
}
console.log(out); */