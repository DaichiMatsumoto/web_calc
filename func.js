var disptemp, register, a, ans;
var numtemp = [];
var symboltemp = [];
var elem = document.getElementById("ans");
temp = "";
ans = 0;
disptemp = "";
register = "";

function registerA(In) {
    register += In;
    disptemp += In;
    elem.innerText = disptemp;
}

function setA(In) {
    numtemp.push(parseFloat(In));
    register = "";
}

function setAns() {
    setA(register);
    ans = numtemp[0];
    for (var i = 0, l = symboltemp.length; i < l; i++) {
        switch (symboltemp[i]) {
            case 'a':
                ans += numtemp[i + 1];
                break;
            case 'b':
                ans -= numtemp[i + 1];
                break;
            case 'c':
                ans *= numtemp[i + 1];
                break;
            case 'd':
                ans /= numtemp[i + 1];
                break;
        }
    }
    numtemp = [];
    symboltemp = [];
    register = ans;
    elem.innerText = ans;
}

function reSet() {
    disptemp = "";
    numtemp = [];
    symboltemp = [];
    ans = 0;
    elem.innerText = 0;
    register = "";
}

function add() {
    symboltemp.push('a');
    disptemp += "+";
    setA(register);
    elem.innerText = disptemp;
}

function minus() {
    symboltemp.push('b');
    disptemp += "-";
    setA(register);
    elem.innerText = disptemp;
}

function by() {
    symboltemp.push('c');
    disptemp += "×";
    setA(register);
    elem.innerText = disptemp;
}

function divide() {
    symboltemp.push('d');
    disptemp += "÷";
    setA(register);
    elem.innerText = disptemp;
}