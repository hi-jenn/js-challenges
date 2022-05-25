//FACTORIALIZE THE NUMBER 

//USING FOR LOOP
function factorialize(num) {
    //create a variable to hold the factored number
    let factoredNum = 1;
    //gather the numbers between 1 and num
    for (let i = num; i > 0; i--) {
    //multiply them together and save to the new variable
        factoredNum *= i;
    };
    //return the new variable
    return factoredNum;
};

console.log(factorialize(4));  //Should return 24


//USING RECURSION
function factorialize2(num) {
    //set the base case; when num < 1, stop recursing and return 1
    if (num < 1) return 1;
    //return the number multiplied by num - 1 and continue until the base case is reached
    return num * factorialize2(num - 1);
};

console.log(factorialize2(8));  //Should return 40320


//USING WHILE LOOP
function factorialize3(num) {
    //create a variable to hold the factored number
    let factoredNum = num;
    //multiply the numbers between num and 1 and save to the new variable
    while (num > 1) {
        factoredNum *= num - 1;
        num--;
    };
    //return the new variable
    return factoredNum;
};

console.log(factorialize3(5));   //Should return 120