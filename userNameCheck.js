//CHECK USERNAMES IN A DATABASE USING REGEX WITH THE FOLLOWING RULES:
//  USERNAMES CAN ONLY USE ALPHA-NUMERIC CHARACTERS
//  THE ONLY NUMBERS IN THE USERNAME HAVE TO BE AT THE END (0 OR MORE; CANNOT START WITH A NUMBER)
//  USERNAME LETTERS CAN BE LOWERCASE AND UPPERCASE
//  USERNAMES MUST BE AT LEAST 2 CHARACTERS LONG; IF ONLY 2 CHARACTERS, MUST BE LETTERS

let username = "JackOfAllTrades";

//USING .TEST()
function checkUserName(str) {
    //create a regex to test the username against
    const rules = /^[a-z]{2,}\d*$|^[a-z]\d\d+$/i;
    //test the username
    return rules.test(str);
};

console.log(checkUserName(username));   //Should return true
console.log(checkUserName('Z7aaa'));    //Should return false