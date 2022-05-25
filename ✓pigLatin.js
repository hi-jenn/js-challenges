//TRANSLATE THE LOWERCASE STRING TO PIG LATIN (IF A WORD BEGINS WITH A CONSONANT, TAKE THE FIRST CONSONANT OR CONSONANT CLUSTER, MOVE IT TO THE END OF THE WORD, AND ADD AY TO IT; IF A WORD BEGINS WITH A VOWEL, JUST ADD WAY TO THE END OF IT)

function translateIntoPigLatin(str) {
    //using regex, access consonants at the beginning of the string and save to a variable
    let consonants = /^[^aeiou]+/;
    //if the str contains a consonant(s) at the beginning of the string, save the consonant(s) to a variable 
    let consonantsInString = str.match(consonants);
    //if the str does not contain consonants, return the str with 'way' at the end
    if (!str.match(consonants)) {
        return str + 'way';
    };
    //otherwise, remove the consonants and the beginning of the string and place them at the end followed by 'ay'
    return str.replace(consonantsInString, '') + consonantsInString + 'ay';
};

console.log(translateIntoPigLatin("oven"));    //Should return ovenway
console.log(translateIntoPigLatin("schwartz"));      //Should return artzschway
console.log(translateIntoPigLatin("rhythm"));  //Should return rhythmay