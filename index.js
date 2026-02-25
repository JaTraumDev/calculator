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

let calc = {
    left: "",
    operator: null,
    right: null,
};
