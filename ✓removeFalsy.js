//REMOVE ALL FALSY VALUES FROM AN ARRAY (FALSE, NULL, 0, '', UNDEFINED, NAN)

function removeFalse(arr) {
    //create variable to hold true values
    let allTrue = [];
    //iterate through the array
    for (let element of arr) {
    //if the element has a truthy value...
        if (element) {
    //push the value into the new variable
            allTrue.push(element);
        };
    };
    //return the new variable
    return allTrue;
};

console.log(removeFalse([7, "ate", "", false, 9, 0, null]));   //Should return [ 7, 'ate', 9 ]

function removeFalse(arr) {
    let allTrue = [];
    for (let i = 0; i < arr.length; i++) {

    }

    return allTrue;
}