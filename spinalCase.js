//CONVERT A STRING TO A SPINAL CASE (ALL LOWERCASE WORDS JOINED BY DASHES)

//USING .REPLACE() AND REGEX
function spinalCase(str) {
    return str
    //place a dash between a lowercase letter followed by an uppercase letter 
        .replace(/([a-z])([A-Z])/g, '$1-$2')
    //replace all non alphanumeric characters with a dash
        .replace(/[\W_]/g, '-')
    //convert all alpha characters to lowercase
        .toLowerCase();
};

console.log(spinalCase('Hey Fozzie beary'));   //Should return hey-fozzie-beary


//USING .SPLIT() AND REGEX
function spinalCase2(str) {
    return str
    //convert the string to an array and split it at any non alphanumeric character or if there is a capital letter coming up
        .split(/[\W_]|(?=[A-Z])/)
    //join the elements in the array with a - and convert back into a string
        .join('-')
    //convert the string to lowercase
        .toLowerCase();
};

console.log(spinalCase2("thisIsSpinalTap"));  //Should return this-is-spinal-tap