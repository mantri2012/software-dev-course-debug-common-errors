/*

Overview
In this activity, you will receive three short JavaScript programs,
each containing a different type of error (syntax, runtime, and logic)
along with a brief explanation of what the program is supposed to do.
Your task is to identify the error, correct it, and verify the fix.

Instructions
Debugging Steps:
  - Identify the error type (syntax, runtime, or logic).
  - Use Debugging Techniques such as reading error messages, using console.log(), or testing in small steps.
  - Propose a Fix that addresses the error.
  - Verify the Solution by running the code again to ensure the program works as intended.

Reflection:
Think about which debugging methods you found most useful and how you might apply them in future projects.

*/

// Programs and Solutions

// Program A
// Description:
// This program is intended to display a simple prompt in the console but fails to run.
// 

console.log("Welcome to the bootcamp")

// What’s Wrong?
// There was no closing quotes (") after bootcamp and a closing bracket (')').


// Program B
// Description:
// This code attempts to multiply each number in an array by 2 and display the results. However, it crashes at runtime.

let numbers = [2, 4, 8];
for (let i = 0; i < numbers.length; i++) {
  let doubled = numbers[i] * 2;
  console.log(doubled);
} 

// What’s Wrong?
// Array contains a string value "eight" and multiplication operation is being performed on that string, multiplying a number by a string that doesn't represent a valid number results in NaN (Not-a-Number), which is causing unexpected behavior.


// Program C (Logic Error)
// Description:
// This snippet of code is supposed to check if a given number is prime (i.e., divisible only by 1 and itself). However, it incorrectly marks some numbers as prime or not prime.

function isPrime(num) {
  if (num < 2) {
    console.log(num +" : is less than 2.");
    return false};
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      console.log(num +" : is not a prime number.");
      return false;  // Supposed to indicate num is NOT prime
    }
  }
  console.log(num +" : is prime.");
  return true; // Supposed to indicate num IS prime
}

console.log(isPrime(11)); // Expected true but gets false 

// What’s Wrong?
// When a number is divisible  by 2 that is even, in the if condition where num % i = 0, the return was true. So changed that to false so that it gives the right output after calculation.