const BigInt = require("big-integer");

let arr = [122112121211212231231231231231231231231231231231313122121,1,2,34,5];

arr = arr.sort((a,b) => {
    if (a.length == b.length) { a - b }
        else{
            a.length - b.length
        }
});
// arr = arr.sort((a, b) => toString(a).length - toString(b).length);
console.log(arr);

