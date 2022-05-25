//CREATE A FUNCTION THAT LOOKS THROUGH AN ARRAY AND RETURNS THE FIRST ELEMENT IN IT THAT PASSES A 'TRUTH TEST'; GIVEN ELEMENT X, THE TRUTH TEST IS PASSED IF FUNC(X) IS TRUE

//USING FOR...OF LOOP
function truthTest(arr, func) {
    //iterate through the array
    for (let element of arr) {
    //if an element in the array can be used as an argument to make the function true, return the element
        if (func(element)) return element;
    };
    //otherwise, return false (or similar)
    return 'No element in this array will make that function true';
};

console.log(truthTest([1, 2, 3, 4], num => num % 2 === 0));  //Should return 2