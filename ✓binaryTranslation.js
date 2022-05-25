//TRANSLATE A BINARY MESSAGE INTO ENGLISH

function translateMe(str) {
    //create a variable to hold the new message
    let message = str
    //convert the string into an array
        .split(' ')
    //convert each element in the array into a decimal (unicode)    
        .map(code => parseInt(code, 2))
    //convert each element in the array into text    
        .map(code => String.fromCharCode(code))
    //join the array to create a string
        .join('');
    return message;
};

console.log(translateMe("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111"));  //Should return Aren't bonfires fun!?

console.log(translateMe("01000110 01110010 01100101 01100001 01101011"))