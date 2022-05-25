//PERFORM A SEARCH AND REPLACE ON THE SENTENCE USING THE ARGUMENTS PROVIDED AND RETURN THE NEW SENTENCE; PRESERVE THE CASE OF THE FIRST CHARACTER IN THE ORIGINAL WORD WHEN IT'S REPLACED

//USING .REPLACE() AND .SLICE()
function searchAndReplace(str, target, replacement) {
    //if the first letter of the target word is uppercase...
    if (target[0] === target[0].toUpperCase()) {
    //change the 1st letter of the replacement word to uppercase to replace the target word and add the rest of the str
        return str.replace(target, replacement[0].toUpperCase()) + replacement.slice(1);
    //if the 1st letter of the target word is lowercase, change 1st letter of replacement word to lowercase and add rest of word
    } else {
        return str.replace(target, replacement[0].toLowerCase()) + replacement.slice(1);
    };
};

console.log(searchAndReplace("His name is tom", "tom", "John"));   //Should return His name is john


//USING .MATCH() AND REGEX AND .SLICE() AND .REPLACE()
function searchAndReplace2(str, searchFor, replaceWith) {
    //if the 1st letter of the target word matches an uppercase letter...
    if (searchFor[0].match(/[A-Z]/)) {
    //change the 1st letter of the replacement word to uppercase and add the rest of the word
        replaceWith = replaceWith[0].toUpperCase() + replaceWith.slice(1);
    //if the 1st letter of the target word is lowercase, change 1st letter of replacement word to lowercase and add rest of word
    } else {
        replaceWith = replaceWith[0].toLowerCase() + replaceWith.slice(1);
    };
    //replace the searchFor word with the replaceWith word
    return str.replace(searchFor, replaceWith);
};

console.log(searchAndReplace2("His name is Tom", "Tom", "john"));   //Should return His name is John