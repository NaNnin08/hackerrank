function bigSorting(unsorted) {
    return unsorted.sort((a, b) =>  a.length == b.length ? (a > b ? 1 : -1) : 
    a.length - b.length);
}

let arr = [122112121211212231231231231231231231231231231231313122121,1,2,34,5];

console.log(bigSorting(arr));