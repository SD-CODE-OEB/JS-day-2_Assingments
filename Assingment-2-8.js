//A JavaScript function that takes a +ve integer as a parameter and check if it is perfect number.

function isPerfect(num) {
    if (num <= 0) {
        console.log("please take a Positive number.");
    }
    else{
        let sum = 0;
        for (let i = 1; i < num; i++) {
            if (num % i == 0) {
                sum += i;
            }
        }
        if(sum == num){
            console.log(num ,": It is a perfect number.");
        }
        else{
            console.log(num,": It is not a perfect number.");
        }
    }
}

//calling the function.
isPerfect(6);
isPerfect(19);
isPerfect(28);
