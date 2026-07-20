const display = document.getElementById("display");

function appendValue(value) {
    display.value += value;
}

function clearDisplay() {
    display.value = "";
}

function deleteLast() {
    display.value = display.value.slice(0, -1);
}

function calculate() {
    const expression = display.value;

    let operator = "";
    const operators = ["+", "-", "*", "/", "%"];

    for (const op of operators) {
        if (expression.includes(op)) {
            operator = op;
            break;
        }
    }

    if (!operator) {
        return;
    }

    const parts = expression.split(operator);

    if (parts.length !== 2) {
        display.value = "Error";
        return;
    }

    const num1 = Number(parts[0]);
    const num2 = Number(parts[1]);

    if (operator === "+") {
        display.value = num1 + num2;
    }
    else if (operator === "-") {
        display.value = num1 - num2;
    }
    else if (operator === "*") {
        display.value = num1 * num2;
    }
    else if (operator === "/") {
        if (num2 !== 0) {
            display.value = num1 / num2;
        } else {
            display.value = "Error";
        }
    }
    else if (operator === "%") {
        display.value = num1 % num2;
    }
    else {
        display.value = "Error";
    }
}