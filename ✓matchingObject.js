//LOOK THROUGH AN ARRAY OF OBJECTS (1ST ARGUMENT) AND RETURN AN ARRAY OF ALL OBJECTS THAT HAVE A MATCHING NAME/VALUE PAIR IN A GIVEN OBJECT (2ND ARGUMENT). EACH NAME/VALUE PAIR OF THE 2ND ARGUMENT HAS TO BE PRESENT IN THE 1ST ARGUMENT(COLLECTION) TO BE INCLUDED IN THE ARRAY 

//USING .FILTER() and FOR...OF
function matchingObjects(arr, objToMatch) {
    //save the keys of objToMatch to a variable
    let keysToMatch = Object.keys(objToMatch); 
    //filter the array of objects to only include those that match objToMatch and save to new variable
    const matches = arr.filter(obj => {
    //iterate through the keys of objToMatch
        for (let key of keysToMatch) {
    //if current obj in the collection does not match the obj(s) in objToMatch, filter it out    
            if (obj[key] !== objToMatch[key]) return false;
        };
    //otherwise, include it in the new variable
        return true;
    });
    //return the new variable
    return matches;
};

console.log(matchingObjects([{"a": 1, "b": 2, "c": 3}], {"a": 1, "b": 9999, "c": 3}));    //Should return []


//USING .FILTER() and .EVERY()
function matchingObjects2(arr, objToMatch) {
    //save the keys of objToMatch to a variable
    const keys = Object.keys(objToMatch);
    //filter the array of objects to only include those that match objToMatch 
    return arr.filter(obj => {
    //iterate through the keys array and if they match every key in the current obj, keep it in the collection
        return keys.every(key => obj[key] === objToMatch[key]);
    });
};

console.log(matchingObjects2([{ "apple": 1, "bat": 2 }, { "apple": 1 }, { "apple": 1, "bat": 2, "cookie": 10 }, { "bat": 5}], { "apple": 1, "bat": 2 }));      //Should return [{ apple: 1, bat: 2 }, { apple: 1, bat: 2, cookie: 10 }]