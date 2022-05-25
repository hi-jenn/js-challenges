//CHECK IF THE PREDICATE (SECOND ARGUMENT) IS TRUTHY ON ALL ELEMENTS OF A COLLECTION (FIRST ARGUMENT)

//USING A FOR LOOP
function giveMeTheTruth(arr, str) {
    //iterate through the array
    for (let obj of arr) {
    //if an object in the array has a key that does not match the str argument or has a falsy value, return false 
    //must check for falsies 1st- first truthy being iterated through will return true and the loop will not proceed to check for falsy
        if (!obj[str]) return false;
    };
    //otherwise, return true
    return true;
};

console.log(giveMeTheTruth([{"single": "double"}, {"single": null}], "single"));  //Should return false


//USING .EVERY()
function giveMeTheTruth2(arr, pred) {
    //return true if every object in the array has a key that matches the predicate and has a truthy value
    return arr.every(obj => obj[pred]);
};

console.log(giveMeTheTruth2([{"single": "line"}, {"single": 'blue'}, {'single': 'since'}], "single"));  //Should return true