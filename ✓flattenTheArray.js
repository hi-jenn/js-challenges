//FLATTEN A NESTED ARRAY

//USING A FOR LOOP AND RECURSION
function flattenIt(arr) {
    //create variable to hold flatten array
    let flattenedArr = [];
    //iterate through the array
    for (let i = 0; i < arr.length; i++) {
    //if element in array is an array, add the array to the new variable continue iteration until it is not an array
        if (Array.isArray(arr[i])) {
            flattenedArr = flattenedArr.concat(flattenIt(arr[i]));
    //if element is not an array, push to new variable
        } else {
            flattenedArr.push(arr[i]);
        };
    };
    //return the new variable
    return flattenedArr;
};

console.log(flattenIt([1, [5], [3, [[4]]]]));  //Should return [1, 5, 3, 4]


//USING .FLAT()- must know how many levels of arrays to flatten
function flattenIt2(arr) {
    return arr.flat().flat().flat();
};

console.log(flattenIt2([1, [2], [3, [[4]]]]));    //Should return [1, 2, 3, 4]


//USING .REDUCE() AND RECURSION
function flattenIt3(arr) {
    //create a new variable and assign it to the .reduce() on the arr argument
    const newArr = arr.reduce((acc, element) => {
    //if the element passing through .reduce() is an array, add the array to the accumulator and call the function again
        if (Array.isArray(element)) {
            acc = acc.concat(flattenIt3(element));
    //if/when the element is just an element, add it to the accumulator
        } else {
            acc = [].concat(acc, element);
            //instead above, can be acc = [...acc, element] 
        };
        return acc;
     }, []);
    return newArr;
};

console.log(flattenIt3([4, 5, [3], [5, 6], [7, [5, [2]]]]));  //Should return [4, 5, 3, 5, 6, 7, 5, 2]