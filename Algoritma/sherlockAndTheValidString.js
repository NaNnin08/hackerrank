let s = "ibfdgaeadiaefgbhbdghhhbgdfgeiccbiehhfcggchgghadhdhagfbahhddgghbdehidbibaeaagaeeigffcebfbaieggabcfbiiedcabfihchdfabifahcbhagccbdfifhghcadfiadeeaheeddddiecaicbgigccageicehfdhdgafaddhffadigfhhcaedcedecafeacbdacgfgfeeibgaiffdehigebhhehiaahfidibccdcdagifgaihacihadecgifihbebffebdfbchbgigeccahgihbcbcaggebaaafgfedbfgagfediddghdgbgehhhifhgcedechahidcbchebheihaadbbbiaiccededchdagfhccfdefigfibifabeiaccghcegfbcghaefifbachebaacbhbfgfddeceababbacgffbagidebeadfihaefefegbghgddbbgddeehgfbhafbccidebgehifafgbghafacgfdccgifdcbbbidfifhdaibgigebigaedeaaiadegfefbhacgddhchgcbgcaeaieiegiffchbgbebgbehbbfcebciiagacaiechdigbgbghefcahgbhfibhedaeeiffebdiabcifgccdefabccdghehfibfiifdaicfedagahhdcbhbicdgibgcedieihcichadgchgbdcdagaihebbabhibcihicadgadfcihdheefbhffiageddhgahaidfdhhdbgciiaciegchiiebfbcbhaeagccfhbfhaddagnfieihghfbaggiffbbfbecgaiiidccdceadbbdfgigibgcgchafccdchgifdeieicbaididhfcfdedbhaadedfageigfdehgcdaecaebebebfcieaecfagfdieaefdiedbcadchabhebgehiidfcgahcdhcdhgchhiiheffiifeegcfdgbdeffhgeghdfhbfbifgidcafbfcd";

/* // Complete the isValid function below.
function isValid(s) {
    let counter = {};
    let freq = {};

    // count of occurrences of characters
    // for example aaabbcc => {a: 3, b: 2, c: 2}
    Array.from(s).forEach(char => {
        counter[char] = counter[char] || 0;
        counter[char]++;
    })

    // count the frequency of those occurence counts,
    // for example {a: 3, b: 2, c: 2} => {3: 1, 2: 2}
    Object.keys(counter).forEach(k => {
        freq[counter[k]] = freq[counter[k]] || 0;
        freq[counter[k]]++;
    })

    // all our frequencies. e.g. [3, 2]
    let freqArr = Object.keys(freq).map(Number);

    // Simplest case: if there is only one frequency, it's valid
    if (freqArr.length === 1) {
        return 'YES'
    }

    // If not a single frequency string, check next simplest case

    // there are exactly two frequencies
    // e.g. [3, 2]
    let twoFrequencies = freqArr.length === 2;
    let [a, b] = freqArr;

    // frequency occurs only once
    let oneOccurence = freq[a] === 1 || freq[b] === 1;

    // the difference is a singleton character
    // e.g. abbcc
    let singleton = (freq[a] === 1 && a === 1) || (freq[b] === 1 && b === 1)

    // differing frequency is exactly 1 more than others
    // e.g. true if aaabbcc, false if abbcc
    let diffOfOne = (freq[a] === 1 ? a - b : b - a) === 1;

    // if single character or frequencies differ by one
    // and there are exactly two frequencies
    // and there is only one occurence of the singleton or differing frequency
    if ((singleton || diffOfOne) && twoFrequencies && oneOccurence) {
        return 'YES'
    }

    return 'NO'
} */

function isValid(s) {
  let arr = s.split("").sort();
  let set = new Set();
  arr.forEach((element) => set.add(element));
  set = [...set];
  arr = arr.join("");
  let n = Math.round(arr.length / set.length);
  let str = "";
  set.forEach((a) => (str += a.repeat(n)));
  let a = arr.length;
  let b = str.length;
  if (str.length > arr.length) {
    for (let j = 1; j <= str.length; j++) {
      if (str.substr(0, j) !== arr.substr(0, j)) {
        str = str.substr(0, j - 1) + str.substring(j);
        j = s.length;
        break;
      }
    }
  }
  if (str.length < arr.length) {
    for (let j = 1; j <= s.length; j++) {
      if (str.substr(0, j) !== arr.substr(0, j)) {
        let a = arr.substr(0, j - 1);
        let b = arr.substring(j);
        arr = arr.substr(0, j - 1) + arr.substring(j);
        j = s.length;
        break;
      }
    }
  } 
  if (arr === str) {
    return "YES";
  } else {
    return "NO";
  }
}

console.log(isValid(s));
