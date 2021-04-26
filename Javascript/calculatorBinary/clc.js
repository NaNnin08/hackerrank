/* document.getElementById('btn0').onclick = () => {
    document.getElementById('res').innerHTML += '0';
}

document.getElementById('btn1').onclick = () => {
    document.getElementById('res').innerHTML += '1';
}

document.getElementById('btnSum').onclick = () => {
    document.getElementById('res').innerHTML += '+';
}

document.getElementById('btnSub').onclick = () => {
    document.getElementById('res').innerHTML += '-';
}

document.getElementById('btnMul').onclick = () => {
    document.getElementById('res').innerHTML += '*';
}

document.getElementById('btnDiv').onclick = () => {
    document.getElementById('res').innerHTML += '/';
}

document.getElementById('btnClr').onclick= () => {
    document.getElementById('res').innerHTML = '';
}

document.getElementById('btnEql').onclick = () => {
    let operad = document.getElementById('res');
    let hasil = eval(operad.innerText);
    operad.innerHTML = hasil;
} */

function onButton(e) {
    var btn = e.target || e.srcElement;
    var action = document.getElementById(btn.id).innerHTML;
    var res = document.getElementById('res');
    
    switch(action) {
        case '0':
        case '1':
        case '+':
        case '-':
        case '*':
        case '/':
            res.innerHTML += action;
            break;
        case 'C':
            res.innerHTML = '';
            break;
        case '=':
            var expr = res.innerHTML;
            var nums = /(\d+)/g;
            // Replace all base 2 nums with base 10 equivs
            expr = expr.replace(nums, m => parseInt(m, 2));
            // eval in base 10 and convert to base 2
            res.innerHTML = eval(expr).toString(2);
            break;
        default:
            console.error('should not be executed');
            break;
    }
}
var buttons = document.getElementsByTagName('button');
for (let button of buttons) {
    button.onclick = onButton;
}