//FIND THE LENGTH OF THE LONGEST WORD IN A GIVEN SENTENCE
let sentence = 'What if we try a super-long word such as otorhinolaryngology';

//USING FOR...OF AND MATH.MAX()
function findLongestWordLength(str) {
    //convert the string into an array
    let arr = str.split(' ');
    //create a variable to hold the word with the longest length
    let longestWord = '';
    //iterate through each word in the array
    for (let word of arr) {
    //set the new variable to the word with the longest length
        longestWord = Math.max(word.length);
    };
    return longestWord;
};

console.log(findLongestWordLength(sentence));  //Should return 19


//USING .MAP() AND MATH.MAX() AND SPREAD OPERATOR
function findLongestWordLength2(str) {
    //convert the string into an array
    let arr = str.split(' ');
    //create a variable and assign it to an array listing each word's length
    let wordLength = arr.map(word => word.length);
    //find the highest number in the entire array and save it to a variable
    let longestWordLength = Math.max(...wordLength);
    //return the variable
    return longestWordLength;
};

console.log(findLongestWordLength2(sentence)); // Should return 19


//FIND THE LONGEST WORD USING FOR...OF
function findLongestWord(str) {
    //convert the string into an array
    let arr = str.split(' ');
    //create a variable to hold the longest word
    let longestWord = '';
    //iterate through the array
    for (let word of arr) {
    //if the current word in the array is longer than the word saved to the new variable, save the current word to the variable
        if (word.length > longestWord.length) {
            longestWord = word;
        };
    };
    //return the new variable
    return longestWord;
};

console.log(findLongestWord(sentence));  //Should return otorhinolaryngology