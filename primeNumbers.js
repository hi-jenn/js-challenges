//DETERMINE WHETHER A NUM IS PRIME AND RETURN THE SUM OF ALL PRIME NUMBERS THAT ARE LESS THAN OR EQUAL TO THE NUM

//USING NESTED FUNCTION AND FOR LOOPS
function sumThePrimes(num) {
    //create a function to check if the num is prime
    function isItPrime(num) {
    //use a for loop to gather all the numbers between 2 and 1 less than the num (cannot use 1 and the num itself- definition of prime number)
        for (let i = 2; i < num; i++) {
    //if the num is evenly divisible by a number between 2 and 1 less than itself, it is not prime (return false)
            if (num % i === 0) return false;
        };
    //if the num is evenly divisible by a number between 2 and 1 less than itself, it is prime (return true)
        return true;
    };

    //create a variable to hold the sum of prime numbers
    let sum = 0;
    //use a for loop to gather the numbers between 2 and the num 
    for (let i = 2; i <= num; i++) {
    //if those numbers are prime... 
        if (isItPrime(i)) {
    //add those numbers and assign it to sum
            sum += i;
        };
    };
    //return the sum 
    return sum;
};

console.log(sumThePrimes(10));   //Should return 17 (prime numbers are 2, 3, 5, 7)
console.log(sumThePrimes(977));   //Should return 73156


//USING .REDUCE()
function sumThePrimes2(num) {
    //create a function to check if the num is prime
    function isItPrime(num) {
    //use a for loop to gather all the numbers between 2 and 1 less than the num (cannot use 1 and the num itself- definition of prime number)
        for (let i = 2; i < num; i++) {
    //if the num is evenly divisible by a number between 2 and 1 less than itself, it is not prime (return false)
            if (num % i === 0) return false;
        };
    //if the num is evenly divisible by a number between 2 and 1 less than itself, it is prime (return true)
        return true;
    };

    //create a variable to hold an array of all the prime numbers between 2 and num (inclusive)
    let primeNumbers = [];
    //use a for loop to gather the numbers between 2 and the num
    for (let i = 2; i <= num; i++) {
    //if the number is prime...
        if (isItPrime(i)) {
    //add the number to the array
            primeNumbers.push(i);
        };
    };
    //sum all the numbers in the array
    return primeNumbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
};

console.log(sumThePrimes2(10));   //Should return 17
console.log(sumThePrimes2(977));   //Should return 73156