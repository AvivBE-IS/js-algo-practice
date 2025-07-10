/*
Create a function that takes two numbers and a mathematical operator + - / * and will perform a calculation with the given numbers.

Examples
calculator(2, "+", 2) ➞ 4

calculator(2, "*", 2) ➞ 4

calculator(4, "/", 2) ➞ 2
Notes
If the input tries to divide by 0, return: "Can't divide by 0!"
*/

function calculator(num1, op, num2) {
  //your code
  if (typeof num1 !== "number") return "First input must be a number.";
  if (typeof op !== "string") return "Second input must be a character.";
  if (typeof num2 !== "number") return "Third input must be a number.";

  switch (op) {
    case "+":
      return num1 + num2;
    case "-":
      return num1 - num2;
    case "*":
      return num1 * num2;
    case "/":
      if (num2 === 0) return "Can't divide by 0!";
      return num1 / num2;
    default:
      return "Operation not supported.";
  }
}

exports.solution = calculator;
