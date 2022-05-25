//WRITE A FUNCTION THAT TAKES 2 OR MORE ARRAYS AND RETURNS A NEW ARRAY OF UNIQUE VALUES IN THE ORDER OF THE ORIGINAL PROVIDED ARRAYS

//USING A FOR LOOP AND .INDEXOF()
function removeDuplicates(...arr) {
    //combine any number of arrays and save to a new variable
    let combinedArr = [].concat(...arr);
    //create a variable to hold the distinct elements from the combined array    
    let distinctElements = [];
    //iterate through each element of the array
    for (let i = 0; i < combinedArr.length; i++) {
    //if the index of the current element in the combined array equals the current iteration...
        if (combinedArr.indexOf(combinedArr[i]) === i) {
    //push the element into the new variable
            distinctElements.push(combinedArr[i]);
        };
    };
    //return the new variable
    return distinctElements;
};

console.log(removeDuplicates([1, 2, 3], [5, 2, 2, 4], [2, 1], [6, 4, 8]));  //Should return [1, 2, 3, 5, 4, 6, 8]


//USING 2 FOR LOOPS
function removeDuplicates2() {
    //save all the arrays to one variable using the arguments object
    let args = [...arguments];
    //create a variable to hold the distinct elements from all the arrays
    let result = [];
    //compare each element in each array
    for (let i = 0; i < args.length; i++) {
        for (let j = 0; j < args[i].length; j++) {
    //if the new variable does not include the element, push the element into the array
            if (!result.includes(args[i][j])) {
                result.push(args[i][j]);
            };
        };
    };
    //return the new variable
    return result;
};

console.log(removeDuplicates2([1, 3, 2], [5, 2, 1, 4], [2, 1]));  //Should return [ 1, 3, 2, 5, 4 ]


//USING A SET OBJECT
function removeDuplicates3(...arr) {
    //combine any number of arrays and save to a new variable
    let jointArr = [].concat(...arr);
    //create a new Set object that will remove duplicates from the combined array
    let noDuplicates = [...new Set(jointArr)];
    //return the new Set object
    return noDuplicates;
};

console.log(removeDuplicates3([1, 2, 3], [7, 2, 4, 4], [2, 1], [6, 9, 12]));  //Should return [1, 2, 3, 7, 4, 6, 9, 12]


//USING .FILTER() AND .INDEXOF()
function removeDuplicates4(...arr) {
    //combine any number of arrays and save to a new variable
    let unitedArr = [].concat(...arr);
    //if the index of the current element in the unitedArr equals the current iteration, keep the element
    return unitedArr.filter((element, index) => unitedArr.indexOf(element) === index);
};

console.log(removeDuplicates4(['blue', 'green', 'yellow'], ['orange', 'blue', 'yellow', 'pink'], ['green', 'orange']));  //Should return [ 'blue', 'green', 'yellow', 'orange', 'pink' ]