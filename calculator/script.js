let displayValue = '';
let operator = null;
let operand1 = null;
let operand2 = null;

function updateDisplay() {
    document.getElementById('display').value = displayValue;
}

function appendNumber(number) {
    displayValue += number;
    updateDisplay();
}

function appendOperator(op) {
    if (operator !== null) {
        calculate();
    }

    operand1 = parseFloat(displayValue);
    operator = op;
    displayValue = operand1 + ' ' + operator + ' ';
    updateDisplay();
}

function appendDot() {
    if (!displayValue.includes('.')) {
        displayValue += '.';
    }
    updateDisplay();
}

function clearDisplay() {
    displayValue = '';
    operator = null;
    operand1 = null;
    operand2 = null;
    updateDisplay();
}

function calculate() {
    const [operand1Str, operatorStr, operand2Str] = displayValue.split(' ');
    operand1 = parseFloat(operand1Str);
    operand2 = parseFloat(operand2Str);

    let result = 0;
    switch (operatorStr) {
        case '+':
            result = operand1 + operand2;
            break;
        case '-':
            result = operand1 - operand2;
            break;
        case '*':
            result = operand1 * operand2;
            break;
        case '/':
            result = operand1 / operand2;
            break;
          
    }
    displayValue = result.toString();
    operator = null;
    operand1 = null;
    operand2 = null;
   
    updateDisplay();
}