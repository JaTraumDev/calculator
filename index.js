const add = function (a, b) {
    return a + b;
};

const subtract = function (a, b) {
    return a - b;
};

const multiply = function (a, b) {
    return a * b;
};

const divide = function (a, b) {
    if (b === 0) {
        return "Pfffff...";
    } else {
        return a / b;
    }
};

const clear = function () {
    calc.left = null;
    calc.operator = null;
    calc.right = null;
};

let calc = {
    left: null,
    operator: null,
    right: null,
};

const calculation = document.querySelector("#calculation");

calculation.textContent = `${calc.left} ${calc.operator} ${calc.right}`;
