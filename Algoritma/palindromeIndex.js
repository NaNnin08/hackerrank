function palindromeIndex(s) {
    let index = -1;
    let arr = s.split('').map(elemen => elemen.charCodeAt(0));
    let isPalindrome = 1;
    for (let i = 0; i < arr.length/2; i++) {
        if (arr[i]!==arr[arr.length-(i+1)]) {
            if(arr[i]===arr[arr.length-(i+2)] && arr[i+1]===arr[arr.length-(i+1)] && isPalindrome === 1) {
                if(arr[i] > arr[arr.length-(i+1)]) {
                    index = i;
                    arr.splice(i,1);
                    i = 0;
                    isPalindrome = 0;
                } else {
                    index = arr.length-(i+1);
                    arr.splice(arr.length-(i+1),1);
                    i = 0;
                    isPalindrome = 0;
                }
            }
            if(arr[i+1]===arr[arr.length-(i+1)] && isPalindrome === 1) {
                index = i;
                arr.splice(i,1);
                i = 0;
                isPalindrome = 0;
            } else if(arr[i]===arr[arr.length-(i+2)] && isPalindrome === 1) {
                index = arr.length-(i+1);
                arr.splice(arr.length-(i+1),1);
                i = 0;
                isPalindrome = 0;
            }
        }      
    }
    return index;
}

let s = 'hgygsvlfwcwnswtuhmyaljkqlqjjqlqkjlaymhutwsnwcflvsgygh';

console.log(palindromeIndex(s));

console.log(false || false);