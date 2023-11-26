//A function that takes a positive integer as a parameter and calculates its factorial using 'for' loop.

function factorial(n) {
    let result = 1;
    for (let i = 1; i <= n; i++) {
      result = result * i;
    }
    return result;
}

//calling the function.
console.log(factorial(5));
console.log(factorial(8));