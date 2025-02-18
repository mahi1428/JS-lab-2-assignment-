// Import functions from utilities.js
import { greet, convertKmToMiles, sumOfSquares, isPrime } from './utilities.js';

// Function 1: Greeting
console.log("\nFunction 1: Greeting");
// Call greet function with "Group 3" to log a greeting message
greet("Group 3"); // Output: Hello, Group 3!

// Function 2: Unit Conversion (Kilometers to Miles)
console.log("\nFunction 2: Unit Conversion (Kilometers to Miles)");
// Convert 10 kilometers to miles and format to 2 decimal places
console.log("10 km in miles:", convertKmToMiles(10).toFixed(2)); // Output: 6.21 miles

// Function 3: Sum of Squares of Digits
console.log("\nFunction 3: Sum of Squares of Digits");
// Calculate sum of squares of digits for the number 123 (1² + 2² + 3² = 14)
console.log("Sum of squares of digits in 123:", sumOfSquares(123)); // Output: 14

// Function 4: Prime Check
console.log("\nFunction 4: Prime Check");
// Check if 17 is a prime number (returns true)
console.log("Is 17 a prime number?", isPrime(17)); // Output: true
// Check if 20 is a prime number (returns false)
console.log("Is 20 a prime number?", isPrime(20)); // Output: false
