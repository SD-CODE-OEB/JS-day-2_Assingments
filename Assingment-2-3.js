// Write a JavaScript function that takes two numbers as parameters and returns the larger one.

function largeNumber(a,b){
    if(a>b){
        console.log("a=",a,"b=",b);
        console.log(a,"is greater than",b);
    }
    else if(a<b){
        console.log("a=",a,"b=",b);
        console.log(b,"is greater than",a);
    }
    else{
        console.log("a=",a,"b=",b);
        console.log(a,"and",b,"are same.");
    }
}
largeNumber(10,2);