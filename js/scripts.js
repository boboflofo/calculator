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

const num1 = parseInt(prompt("Enter a number:"));

const num2 = parseInt(prompt("Enter another number:"));

const outputtext =
  num1 +
  " + " +
  num2 +
  " = " +
  add(num1, num2) +
  "," +
  num1 +
  " - " +
  num2 +
  " = " +
  subtract(num1, num2) +
  "," +
  num1 +
  " * " +
  num2 +
  " = " +
  multiply(num1, num2) +
  ",and " +
  num1 +
  " / " +
  num2 +
  " = " +
  divide(num1, num2);

window.alert(outputtext);
