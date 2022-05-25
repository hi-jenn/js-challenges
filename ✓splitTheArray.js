//WRITE A FUNCTION THAT SPLITS AN ARRAY (1ST ARGUMENT) INTO GROUPS THE LENGTH OF SIZE (2ND ARGUMENT) AND RETURNS THEM AS A 2-D ARRAY

//USING RECURSION AND .SLICE()
function groupArray(arr, size) {
    //create a base case
    if (arr.length < size) {
        return [arr];
    };
    //slice the array the length of size (starting at 0) until the base case is reached
    return [arr.slice(0, size)].concat(groupArray(arr.slice(size), size));
};

console.log(groupArray([0, 1, 2, 3, 4, 5, 6, 7, 8], 2));  //Should return [[0, 1], [2, 3], [4, 5], [6, 7], [8]]


//USING WHILE LOOP AND .SPLICE(); CANNOT USE .SLICE()
function groupArray2(arr, size) {
    //create a new variable to hold the groupedArray
    let newArray = [];
    //while the array length is longer than 0...
    while (arr.length > 0) {
    //splice the array starting at 0 index to include elements according to size argument and push into new variable
        newArray.push(arr.splice(0, size));
    };
    //return the new variable
    return newArray;
};

console.log(groupArray2([0, 1, 2, 3, 4, 5, 6, 7, 8], 2));  //Should return [[0, 1], [2, 3], [4, 5], [6, 7], [8]]


//USING FOR LOOP
function groupArray3(arr, size) {
    //create a new variable to hold the grouped array
    let groupedArray = [];
    //iterate through the array according to the size argument
    for (let i = 0; i < arr.length; i += size) {
    //slice the array starting at the index and ending at the index + size and push it into the new variable
        groupedArray.push(arr.slice(i, i + size));
    };
    //return the new variable
    return groupedArray;
};

console.log(groupArray3([0, 1, 2, 3, 4, 5, 6, 7, 8], 2));  //Should return [[0, 1], [2, 3], [4, 5], [6, 7], [8]]