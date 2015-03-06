var sget = require("sget");

function add(num1, num2) {
  return num1 + num2;
}

function subtract(num1, num2) {
  return num1 - num2;
}

function mutiply(num1, num2) {
  return num1 * num2;
}

function divide(num1, num2) {
  return num1 / num2;
}

function sqRoot(num) {
  return Math.sqrt(num);
}

// function getTwoNumbers(){
//   var num1 = sget("Enter the first number. ");
//   var num2 = sget("Enter the second number.");
//   return [Number(num1), Number(num2)];
// }



function getFirstNumber(){
  var number = sget("Enter the first number. ");
  if(isValidNumber(number)){
    return Number(number);
  }else{
    console.log("!!!!!!!That is not a valid number.!!!!!!!\n");
    operatorChoice();
  }
}

function getSecondNumber(){
  var number = sget("Enter the second number. ");
  if(isValidNumber(number)){
    return Number(number);
  }else{
    console.log("!!!!!!!That is not a valid number.!!!!!!!\n");
    operatorChoice();
  }
}

function getSingleNumber(){
  var number = sget("Enter a number. ");
  if(isValidNumber(number)){
    return Number(number);
  }else{
    console.log("!!!!!!!That is not a valid number.!!!!!!!\n");
    operatorChoice();
  }
}

function isValidNumber(input){
  return Number(input) == input;
}

function operatorChoice(){

  var userInput = sget("What operation would you like to perform? \n 1- addition\n 2- subtraction\n 3- multiplication\n 4- division\n 5- square root\n 6- quit\nPlease enter 1-6 ");

  switch(userInput.trim()){
    case "1":
      console.log("Ok, addition.");
      console.log("The answer is " + add(getFirstNumber(), getSecondNumber()) + ".\n");
      operatorChoice();
      break;
    case "2":
      console.log("Ok, subtraction.");
      console.log("The answer is " + subtract(getFirstNumber(), getSecondNumber()) + ".\n");
      operatorChoice();
      break;
    case "3":
      console.log("Ok, multiplication.");
      console.log("The answer is " + mutiply(getFirstNumber(), getSecondNumber()) + ".\n");
      operatorChoice();
      break;
    case "4":
      console.log("Ok, division.");
      console.log("The answer is " + divide(getFirstNumber(), getSecondNumber()) + ".\n");
      operatorChoice();
      break;
    case "5":
      console.log("Ok, square root.");
      console.log("The answer is " + sqRoot(getSingleNumber() + ".\n"));
      // var singleNum = sget("Enter a number: ");
      // console.log("The square root of %s is %s.\n", singleNum.trim(), sqRoot(Number(singleNum)));
      operatorChoice();
      break;
    case "6":
      console.log("Goodbye.");
      break;
    default:
      console.log("Invalid input, please try again");
      operatorChoice();
  }
}

operatorChoice();








