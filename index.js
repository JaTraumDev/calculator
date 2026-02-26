const add = function (a, b) {
    const result = a + b;

    return result % 1 === 0 ? result : result.toFixed(2);
};

const subtract = function (a, b) {
    const result = a - b;

    return result % 1 === 0 ? result : result.toFixed(2);
};

const multiply = function (a, b) {
    const result = a * b;

    return result % 1 === 0 ? result : result.toFixed(2);
};

const divide = function (a, b) {
    if (b === 0) {
        return "Nice try";
    } else {
        const result = a / b;

        return result % 1 === 0 ? result : result.toFixed(2);
    }
};

function updateCalcUI() {
    calculation.textContent = `${operate.left} ${operate.operator} ${operate.right}`;
}

function handleBackSpace() {
    if (operate.right) {
        operate.right = operate.right.slice(0, -1);
    } else if (operate.operator) {
        operate.operator = "";
    } else if (operate.left) {
        operate.left = operate.left.slice(0, -1);
    }
}

const clear = function () {
    operate.left = "";
    operate.operator = "";
    operate.right = "";
};

function setOperator(key) {
    if (key === "*") {
        operate.operator = "x";
    } else if (key === "/") {
        operate.operator = "÷";
    } else {
        operate.operator = key;
    }
}

function setCalcInput(key) {
    const operators = ["+", "-", "*", "/", "x"];

    if (key >= "0" && key <= "9") {
        if (!operate.operator) {
            if (hasCalculated === true) {
                clear();
                hasCalculated = false;
            }
            operate.left += key;
        } else {
            operate.right += key;
        }
    } else if (key === "." || key === ",") {
        if (hasCalculated === true && !operate.operator) {
            clear();
            hasCalculated = false;
        }
        if (!operate.left && !operate.operator) {
            operate.left += "0.";
        } else if (!operate.right && operate.operator) {
            operate.right += "0.";
        } else if (!operate.left.includes(".") && !operate.operator) {
            operate.left += ".";
        } else if (!operate.right.includes(".") && operate.operator) {
            operate.right += ".";
        }
    } else if (key === "-" && !operate.left) {
        operate.left += "-";
    } else if (operators.includes(key) && !operate.right) {
        setOperator(key);
    } else if (operators.includes(key) && operate.right) {
        operate.calculate();
        setOperator(key);
    } else if (key === "Backspace") {
        if (hasCalculated === true && !operate.operator) {
            clear();
            hasCalculated = false;
        } else {
            handleBackSpace();
        }
    } else if (key === "Enter" || key === "=") {
        operate.calculate();
    }

    updateCalcUI();
}

let operate = {
    left: "",
    operator: "",
    right: "",
    calculate() {
        hasCalculated = true;

        if (this.left && !this.right) {
            this.operator = "";
            hasCalculated = false;
        } else if (!this.left) {
            if (this.operator === "-") {
                this.left = `${this.operator}${this.right}`;
                this.operator = "";
                this.right = "";
            } else {
                this.left += this.right;
                this.operator = "";
                this.right = "";
            }
        } else {
            switch (this.operator) {
                case "+":
                    this.left = add(parseFloat(this.left), parseFloat(this.right)).toString();
                    break;
                case "-":
                    this.left = subtract(parseFloat(this.left), parseFloat(this.right)).toString();
                    break;
                case "÷":
                    this.left = divide(parseFloat(this.left), parseFloat(this.right)).toString();
                    break;
                case "x":
                    this.left = multiply(parseFloat(this.left), parseFloat(this.right)).toString();
                    break;
            }
            this.operator = "";
            this.right = "";
        }

        if (Number.isNaN(parseFloat(this.left))) {
            this.left = "Nice try";
        }

        updateCalcUI();
    },
};

document.addEventListener("keydown", (e) => {
    setCalcInput(e.key);
});

let hasCalculated = false;

const equals = document.querySelector("#equals");

equals.addEventListener("click", () => {});

const calculation = document.querySelector("#calculation");
