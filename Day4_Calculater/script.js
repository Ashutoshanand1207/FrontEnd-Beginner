const screenDisplay = document.querySelector('.screen');
const buttons = document.querySelectorAll('button');

let calculation = [];
let accumlativeCalculation;

function calculate(button){
    const value = button.textContent;

    if(value === "Clear"){
        calculation = [];
        screenDisplay.textContent = "0";
        
    }
    else if(value === "="){
        screenDisplay.textContent = eval (accumlativeCalculation);
        calculation = [];
        accumlativeCalculation = "";
}
else{
    calculation.push(value);
    accumlativeCalculation = calculation.join('');
    screenDisplay.textContent = accumlativeCalculation;
}
}

buttons.forEach(button => button. addEventListener('click', () => calculate(button)))