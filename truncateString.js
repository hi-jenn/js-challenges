//TRUNCATE A STRING (1ST ARGUMENT) IF IT IS LONGER THAN THE GIVEN MAXIMUM STRING LENGTH(2ND ARGUMENT); RETURN THE TRUNCATED STRING ENDING WITH ...

//USING .SLICE()
function truncateString(str, maxLength) {
    //if the string's length is less than or equal to the maxLength, return the entire str
    if (str.length <= maxLength) {
        return str;
    };
    //otherwise, return the maxLength of the string followed by '...'
    return str.slice(0, maxLength) + '...';
};

console.log(truncateString("I'm having a blast", 40));  //Should return I'm having a blast
console.log(truncateString('Let me tell you about the project I\'m working on', 15));  //Should return Let me tell you...