//EASY REVERSE WORDS CHALLENGE- REVERSE THE WORDS IN A GIVEN STRING
let string = 'May the Fourth be with you';

//USING FOR LOOP
function reverse(str) {
    //create a variable to hold the reversed string
    let reversedStr = '';
    //iterate through the string starting at the end 
    for (let i = str.length - 1; i >= 0; i--) {
    //add each element to the new variable
        reversedStr += str[i];
    };
    //return the new variable
    return reversedStr;
};

console.log(reverse(string));  //Should return uoy htiw eb htruoF eht yaM


//USING FOR...OF LOOP
function reverse2(str) {
    let reversedStr = '';
    for (let char of str) {
        reversedStr = char + reversedStr;
    };
    return reversedStr;
};

console.log(reverse2(string))    //Should return uoy htiw eb htruoF eht yaM


//USING RECURSION
function reverse3(str) {
    if (!str) {
        return '';
    };
    return reverse(str.slice(1)) + str[0];
};

console.log(reverse3(string));    //Should return uoy htiw eb htruoF eht yaM


//USING .REVERSE()
function reverse4(str) {
    //convert the string into an array to access .reverse()
    //reverse the words in the array with .reverse()
    //join the array back into a string using .join()
    return str  
        .split('')
        .reverse()
        .join('');
};

console.log(reverse4(string));    //Should return uoy htiw eb htruoF eht yaM


//REVERSE ONLY THE WORDS NOT THE LETTERS
//USING .REVERSE()
function reverseMethod(str) {
    //convert the string into an array to access .reverse()
    //reverse the words in the array with .reverse()
    //join the array back into a string using .join()
    return str  
        .split(' ')
        .reverse()
        .join(' ');
};

console.log(reverseMethod(string));     //Should return you with be Fourth the May


//REVERSE THE LETTERS IN EVERY 3RD WORD IN A STRING; THE STRING ONLY CONTAINS SPACES, NO PUNCTUATIONS
//USING .MAP()
function reverseThirdWord(str) {
    //convert the string into an array to access each element
    let arr = str.split(' ');
    //iterate through each element in the array to reverse every third word using .map()
    let reversedThird = arr.map((word, index) => {
    //make the index counting start at 1 and if that number is divided by 3 evenly...
        if ((index + 1) % 3 === 0) {
    //convert the element into an array to access .reverse() and then convert it back into a string
            word = word.split('').reverse().join('');
        };
        return word;
    });
    //convert the array back into a string
    return reversedThird.join(' ');
};

console.log(reverseThirdWord2('blue yellow red blue yellow orange red green sam son'));  //Should return blue yellow der blue yellow egnaro red green mas son


//USING FOR LOOP
function reverseThirdWord2(str) {
    //convert the string into an array to access each element
    let arr = str.split(' ');
    //create a variable to hold the new string
    let newStr = '';
    //iterate through the array
    for (let i = 0; i < arr.length; i++) {
    //for every 3rd word...
        if ((i + 1) % 3 == 0) {
    //reverse it and save to the new variable
            arr[i] = arr[i].split('').reverse().join('');
            newStr += arr[i] + ' ';
    //for every other word...
        } else {
    //save to the new variable
            newStr += arr[i] + ' ';
        };
    };
    //return the new string
    return newStr;
};

console.log(reverseThirdWord2('blue yellow red blue yellow orange red green sam son'));  //Should return blue yellow der blue yellow egnaro red green mas son


//REVERSE THE LETTERS IN EACH WORD WHILE PRESERVING THE WORD'S LOCATION; THE STRING ONLY CONTAINS SPACES, NO PUNCTUATIONS
//USING FOR...OF LOOP
function reverseLettersOnly(str) {
    let arr = str.split(' ');
    let reversedStr = '';
    for (let word of arr) {
        reversedStr += word.split('').reverse().join('') + ' ';  
    };
    return reversedStr;
};

console.log(reverseLetters(string));   //Should return yaM eht htruoF eb htiw uoy


//USING .MAP()
function reverseLettersOnly2(str) {
    return str
        .split(' ')
        .map(word => word.split('').reverse().join(''))
        .join(' ');
};

console.log(reverseLettersOnly2(string));   //Should return yaM eht htruoF eb htiw uoy