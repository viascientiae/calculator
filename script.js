let number1 = null;
let number2 = null;
let operator = null;


function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    if (num2 === 0) {
        return "Error: Division by Zero";
    }
    return num1 / num2;
}

function operate(operator, number1, number2) {
    switch(operator) {
        case "+" :
        return add(number1, number2);
        case "-" :
        return subtract(number1, number2);
        case "*" :
        return multiply(number1, number2);
        case "/" :
        return divide(number1, number2);
        default:
        return "ERROR";
        }
}

const display = document.getElementById('display-text');
const clear = document.getElementById('clear-button');
const equals = document.getElementById('equals-button');

for (let i = 0; i < 14; i++) {
    const button = document.getElementById(`${i}`);
    button.addEventListener('click', () => displayText(i));
}

clear.addEventListener('click', () => clearDisplay());

equals.addEventListener('click', () => performOperation());

let displayValue = "";
let operations = ["/", "*", "-", "+"];

function displayText(button) {

    const displayTextMap = [
        "0", "1", "2", "3", "4", 
        "5", "6", "7", "8", "9", 
       `÷`, `×`, "-", "+"
    ];    

    displayValue += displayTextMap[button];

    if (button > 9) {
            if (number1 === null) {
                number1 = parseFloat(displayValue.slice(0,-1));
            }
            operator = operations[button - 10];
            displayValue = "";
    }
    

    display.textContent = displayValue;

}

function clearDisplay() {
    number1 = null;
    number2 = null;
    operator = null;
    displayValue= "";
    display.textContent = "";

}

function performOperation() {

    if(operator && number1 !== null && displayValue !== "") {
        number2 = parseFloat(displayValue);
        const result = operate(operator, number1, number2);
        display.textContent = result;
        number1 = result;
        displayValue = "";

    }

}