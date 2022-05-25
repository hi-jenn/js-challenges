//RETURN THE PROVIDED STRING WITH THE 1ST LETTER OF EACH WORD CAPITALIZED AND THE REST OF THE WORD IN LOWERCASE

//USING .MAP()
function capitalizeTheFirst(str) {
    //create a variable to hold the new string
    let capitalizedStr = str
    //convert the string into an array
        .split(' ')
    //capitalize the first letter of each word and add it to the rest of the word in lowercase
        .map(word => word[0].toUpperCase() + word.slice(1).toLowerCase())
    //join the elements of the array to form a string
        .join(' ');
    return capitalizedStr; 
};

console.log(capitalizeTheFirst('i like dogs'));  //Should return I Like Dogs


//USING A FOR LOOP AND A NEW ARRAY
function capitalizeTheFirst2(str) {
    //convert the string into an array
    let arr = str.split(' ');
    //create a variable to hold a new array
    let newArr = [];
    //iterate through the array
    for (let i = 0; i < arr.length; i++) {
    //push the first letter of each element in the array as uppercase and the rest as lowercase to the new variable
        newArr.push(arr[i][0].toUpperCase() + arr[i].slice(1).toLowerCase());
    };
    //convert the new array to a string
    return newArr.join(' ');
};

console.log(capitalizeTheFirst2("I'm a liTTLE teapot"));  //Should return I'm A Little Teapot


//USING A FOR LOOP AND A NEW STRING
function capitalizeTheFirst3(str) {
    //convert the string into an array
    let arr = str.split(' ');
    //create a variable to hold a new string
    let newArr = '';
    //iterate through the array
    for (let i = 0; i < arr.length; i++) {
    //add the first letter of each element in the array as uppercase and the rest as lowercase
        newArr += arr[i][0].toUpperCase() + arr[i].slice(1).toLowerCase() + ' ';
    };
    //return the new variable
    return newArr;
};

console.log(capitalizeTheFirst3("I'm a liTTLE teapot"));  //Should return I'm A Little Teapot