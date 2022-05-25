//CHECK IF A STRING ENDS WITH A GIVEN TARGET; RETURN TRUE OR FALSE

//USING .ENDSWITH()
function confirmEnding(str, target) {
    //check if the string ends with the target
    return str.endsWith(target);
};

console.log(confirmEnding("Congratulation", "ion"));    //Should return true


//USING .SLICE()
function confirmEnding2(str, target) {
    //slice the end of the str the length of the target and if that slice equals the target, return true
    return str.slice(str.length - target.length) === target;
};

console.log(confirmEnding2("Congratulation", "ion"));   //Should return true

//USING AN ARRAY
function confirmEnding3(str, target) {
    //convert the string to an array
    let arr = str.split(' ');
    //if the last item in the array equals the target, return true; otherwise, return false
    return arr[arr.length - 1] == target; 
};

console.log(confirmEnding3('blue baby shirt', 'shirt')); //Should return true