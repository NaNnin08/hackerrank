function insertionSort2(n, arr) {
    // Write your code here
    if(n > 1) {
        for (let i = 1; i < n; i++) {
            let small = arr[i];
            for (let j = i-1; j >= 0; j--) {
                if (small < arr[j]) {
                    [arr[j], arr[j+1]] = [arr[j+1], arr[j]]
                }                
            }
            console.log(arr);            
        }
    } else {
        console.log(arr);
    }
}

let arr = [3, 4, 7, 5, 6, 2, 1];

let n = 7;

insertionSort2(n, arr);


