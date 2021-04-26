function closestNumbers(arr) {
    // Write your code here
    let order = arr.sort((a, b) =>  a.length == b.length ? (a > b ? 1 : -1) : 
    a.length - b.length);
    let small = Math.abs(order[1]-order[0]);
    let index = [order[0], order[1]];
    for (let i = 1; i < arr.length; i++) {
        let current = Math.abs(order[i+1]-order[i]);
        if ( current < small) {
            small = current;
            index = [order[i], order[i+1]];
        } else if (small === current) {
            index.push(order[i], order[i+1]);
        }
    }
    return index;
}

let arr = [-20, -3916237, -357920, -3620601, 7374819, -7330761, 30, 6246457, -6461594, 266854, -520, -470 ]

console.log(closestNumbers(arr));