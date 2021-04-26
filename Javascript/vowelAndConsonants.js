/* function vowelAndConsonants(s) {
    for (let i = 0; i < s.length; i++) {
        if(s[i]==="a"||s[i]==="i"||s[i]==="u"||s[i]==="e"||s[i]==="o") {
            console.log(s[i]);
        } 
    }
    for (let i = 0; i < s.length; i++) {
        if(s[i]!=="a"&&s[i]!=="i"&&s[i]!=="u"&&s[i]!=="e"&&s[i]!=="o") {
            console.log(s[i]);
        } 
    }
}

vowelAndConsonants("javascriptloops"); */

function vowelAndConsonants(s) {
    let vowel = 'aiueo';
    let consonant = '';
    for (let i = 0; i < s.length; i++) {
        if(vowel.includes(s[i])) {
            console.log(s[i]);
        } else {
            consonant += s[i] + '\n';
        }        
    }
    console.log(consonant.trim());
}

vowelAndConsonants('javascriptloops');