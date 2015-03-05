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

function getTwoNumbers(){
  var num1 = sget("Enter the first number. ");
  var num2 = sget("Enter the second number.");
  return [Number(num1), Number(num2)];
}


function operatorChoice(){

  var userInput = sget("What operation would you like to perform? \n 1- addition\n 2- subtraction\n 3- multiplication\n 4- division\n 5- square root\n 6- quit\nPlease enter 1-6 ");

  switch(userInput.trim()){
    case "1":
      console.log("Ok, addition.");
      var twoNumbers = getTwoNumbers();
      console.log(add(twoNumbers[0],twoNumbers[1]));
      operatorChoice();
      break;
    case "2":
      console.log("Ok, subtraction.");
      var twoNumbers = getTwoNumbers();
      console.log(subtract(twoNumbers[0],twoNumbers[1]));
      operatorChoice();
      break;
    case "3":
      console.log("Ok, multiplication.");
      var twoNumbers = getTwoNumbers();
      console.log(mutiply(twoNumbers[0],twoNumbers[1]));
      operatorChoice();
      break;
    case "4":
      console.log("Ok, division.");
      var twoNumbers = getTwoNumbers();
      console.log(divide(twoNumbers[0],twoNumbers[1]));
      operatorChoice();
      break;
    case "5":
      console.log("Ok, square root.");
      var singleNum = sget("Enter a number: ");
      console.log("The square root of %s is %s.", singleNum.trim(), sqRoot(Number(singleNum)));
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








