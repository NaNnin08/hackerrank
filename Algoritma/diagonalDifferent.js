let arr = [[11, 2, 4], [4, 5, 6], [10, 8, -12]];

function diagonalDifferent(arr) {
    let primaryDiagonal = 0;
    let secondaryDiagonal = 0;
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if(i===j) {
                primaryDiagonal += arr[i][j];             
            }
            if(i+j === (arr.length-1)) {
                secondaryDiagonal += arr[i][j]
            }            
        }        
    }
    return Math.abs(primaryDiagonal - secondaryDiagonal);
}

console.log(diagonalDifferent(arr))

