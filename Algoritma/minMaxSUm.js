/* function miniMaxSum(arr) {
    let min = 0;
    let max;
    for (let i = 0; i < arr.length; i++) {
        let count = 0;
        arr.forEach(nums => {
            count += nums
        });
        count -= arr[i];
        if(count < min || min === 0 ) {
            min = count;
        }
        if(count > min) {
            max = count;
        }
    }
    return [min, max];
}
 */

function miniMaxSum(arr) {
    let array = [];
    for (let i = 0; i < arr.length; i++) {
        let count = 0;
        arr.forEach(nums => {
            count += nums
        });
        count -= arr[i];
        array.push(count)
    }
    array.sort();
    return [array[0], array[array.length-1]];
}

let arr = [256741038, 623958417, 467905213, 714532089, 938071625]

console.log(miniMaxSum(arr));