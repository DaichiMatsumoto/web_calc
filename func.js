var disptemp, a, ans;
var numtemp = [];
var symboltemp = [];
var elem = document.getElementById("ans");
temp = "";
ans = 0;
disptemp = "";

function setA(In) {
    numtemp.push(parseFloat(In));
    disptemp += In;
    elem.innerText = disptemp;
}

function setAns() {
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
    elem.innerText = ans;
}

function reSet() {
    disptemp = "";
    numtemp = [];
    symboltemp = [];
    ans = 0;
    elem.innerText = 0;
}

function add() {
    symboltemp.push('a');
    disptemp += "+";
    elem.innerText = disptemp;
}

function minus() {
    symboltemp.push('b');
    disptemp += "-";
    elem.innerText = disptemp;
}

function by() {
    symboltemp.push('c');
    disptemp += "×";
    elem.innerText = disptemp;
}

function divide() {
    symboltemp.push('d');
    disptemp += "÷";
    elem.innerText = disptemp;
}