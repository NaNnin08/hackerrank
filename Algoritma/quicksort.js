function quickSort(arr) {
    // Write your code here
    let p = arr[0];
    let left = [];
    let right = [];
    for (let i = 1; i < arr.length; i++) {
        if(p > arr[i]) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }       
    }
    return left.concat(p).concat(right);
}

let arr =[4, 5, 3, 7, 2];

console.log(quickSort(arr));