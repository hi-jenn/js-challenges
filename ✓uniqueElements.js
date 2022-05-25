//COMPARE 2 ARRAYS AND RETURN AN ARRAY WITH THE ELEMENTS THAT ARE NOT DUPLICATES

//USING .FILTER() AND .INCLUDES()
function uniqueElements(arr1, arr2) {
    //filter out the elements from arr1 that are also in arr2
    let singleElements1 = arr1.filter(str => !arr2.includes(str));
    //filter out the elements from arr2 that are also in arr1    
    let singleElements2 = arr2.filter(str => !arr1.includes(str));
    //combine the arrays that were not filtered out
    return [].concat(singleElements1, singleElements2);
};

console.log(uniqueElements([1, "calf", 3, "piglet"], [1, "calf", 3, 4]));    //Should return [ 'piglet', 4 ]


//USING .FILTER() AND .INDEXOF()
function uniqueElements2(arr1, arr2) {
    //combine arr1 and arr2
    let newArr = [].concat(arr1, arr2);
    //if an element in the combined array is not present (has an index of -1) in arr1 or arr2, keep it in the combined array 
    return newArr.filter(element => arr1.indexOf(element) == -1 || arr2.indexOf(element) == -1);
};

console.log(uniqueElements2([1, 'blue', 'black', 4], [1, 'pink', 3, 'blue']));   //Should return [ 'black', 4, 'pink', 3 ]


//USING .FILTER() AND .INCLUDES()
function uniqueElements3(arr1, arr2) {
    //combine arr1 and arr2
    let combinedArr = [].concat(arr1, arr2);
    //if an element in the combined array is not included in arr1 or arr2, keep it in the combined array
    return combinedArr.filter(element => !arr1.includes(element) || !arr2.includes(element));
};

console.log(uniqueElements3(['foz', 'sam', 'james'], ['arlo', 'sam', 'jenn']));  //Should return ['foz', 'james', 'arlo', 'jenn']   


//USING FOR LOOP AND .INDEXOF() AND A NESTED FUNCTION
function uniqueElements4(arr1, arr2) {
    //create a variable to hold the elements that are not duplicates of arr1 and arr2
    let singles = [];
    //create a function to iterate through an array
    function diffArray(first, second) {
        for (let i = 0; i < first.length; i++) {
    //if the index of each element in the 1st array is not present in the 2nd array (returns -1), push that element to the new variable
            if (second.indexOf(first[i]) == -1) {
                singles.push(first[i]);
            };
        };
    };
    //call the nested function on arr1, arr2 and then on arr2, arr1
    diffArray(arr1, arr2);
    diffArray(arr2, arr1);
    //return the new variable
    return singles;
};

console.log(uniqueElements4(['cake', 'cookies', 'jam'], ['cake', 'jam', 'frosting']));  //Should return ['cookies', 'frosting']  