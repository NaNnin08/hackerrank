function runningTime(arr) {
    // Write your code here
    let shift = 0;
    for (let i = 1; i < arr.length; i++) {
        let small = arr[i];
        for (let j = i-1; j >= 0; j--) {
            if (small < arr[j]) {
                [arr[j], arr[j+1]] = [arr[j+1], arr[j]];
                shift += 1;
            }                
        }          
    }
    return shift;
}

let arr = [2, 1, 3, 1, 2];

console.log(runningTime(arr))


