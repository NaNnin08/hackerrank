function countingSort(arr) {
    // Write your code here
    let out = [];
    for (let i = 0; i < 100; i++) {
        let count = 0;
        for (let j = 0; j < arr.length; j++) {
            if(arr[j] === i) {
                count += 1;
            }            
        }        
        if (count !== 0) {
            for (let j = 0; j < count; j++) {
                out.push(i)                
            }
        }
    }
    return out;
}

let arr = [1,1,3,2,1];

console.log(countingSort(arr));