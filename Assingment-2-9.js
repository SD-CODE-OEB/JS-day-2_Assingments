//A JavaScript function that takes a number as a parameter and gives Fibonacci series up to that number.

function fibonacci(n) {
    let a = 0;
    let b = 1;
    let c;
    for (let i = 0; i < n; i++) {
        c = a + b;
        console.log(c," ");
        a = b;
        b = c;
  }
}
fibonacci(4);
console.log(" ");
fibonacci(10);