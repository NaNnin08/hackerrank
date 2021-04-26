function simpleArraySum(ar) {
    let display = 0;
    ar.forEach(nums => {
        display += nums;
    });
    return display;
}

console.log(simpleArraySum([1,2,3]));