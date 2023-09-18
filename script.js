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
    return num1 / num2;
}

let number1, number2, operator;

function operate(operator, number1, number2) {
    
    switch(operator) {
        case "+" :
        return add(number1, number2);
        break;
        case "-" :
        return subtract(number1, number2);
        break;
        case "*" :
        return multiply(number1, number2);
        break;
        case "/" :
        return divide(number1, number2);
        break;
        default:
        return "ERROR";
        break;
    }
}
