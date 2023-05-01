//generate any number between 1 to 100
let generatedNumber = Math.floor((Math.random() * 100) + 1);
console.log("generatedNumber", generatedNumber)
//get the number from the user on btn click
// 1. Define a variable to point to the guess button
const guess = document.getElementById('guess');
// 2. Define a variable to point to the input field
const num = document.getElementById('number');
// point to the message element and set it's innerHTML as the returned value
let messageElement = document.querySelector("#message");
  // 3. add click event listener to the guess button
guess.addEventListener('click',guessNum)
  function guessNum() {
    // 4. on button click get the input from the input field variable (defined in 2. point)
    const enteredValue = num.value;
    // if not check how much diff bw the number generated and the number entered
    let difference = enteredValue - generatedNumber;
    if(enteredValue === ""){
      messageElement.innerHTML = "Please Enter a Number !!";
      message.style.color = "red";
    }
    // 5. check if the number is within the range
    else if(enteredValue < 1 || enteredValue > 100){
      messageElement.innerHTML = "Please enter number btw 1 to 100"
      message.style.color = "red";
    }
    // 6. check if the number is correct
    else if(enteredValue == generatedNumber){
      messageElement.innerHTML = "Congratulation !! You Guessed the correct Number";
      message.style.color = "green";
    }
// case 1: eV < gN : ev = 20. gN = 50 difference = 20-50 = -30
    // case 2: eV > gN : ev = 80. gN = 50 difference = 80-50 = 30
  // 8. return too low if number <= random no. - 20
    else if (difference <= -20 ){
        messageElement.innerHTML = "Too Low";
        message.style.color = "yellow";
      }
  // 9. return too high if number >= random no. + 20
    else if (difference >= 20){
      messageElement.innerHTML = "Too High";
      message.style.color = "red";
    }
    
  // 10. return you are close if diff is less than 5
    else if (difference <= 5 && difference >= -5){
      messageElement.innerHTML = "You are close"
      message.style.color = "orange";
    }
    // 11. return close enough if diff is more than 5 and less 20
    else {
      messageElement.innerHTML = "Close Enough"
      message.style.color = "orange";
    }
  }
// resetGame function is called when user click the reset button
  function resetGame(){
    generatedNumber = Math.floor((Math.random() * 100) + 1);
    message.innerHTML = "Number Changed";
    message.style.color = "Green";
    num.value = "";
    console.log("Reset: ", generatedNumber)
  }
