function makingAnagrams(s1, s2) {
    let arr1 = s1.split('');
    let arr2 = s2.split('');
    let n = s1.length > s2.length ? s1.length : s2.length;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < arr1.length; j++) {
            if(s2[i] === arr1[j]) {
                arr1.splice(j, 1);
                break;
            }            
        }
        for (let k = 0; k < arr2.length; k++) {
            if(s1[i] === arr2[k]) {
                arr2.splice(k, 1);
                break;
            }
        }
    }
    return arr1.length + arr2.length;
}

let s1 = 'absdjkvuahdakejfnfauhdsaavasdlkj';
let s2 = 'djfladfhiawasdkjvalskufhafablsdkashlahdfa';

console.log(makingAnagrams(s1,s2));