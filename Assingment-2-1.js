// A function takes number as parameter and prints if its +ve, -ve or zero.

function integer(number){
    if(number>0){
      console.log(number,"is Positive");
    }
    else if(number<0){
        console.log(number,"is Negative");
    }
    else{  
        console.log(number,":ZERO is neither Positive nor Negative. ");
    }
}

//calling the function.
integer(0);
integer(100);
integer(-99);