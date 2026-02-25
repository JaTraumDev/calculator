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
        return null;
    } else {
        return a / b;
    }
};

const clear = function () {
    calc.left = "";
    calc.operator = "";
    calc.right = "";
};

let calc = {
    left: "",
    operator: "",
    right: "",
};

function setCalculationInput() {
    calculation.textContent = `${calc.left} ${calc.operator} ${calc.right}`;
}

function handleBackSpace() {
    if (calc.right) {
        calc.right = calc.right.slice(0, -1);
    } else if (calc.operator) {
        calc.operator = "";
    } else if (calc.left) {
        calc.left = calc.left.slice(0, -1);
    }
}

document.addEventListener("keydown", (e) => {
    if (e.key >= "0" && e.key <= "9") {
        if (!calc.operator) {
            calc.left += e.key;
        } else {
            calc.right += e.key;
        }
    } else if (e.key.includes("+", "-", "*", "/")) {
        calc.operator = e.key;
    } else if (e.key === "Backspace") {
        handleBackSpace();
    }
    setCalculationInput();
});

const equals = document.querySelector("#equals");

equals.addEventListener("click", () => {});

const calculation = document.querySelector("#calculation");

setCalculationInput();
