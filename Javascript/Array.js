let nums = [1,2,6,4,6,5];

function getsecondLargest(nums) {
    let bigger = nums[0];
    let second = -1;
    for (let i = 0; i < nums.length; i++) {
        if(nums[i]>bigger) {
            second = bigger;
            bigger = nums[i];
        }
        if(nums[i]>second && nums[i]<bigger) {
            second = nums[i];
        }
    }
    return second;
}

console.log(getsecondLargest(nums));