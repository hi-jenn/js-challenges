//CAESAR CIPHER (SHIFT CIPHER)- USE ROT13 (VALUES OF LETTERS ARE SHIFTED BY 13 PLACES) TO RETURN A DECODED STRING; PASS ON THE NON-ALPHABETIC CHARACTERS

//USING ARRAYS WITH .MAP()
function shift(str) {
    let arr = str 
    //change all letters to uppercase
        .toUpperCase() 
    //convert the string to an array in order to use .map()
        .split('')
    //convert each character in the array to its unicode
        .map(char => char.charCodeAt());
    
    //create a new variable to save the deciphered code
    let decipheredCode = [];
    //iterate through each unicode in the array
    for (let char of arr) {
    //if the unicode is 65-77...
        if (char >= 65 && char < 78) {
    //add 13 to the code, convert the unicode to letters and push the letters into the new variable
            decipheredCode.push(String.fromCharCode(char + 13));
    //if the unicode is 78-90...    
        } else if (char >= 78 && char <= 90) {
    //subtract 13 from the code, convert the unicode to letters and push the letters into the new variable
            decipheredCode.push(String.fromCharCode(char - 13));
    //if the code is not within the above ranges...
        } else {
    //convert the unicode to letters and push the letters into the new variable
            decipheredCode.push(String.fromCharCode(char));
        };
    };
    //convert the new array to a string and return 
    return decipheredCode.join('');
};

console.log(shift("N"));   //Should return A
console.log(shift('"SERR YBIR?"')); //Should return "FREE LOVE?"


//ABOVE REFACTORED USING ONLY STRINGS
function shift2(str) {
    //create a variable to hold the deciphered message
    let decipheredCode = '';
    //iterate through the string
    for (let char of str) {
    //convert each letter to unicode
        let code = char.charCodeAt();
    //if the unicode is 65-77, add 13 to the unicode and save to the deciphered message
        if (code >= 65 && code < 78) {
            decipheredCode += String.fromCharCode(code + 13);
    //if the unicode is 78-90, subtract 13 from the unicode and save to the deciphered message
        } else if (code >= 78 && code <= 90) {
            decipheredCode += String.fromCharCode(code - 13);
    //if the unicode is outside the above ranges, just save to the deciphered message
        } else {
            decipheredCode += char;
        };
    };
    //return the deciphered message
    return decipheredCode;
};

console.log(shift2("N"));   //Should return A
console.log(shift2('"SERR YBIR?"')); //Should return "FREE LOVE?"