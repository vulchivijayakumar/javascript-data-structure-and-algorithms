/*
  Recursion function - Self calling function
  1. Why Recursion
  2. Tracing Recursive execution
  3. Template for a Recursive function
  4. Looping
  5. Factorial with loop
  6. Factorial with recursion
  7. Recursion questions
  8. Reverse solution
  9. Multiplier solutions
*/

let tracker = 0;
let callMe = function () {
  tracker++;
  if (tracker === 3) {
    return 'loops'; 
  }
  return callMe();
}

callMe();

// Loop
let loopNtimes = function (n) {
  console.log('n equals ', n); 
  if (n <= 1) {
    return 'Complete!';
  }
  return loopNtimes(n-1);
}

loopNtimes(3); // loops 3 times, 3, 2, 1 condition true return complete text.

// Factorial 6! 6 * 5 * 4 * 3 * 2 * 1 = 

// Factorial with loop
let factorialLoop = function (fact) {
  let result = 1;
  for (let i = 2; i < fact; i++) {
    result *= i;
  }
  return result;
}

factorialLoop(6);

// Factorial with recursion
function computeFactorial (num) {
  if (num === 1) {
    return 1;
  } else {
    return num * computeFactorial(num - 1);
  }
}

computeFactorial(5);