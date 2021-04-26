/* ["Mr.", "Mrs.", "Ms.", "Dr.", "Er."] */

function regExp() {
    let s = "Mr.maks";
    let re = /^(Mr||Mrs||Ms||Dr||Er)(\.)+[a-zA-Z]*$/; // yang ini saja yang ditulis, () untuk menangkap nilai dan \1 untuk menggunakan nilai yang sudah ditangkap menggunakan ()
    re = re.test(s);
    return re;
}

console.log(regExp());