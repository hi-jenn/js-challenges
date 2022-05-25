//CHECK IF A VALUE IS CLASSIFIED AS A BOOLEAN PRIMITIVE; RETURN TRUE OR FALSE

function booleanOrNot(val) {
    //check the type of input; if boolean, return true; else return false
    if (typeof val === 'boolean') return true;
    return false;
}

console.log(booleanOrNot('false')); //Should return false


//REFACTORED
function bool(val) {
    return typeof val === 'boolean';
};

console.log(bool(false)); //Should return true