//A JavaScript function that takes a positive integer as a parameter and prints all the prime numbers less than or equal to that integer.

function printPrimes(num){
    if(num<0){
        console.log("Invalid input");
    }
    else if(num===0){
        console.log("Zero is nether a Prime nor A Composite.");
    }
    else{
        let flag=0;
        for(let i=2;i<=num;i++){
            for(let j=2;j<=i;j++){
                if(i%j===0){
                    flag++;
                }
            }
            if(flag===1){
                console.log(i);
            }
            flag=0;
        }
    }
}

//calling the function.
printPrimes(10);