function plusMinus(arr) {
    let positive = 0;
    let negative = 0;
    let zero = 0;
    for(let i=0; i < arr.length; i++) {
        if(arr[i] > 0) {
            positive += 1;
        } else if(arr[i] < 0) {
            negative += 1;
        } else{
            zero += 1;
        }
    }
    return (positive/(arr.length)) + "\n" + (negative/(arr.length)) + "\n" +(zero/(arr.length));
}

console.log(plusMinus([-4, 3, -9, 0, 4, 1]))