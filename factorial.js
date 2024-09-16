/* Write a function to calculate factorial of the given number */

function factorial(number) {
    let result = 1;
    for(let i = 2; i<=number; i++){
        result = result * i;
    }

    console.log("Factorial of "+number+" is "+result);
}

//Test Cases
factorial(5);
factorial(0);
factorial(1);
factorial(10);
