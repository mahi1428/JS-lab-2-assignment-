// Import functions from utilities.js
import { greet, convertKmToMiles, sumOfSquares, isPrime } from './utilities.js'; // Importing all required functions from utilities.js file

// Function 1: Greeting
console.log("\nFunction 1: Greeting"); // Print a heading for the first function output
greet("Group 3"); // Calls the greet function with the argument "Group 3" to display a motivational message

// Function 2: Unit Conversion (Kilometers to Miles)
console.log("\nFunction 2: Unit Conversion (Kilometers to Miles)"); // Print a heading for the second function output
console.log("10 km in miles:", convertKmToMiles(10).toFixed(2)); // Calls convertKmToMiles function with 10 km as input, converts to miles, and limits output to 2 decimal places

// Function 3: Sum of Squares of Digits
console.log("\nFunction 3: Sum of Squares of Digits"); // Print a heading for the third function output
console.log("Sum of squares of digits in 123:", sumOfSquares(123)); // Calls sumOfSquares function with number 123 and prints the sum of squares of its digits

// Function 4: Prime Check
console.log("\nFunction 4: Prime Check"); // Print a heading for the fourth function output
console.log("Is 17 a prime number?", isPrime(17)); // Calls isPrime function with 17 as input, checks if it's prime, and prints the result (true)
console.log("Is 20 a prime number?", isPrime(20)); // Calls isPrime function with 20 as input, checks if it's prime, and prints the result (false)
