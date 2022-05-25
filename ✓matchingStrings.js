//RETURN TRUE IF THE STRING IN THE FIRST ELEMENT OF THE ARRAY CONTAINS ALL OF THE LETTERS OF THE STRING IN THE SECOND ELEMENT OF THE ARRAY

//USE FOR LOOP AND .INCLUDES()
function match(arr) {
    //convert the strings in the array to lowercase and save them to separate variables
    let first = arr[0].toLowerCase();
    let second = arr[1].toLowerCase();
    //iterate through the 2nd string in the array to access each letter
    for (let i = 0; i < second.length; i++) {
    //if the 1st array does not include the letters in the 2nd string, return false
        if (!first.includes(second[i])) return false;
    };
    return true;
    //otherwise, return true
};

console.log(match(['New York Times', 'monkeys write']));  //Should return true
console.log(match(['My mom loves me', 'My husband loves me']));   //Should return false


//USE FOR LOOP AND .INDEXOF()
function match2(arr) {
    //convert the strings in the array to lowercase and save them to separate variables
    let target = arr[0].toLowerCase();
    let test = arr[1].toLowerCase();
    //iterate through the 1st string in the array to access each letter
    for (let i = 0; i < test.length; i++) {
    //if the index of the letters in the 1st string are not present in the 2nd string (returns -1), return false
        if (target.indexOf(test[i]) === -1) return false;
    };
    //otherwise, return true
    return true;
};

console.log(match2(["Alien", "alike"]));   //Should return false
console.log(match2(["Alien", "aline"]));   //Should return true


//USE .EVERY() AND .INCLUDES()
function match3(arr) {
    //convert the strings in the array to lowercase and save them to separate variables
    let str1 = arr[0].toLowerCase().split('');
    let str2 = arr[1].toLowerCase().split('');
    //if every letter of the 2nd string is included in the first, return true
    return str2.every(letter => str1.includes(letter));
};

console.log(match3(["Jennifer", "Jenn"]));   //Should return false
console.log(match3(["restful", "fluster"]));   //Should return true


//USE .EVERY() AND .INDEXOF()
function match4(arr) {
    //convert the strings in the array to lowercase and save them to separate variables
    let firstStr = arr[0].toLowerCase().split('');
    let secondStr = arr[1].toLowerCase().split('');
    //if every letter of the 2nd string has an index > -1, return true
    return secondStr.every(letter => firstStr.indexOf(letter) > -1);
};

console.log(match4(["Fozzie", "FozzieBear"]));   //Should return false
console.log(match4(["forty five", "over fifty"]));   //Should return true