

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

function getSingleNumber(saying){
  var number = sget(saying).trim();
  if(isNaN(number)){
    console.log("!!!!!!!That is not a valid number.!!!!!!!\n");
    return getSingleNumber(saying);
  }else{
    return Number(number);
  }
}

function operatorChoice(){

  var userInput = sget("What operation would you like to perform? \n 1- addition\n 2- subtraction\n 3- multiplication\n 4- division\n 5- square root\n 6- quit\nPlease enter 1-6 ");

  switch(userInput.trim()){
    case "1":
      console.log("Ok, addition.");
      console.log("The answer is " + add(getSingleNumber("Enter your first number. "), getSingleNumber("Enter your second number. ")) + ".\n");
      operatorChoice();
      break;
    case "2":
      console.log("Ok, subtraction.");
      console.log("The answer is " + subtract(getSingleNumber("Enter your first number. "), getSingleNumber("Enter your second number. ")) + ".\n");
      operatorChoice();
      break;
    case "3":
      console.log("Ok, multiplication.");
      console.log("The answer is " + mutiply(getSingleNumber("Enter your first number. "), getSingleNumber("Enter your second number. ")) + ".\n");
      operatorChoice();
      break;
    case "4":
      console.log("Ok, division.");
      console.log("The answer is " + divide(getSingleNumber("Enter your first number. "), getSingleNumber("Enter your second number. ")) + ".\n");
      operatorChoice();
      break;
    case "5":
      console.log("Ok, square root.");
      console.log("The answer is " + sqRoot(getSingleNumber("Enter a number. "))+ ".\n");
      operatorChoice();
      break;
    case "6":
      console.log("Goodbye.");
      break;
    default:
      console.log("Invalid input, please try again.\n");
      operatorChoice();
      break
  }
}

operatorChoice();








