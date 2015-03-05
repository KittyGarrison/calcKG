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
var userInput = sget("What operation would you like to perform? \n 1- addition\n 2- subtraction\n 3- multiplication\n 4- division\n 5- square root\n 6- quit\nPlease enter 1-6 ");

switch(userInput.trim()){
  case "1":
    console.log("Ok addition.");
    break;
  case "2":
    console.log("Ok subtraction.");
    break;
  case "3":
    console.log("Ok multiplication.");
    break;
  case "4":
    console.log("Ok division.");
    break;
  case "5":
    console.log("Ok square root.");
    break;
  case "6":
    console.log("Goodbye.");
    break;
  default:
    console.log("Invalid input, please try again");
}









