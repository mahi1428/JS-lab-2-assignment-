// Function 1: Greeting Message (No return value)
export function greet(name) { // Function that takes a single parameter 'name'
    console.log(Hello ${name}! Keep pushing your limits in JavaScript!); // Prints a greeting message with the provided name
}

// Function 2: Convert Kilometers to Miles
export function convertKmToMiles(km) { // Function that takes a distance in kilometers as input
    return km * 0.621371; // Multiplies the input kilometers by the conversion factor to convert to miles
}

// Function 3: Sum of Squares of Digits
export function sumOfSquares(number) { // Function that takes a number as input
    return number // Starts processing the input number
        .toString() // Converts the number into a string so it can be split into individual digits
        .split('') // Splits the string into an array of characters (digits)
        .map(digit => parseInt(digit) ** 2) // Converts each character back to an integer and squares it
        .reduce((sum, squared) => sum + squared, 0); // Sums up all squared values and returns the final sum
}

// Function 4: Check if a Number is Prime
export function isPrime(num) { // Function that checks if a given number is prime
    if (num < 2) return false; // If the number is less than 2, return false (since 2 is the smallest prime number)
    for (let i = 2; i <= Math.sqrt(num); i++) { // Loop from 2 to the square root of the number (optimization for efficiency)
        if (num % i === 0) return false; // If the number is divisible by 'i', it is not prime, so return false
    }
    return true; // If no divisors are found, return true (the number is prime)
}
