/* function regExp() {
    let s = "abhjsa";
    let re = /^([aioeo]).+?\1$/; // yang ini saja yang ditulis, () untuk menangkap nilai dan \1 untuk menggunakan nilai yang sudah ditangkap menggunakan ()
    re = re.test(s);
    return re;
} */

function regExp() {
    let s = "ab";
    let re = /[a]+/g;
    re = re.test(s);
    return re;
}

console.log(regExp());