function insertionSort1(n, arr) {
    let st = arr[n-1];
    for (let i = n-1; i >= 0; i--) {
        if(st < arr[i-1]) {
            arr[i] = arr[i-1];
            console.log(arr.join(' '));
        } else {
            arr[i] = st;
            console.log(arr.join(' '));
            break;
        }        
    }
}

let arr = [2, 4, 6, 8, 3];
let n = 5;

insertionSort1(n, arr);

