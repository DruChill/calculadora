let displayvalue = "";
let currentOperation = null;
let firstOperand =null;
function appendNumber(number){
    displayvalue +=number;
    updateDisplay();

}  

function setOperation(Operation){
    if(currentOperation !== null){
        calculate();
    }
    firstOperand = parseFloat(displayvalue);
    currentOperation = Operation;
    displayvalue = '';

}
function calculate(){
    if(currentOperation === null || displayvalue==='')return;
    const secondOperand = parseFloat(displayvalue);
    switch(currentOperation){
        case'+':
            displayvalue = (firstOperand + secondOperand).toString();
            break;
        case'-':
            displayvalue= (firstOperand - secondOperand).toString();
            break;
        case '*':
            displayvalue = (firstOperand * secondOperand).toString();
            break;
        case '/':
            displayvalue = (firstOperand / secondOperand).toString();
            break;    
    }
    updateDisplay();
    currentOperation = null;
}

function clearDisplay(){
    displayvalue= '';
    currentOperation = null;
    firstOperand = null;
    updateDisplay();
}
function updateDisplay(){
    document.getElementById('calc-display').value = displayvalue;
}