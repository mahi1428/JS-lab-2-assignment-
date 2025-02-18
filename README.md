JavaScript Utility Functions

This document explains four simple JavaScript functions that perform common utility tasks. These functions include greeting a user, converting kilometers to miles, summing the squares of digits, and checking if a number is prime.

project-folder/
│── utilities.js   # Contains function definitions
│── main.js        # Imports and executes functions
│── README.md      # Documentation

Functions Explained
1. Greeting Function

Function Name: greet(name)

This function prints a personalized greeting message to the console.

Usage: greet("John");

Output: Hello John! Keep pushing your limits in JavaScript!

2. Convert Kilometers to Miles

Function Name: convertKmToMiles(km)

This function converts a given distance from kilometers to miles using the conversion factor 1 km = 0.621371 miles.

Usage: convertKmToMiles(10);

Output: 6.21 (for 10 km, rounded to 2 decimal places)

3. Sum of Squares of Digits

Function Name: sumOfSquares(number)

This function calculates the sum of the squares of the digits of a given number.

Example Calculation: If the input is 123, the function computes 1² + 2² + 3² = 14.

Usage: sumOfSquares(123);

Output: 14

4. Prime Number Checker

Function Name: isPrime(num)

This function checks whether a given number is a prime number.

It returns true for prime numbers and false for non-prime numbers.

Usage: isPrime(17);

Output: true (since 17 is a prime number)
