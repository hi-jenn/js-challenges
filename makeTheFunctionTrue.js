//ITERATE THROUGH A GIVEN ARRAY AND REMOVE EACH ELEMENT (STARTING AT 0) UNTIL THE GIVEN FUNCTION RETURNS TRUE; ONCE THE CONDITION IS SATISFIED, RETURN THE ELEMENT THAT SATISFIES THE CONDITION AND THE SUCCEEDING ELEMENTS)

//USING WHILE LOOP
function giveMeTheTruth(arr, func) {
    //while the function is not true and the arr length is > 0 (prevents an infinite loop), remove the first element of the array
    while (!func(arr[0]) && arr.length > 0) {
        arr.shift();
    };
    //return the arr once the element makes the function true
    return arr;
};

console.log(giveMeTheTruth([1, 2, 3, 5, 10, 9], function(n) { return n >= 5 }));      //Should return [5, 10, 9]


//USING FOR...OF AND .INDEXOF() AND .SLICE()
function giveMeTheTruth2(arr, func) {
    //create a variable to hold elements from the arr that make the func true
    let trueElements = [];
    //iterate through the array
    for (let element of arr) {
    //if the element in the array does make the func true...
        if (func(element)) {
    //add the element to the new variable
            trueElements.push(element);
        };
    };
    //find the index of the new variable's first element in the array and save to variable
    const sliceIndex = arr.indexOf(trueElements[0]);
    //return a segment of the array starting at the index above; if no elements in the array make the function true, return []
    return arr.slice(sliceIndex > 0 ? sliceIndex : arr.length);
};

console.log(giveMeTheTruth2([1, 2, 3, 5, 10, 9], function(n) { return n > 9 }));      //Should return [10, 9]


//USING .FINDINDEX() AND .SLICE()
function giveMeTheTruth3(arr, func) {
    //find the index of the first element in the array to make the function true
    let sliceIndex = arr.findIndex(func);
    //return the arr starting at the element that makes the function true; if no elements make the function true, return []
    return arr.slice(sliceIndex > 0 ? sliceIndex : arr.length);
};

console.log(giveMeTheTruth3([1, 2, 3, 5, 10, 9], function(n) { return n < 5 }));   //Should return [1, 2, 3, 5, 10, 9]


//USING FOR LOOP AND .SHIFT()
function giveMeTheTruth4(arr, func) {
    //save arr's length to a variable so arr's length remains the same with each iteration of the arr
    //if use i < arr.length, arr.length will decrease with each iteration and loop will stop when i < arr.length
    let originalArr = arr.length;
    for (let i = 0; i < originalArr; i++) {
    //if the current element does not make the function true...
        if (!func(arr[0])) {
    //remove the element from the array
            arr.shift();
        };
    };
    //return the array
    return arr;
};

console.log(giveMeTheTruth4([1, 2, 3, 5, 10, 9], function(n) { return n > 11 }));   //Should return []


//USING RECURSION AND .SLICE()
function giveMeTheTruth5(arr, func) {
    //if the arr's length is greater than 0 and the current element does not make the function true, make a copy of the array starting at index 1; recurse until the current element makes the function true; when it is true, return the arr
    return arr.length > 0 && !func(arr[0]) ? giveMeTheTruth5(arr.slice(1), func) : arr;
};

console.log(giveMeTheTruth5([1, 2, 3, 8, 2], function(n) { return n >= 3 }));   //Should return [3, 8, 2]