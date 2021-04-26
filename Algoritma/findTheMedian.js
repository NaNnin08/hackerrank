function findMedian(arr) {
    // Write your code here
    let n = Math.floor(arr.length/2);
    let urut = arr.sort((a, b) =>  a.length == b.length ? (a > b ? 1 : -1) : 
    a.length - b.length);
    return urut[n];
}

let arr = [0, 1, 2, 4, 6, 5, 3]

console.log(findMedian(arr));