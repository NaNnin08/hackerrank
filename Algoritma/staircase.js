/* function staircase(n) {
    let display = "";
    for (let i = 0; i < n; i++) {
        for (let j = n-1; j > i; j--) {
            display += " " ;       
        }   
        for (let k = 0; k < i+1; k++) {
            display += "#";           
        }
        display += "\n";
    }
    console.log(display);
} */

function staircase(n) {
    for (let i = 1; i <= n; i++) {
        console.log(" ".repeat(n-i) + "#".repeat(i));        
    }
}

staircase(5);