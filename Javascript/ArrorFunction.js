let nums = [1,2,3,4,5];

function modifyArray(nums) {
    let out = n => n = (n%2===0) ? n*2: n*3;
    let arrNew = nums.map(out);
    return arrNew;
}

console.log(modifyArray(nums));