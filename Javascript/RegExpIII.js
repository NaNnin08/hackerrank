function regExp() {
    let s = "12 and 123";
    let re = /\d+/g;
    re = s.match(re);
    return re;
}

console.log(regExp());