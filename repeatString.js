//REPEAT A GIVEN STRING (1ST ARGUMENT) FOR NUM OF TIMES (2ND ARGUMENT); RETURN AN EMPTY STRING IF NUM IS NOT A POSITIVE NUMBER; DO NOT USE REPEAT()

//USING A FOR LOOP- DECREMENTING
function repeat(str, num) {
    //create a variable to hold the repeated str 
    let repeatStr = '';
    //use a for loop to count the num of times to add the str to the new variable starting at the num and counting down
    for (let i = num; i > 0; i--) {
        repeatStr += str + ' ';
    };
    //return the new variable
    return repeatStr;
};

console.log(repeat('blue', 3));  //Should return blue blue blue


//USING A FOR LOOP- INCREMENTING
function repeat2(str, num) {
    //create a variable to hold the repeated str
    let repeatArr = [];
    //use a for loop to count the num of times to add the str to the new variable starting at 1 and counting up to the num
    for (let i = 1; i <= num; i++) {
        repeatArr.push(str);
    };
    //return the new variable and convert it into a string
    return repeatArr.join(' ');
};

console.log(repeat2('blue', 3));  //Should return blue blue blue 


//USING A WHILE LOOP
function repeatString(str, num) {
    //create a variable to hold the repeated string
    let repeatStr = '';
    //start at the num and while it is greater than 0...
    while (num > 0) {
    //add the string and a space to the new variable
        repeatStr += str + ' ';
    //decrement the num each time the loop runs until reaching the condition of < 0
        num--;
    };
    //return the new variable
    return repeatStr;
};

console.log(repeatString('blue', 3));     //Should return blue blue blue


//USING RECURSION
function repeatAgain(str, num) {
    //write a base case that will stop the recursion
    if (num < 1) {
        return '';
    };
    //return the string and recurse while decrementing the num argument until the base case is reached    
    return str + ' ' + repeatAgain(str, num - 1);    
};

console.log(repeatAgain('blue', 3));         //Should return blue blue blue