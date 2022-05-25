//RETURN TRUE IF THE GIVEN STRING IS A PALINDROME; OTHERWISE, RETURN FALSE

//USING .REVERSE()
function palindromeCheck(str) {
    //convert the string to lowercase and remove all characters that are not alphanumeric
    let newStr = str.toLowerCase().replace(/[\W_]/g, '');
    //convert the newStr to an array to access .reverse() and convert it back into a string
    let reversedStr = newStr.split('').reverse().join('');
    //if newStr equals reversedStr, return true; if not, return false
    if (newStr === reversedStr) return true;

    return false;
};

console.log(palindromeCheck('not a palindrome'));    //Should return false
console.log(palindromeCheck('nurses_ run'));    //Should return true


//USING FOR LOOP TO REVERSE THE STRING
function palindromeCheck2(str) {
    //convert the string to lowercase and remove all characters that are not alphanumeric
    let newStr = str.toLowerCase().replace(/[\W_]/g, '');
    //create a variable to hold the reversed string
    let reversed = '';
    //reverse the string using a for loop and save the reversed string to the new variable
    for (let i = newStr.length - 1; i >= 0; i--) {
        reversed += newStr[i];
    };
    //if newStr equals reversedStr, return true; if not, return false
    return reversedStr == newStr ? true : false;
};

console.log(palindromeCheck2('not a palindrome'));    //Should return false
console.log(palindromeCheck2('nurses_ run'));    //Should return true


//USING FOR LOOP TO CHECK THE LAST LETTER AGAINST THE FIRST LETTER AND SO ON
function palindromeCheck3(str) {
    //convert the string to lowercase and remove all characters that are not alphanumeric
    str = str
		.toLowerCase()
      	.replace(/[\W_]/g, '');
    //iterate through the string
    for (let i = 0; i < str.length; i++) {
    //if the current letter does not equal the last letter (and 2nd letter does not equal second to last letter, etc...)...
      	if (str[i] !== str[str.length - 1 - i]) {
    //return false
        	return false;
      	};
    };
    //if the current letter does equal the last letter, return true
    return true;
  };
  
console.log(palindromeCheck3('not a palindrome'));    //Should return false
console.log(palindromeCheck3('nurses_ run'));    //Should return true