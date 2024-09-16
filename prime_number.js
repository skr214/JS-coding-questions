/* Write a function to find the given number is prime or not */

function isPrime(num) {

    let count = 0;

    for(let i = 2 ; i<=num/2; i++){
        if(num%i == 0) {
            count++;
        }
    }

    if(count > 0){
        console.log(num+ " is not prime number");
    } else {
        console.log(num+ " is prime number");
    }

}

//Test Cases
isPrime(7);
isPrime(10);