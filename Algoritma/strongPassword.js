function minimumNumber(n, password) {
    let count = 0;
    let lowerCase = /[a-z]+/g;
    let upperCase = /[A-Z]+/g;
    let digit = /\d+/g;
    let specialCharakter = /[!@#$%^&*()\-+\s]+/g;
    if(!lowerCase.test(password)) {
        count +=1
    } 
    if(!upperCase.test(password)) {
        count +=1
    } 
    if(!digit.test(password)) {
        count +=1
    } 
    if(!specialCharakter.test(password)) {
        count +=1
    }
    
    return Math.max(count, 6-n);
}

console.log(minimumNumber(7, "AUzs-nV"));