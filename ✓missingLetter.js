//FIND THE MISSING LETTER IN THE PASSED LETTER RANGE AND RETURN IT; IF ALL LETTERS PRESENT IN THE RANGE, RETURN UNDEFINED

//USING .MAP() AND FOR LOOP AND .CHARCODEAT() AND .FROMCHARCODE()
function findTheLetter(str) {
    //convert str to array and convert each letter to unicode
    let code = str.split('').map(letter => letter.charCodeAt());
    //create a variable to hold the missing letter
    let missingLetter = [];
    //iterate through the unicode 
    for (let i = 0; i < code.length; i++) {
    //if a number is missing, push that number to the newly created variable
        if (code[0] + i !== code[i]) {
            missingLetter.push(code[0] + i);
    //and return the missingLetter after converting it into text and then a string
            return missingLetter.map(letter => String.fromCharCode(letter)).join('');
        };
    };
    //return undefined if no letter is missing
    return undefined;
};

console.log(findTheLetter("abde"));    //Should return c


//USING FOR LOOP AND .CHARDCODEAT() AND .FROMCHARCODE()
function findTheLetter2(str) {
    //iterate through the string of letters
    for (let i = 0; i < str.length; i++) {
    //if the current element (which is converted to unicode) does not equal the next sequential number...
        if (str[i].charCodeAt() !== str[0].charCodeAt() + i) {
    //save that number to a new variable and convert it to a letter
            let missingCharCode = str[0].charCodeAt() + i;
            let missingLetter = String.fromCharCode(missingCharCode);
            return missingLetter;
        };
    };
    //return undefined if no letters are missing
    return undefined;
};

console.log(findTheLetter2("abcde"));       //Should return undefined


//A DIFFERENT WAY TO WRITE .CHARCODEAT()
function findTheLetter3(str) {
    for (let i = 0; i < str.length; i++) {
        if (str.charCodeAt(i) !== str.charCodeAt(0) + i) {
            let missingCharCode = str.charCodeAt(0) + i;
            let missingLetter = String.fromCharCode(missingCharCode);
            return missingLetter;
        }; 
    };
    return undefined;
};

console.log(findTheLetter3("abce"));     //Should return d


//USING .INDEXOF() 
function findTheLetter4(str) {
    let alphabet = 'abcdefghijklmnopqrstuvwxyz'
    let startingPoint = alphabet.indexOf(str[0])
    for (let i = 0; i < str.length; i++) {
        if (str[i] !== alphabet[startingPoint + i]) {
            return alphabet[startingPoint + i]
        } 

    }
    return undefined
}

console.log(findTheLetter4("jklnop"));    //Should return m