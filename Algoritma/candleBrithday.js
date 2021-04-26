/* function birthdayCakeCandles(candles) {
    let arr = candles.sort();
    let tallest = arr[arr.length-1];
    let count = 1;
    for (let i = (arr.length-2); i >= 0; i--) {
        if(tallest === arr[i]) {
            count += 1;
        } else {
            break;
        }
    }
    return count;
} */

function birthdayCakeCandles(candles) {
    let tallest = candles[0];
    let count = 1;
    for (let i = 1; i < candles.length; i++) {
        if(candles[i] > tallest ) {
            tallest = candles[i];
            count = 1;
        } else if(candles[i] === tallest) {
            count += 1;
        }
    }
    return count;
}

console.log(birthdayCakeCandles([3, 1, 2, 3,1,2,3,2,3,2,2]));