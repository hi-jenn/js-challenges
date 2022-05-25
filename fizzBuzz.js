//FIZZBUZZ CHALLENGE- COUNT FROM 1-100; IF # IS DIVISIBLE BY 3, SUBSTITUTE 'FIZZ' FOR THE #; IF # IS DIVISIBLE BY 5, SUBSTITUTE 'BUZZ' FOR THE #; IF # IS DIVISIBLE BY 3 & 5, SUBSTITUTE 'FIZZBUZZ' FOR THE #

//USING A FOR LOOP AND IF/IF ELSE STATEMENTS
function fizzBuzz() {
    //use a for loop to count from 1-100
    for (let i = 1; i <= 100; i++) {
    //set the cases for number substitutions
        if (i % 3 === 0 && i % 5 === 0) {
            console.log('FIZZBUZZ');
        } else if (i % 3 === 0) {
            console.log('FIZZ');
        } else if (i % 5 === 0) {
            console.log('BUZZ');
    //if no substitutions, log the number
        } else {
            console.log(i);
        };
    };
};

console.log(fizzBuzz());



function fizzBuzz() {
    let numbers = [];
    for (let i = 1; i <= 100; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            numbers.push('FIZZBUZZ');
        } else if (i % 3 === 0) {
            numbers.push('FIZZ');
        } else if (i % 5 === 0) {
            numbers.push('BUZZ');
    //if no substitutions, log the number
        } else {
            numbers.push(i);
        };
    }
    return numbers
}


//USING SWITCH 
function fizzBuzz2() {
    //use a for loop to count from 1-100
    for (let i = 1; i <= 100; i++) {
    //set the cases for number substitutions
        switch(0) {
            case (i % 3 || i % 5):
                console.log('FIZZBUZZ');
                break;
            case (i % 3):
                console.log('FIZZ');
                break;
            case (i % 5):
                console.log('BUZZ');
                break;
    //if no substitutions, log the number
            default: 
                console.log(i);
        };
    };
};

console.log(fizzBuzz2());