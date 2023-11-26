//Write a JavaScript function that simulates a simple calculator using 3 parameters.


function calculator(num1, num2, op){
    switch (op) {
        case "+":
            return num1 + num2;
        case "-":
            return num1 - num2;
        case "*":
            return num1 * num2;
        case "/":
            return num1 / num2;
        default:
            return "Invalid operator";
    }

}

//calling the function.
console.log(calculator(5, 2, "+"));
console.log(calculator(56, 8, "*"));
console.log(calculator(7, 2, "/"));