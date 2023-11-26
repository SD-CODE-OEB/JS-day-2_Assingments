//Write a JavaScript function that takes a positive integer as a parameter and prints its multiplication table up to 10.

function printTable(num) {
    for (let i = 1; i <= 10; i++) {
        console.log(num,"x", i, "=",(num*i))
    }
}

printTable(5);