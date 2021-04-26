function aVeryBigSum(ar) {
    let display = 0;
    ar.forEach(nums => {
        display += nums;
    });
    return display;
}

let arr = [1000000001, 1000000002, 1000000003, 1000000004, 1000000005];

console.log(typeof(arr[0]));
console.log(aVeryBigSum(arr));