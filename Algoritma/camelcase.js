function camelcase(s) {
    let arr = s.split(/[A-Z]/);
    return arr.length;
}

let s = 'saveChangesInTheEditor';
let arr = s.split(/[A-Z]/);
console.log(arr);
console.log(camelcase(s));