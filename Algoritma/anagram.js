function anagram(s) {
    let count = 0;
    if(s.length%2===0) {
        let n = s.length/2;
        let arr1 = s.substr(0,n).split('').sort();
        let arr2 = s.substr(n,n).split('').sort();
        for (let i = 0; i < arr2.length; i++) {
            for (let j = 0; j < arr1.length; j++) {
                if(arr2[i] === arr1[j]) {
                    arr1.splice(j,1);
                    break;
                }               
            }            
        }
        count = arr1.length;
    } else {
        count = -1;
    }
    return count;
}



let s = 'aujteqimwfkjoqodgqaxbrkrwykpmuimqtgulojjwtukjiqrasqejbvfbixnchzsahpnyayutsgecwvcqngzoehrmeeqlgknnb';
let set = new Set();
let seta = new Set();
s.substr(0,3).split('').sort().forEach(element => set.add(element))
seta.add('a');
seta.add('b');

console.log(anagram(s));