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
        calculation.textContent = "ERROR";
    } else {
        return (a / b).toFixed(2);
    }
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

const clear = function () {
    calc.left = "";
    calc.operator = "";
    calc.right = "";
};

function setOperator(e) {
    if (e.key === "*") {
        calc.operator = "x";
    } else if (e.key === "/") {
        calc.operator = "÷";
    } else {
        calc.operator = e.key;
    }
}

let calc = {
    left: "",
    operator: "",
    right: "",
    calculate() {
        hasCalculated = true;
        if (this.left && !this.right) {
            this.operator = "";
            hasCalculated = false;
        } else {
            if (this.operator === "+") {
                this.left = add(parseFloat(this.left), parseFloat(this.right));
                this.operator = "";
                this.right = "";
            } else if (this.operator === "-") {
                this.left = subtract(parseFloat(this.left), parseFloat(this.right));
                this.operator = "";
                this.right = "";
            } else if (this.operator === "÷") {
                this.left = divide(parseFloat(this.left), parseFloat(this.right));
                this.operator = "";
                this.right = "";
            } else if (this.operator === "x") {
                this.left = multiply(parseFloat(this.left), parseFloat(this.right));
                this.operator = "";
                this.right = "";
            }
        }

        setCalculationInput();
    },
};

document.addEventListener("keydown", (e) => {
    const operators = ["+", "-", "*", "/", "x"];

    if (e.key >= "0" && e.key <= "9") {
        if (!calc.operator) {
            if (hasCalculated === true && !operators.includes(e.key)) {
                clear();
                hasCalculated = false;
            }
            calc.left += e.key;
        } else {
            calc.right += e.key;
        }
    } else if (operators.includes(e.key) && !calc.right) {
        setOperator(e);
    } else if (operators.includes(e.key) && calc.right) {
        calc.calculate();
        setOperator(e);
    } else if (e.key === "Backspace") {
        handleBackSpace();
    } else if (e.key === "Enter" || e.key === "=") {
        calc.calculate();
    }

    setCalculationInput();
});

let hasCalculated = false;

const equals = document.querySelector("#equals");

equals.addEventListener("click", () => {});

const calculation = document.querySelector("#calculation");
