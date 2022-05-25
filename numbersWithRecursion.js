//RETURN AN ARRAY CONTAINING NUMBERS 1 THROUGH N USING A RECURSIVE FUNCTION

//USING .CONCAT()
function countUp(num) {
    //set a base case that stops the recursive function
    if (num < 1) {
        return [];
    };
    //create an array and add sequential numbers with num - 1 until the base case is reached followed by the num
    return [].concat(countUp(num - 1), num);
};

console.log(countUp(6));     //Should return [1, 2, 3, 4, 5, 6]


//USING .PUSH()
function countUp2(num) {
    //set a base case that stops the recursive function
    if (num < 1) {
        return [];
    };
    //set a recursive case to gather all numbers until the base case is reached; save all the numbers to a new variable
    let numbers = countUp2(num - 1);
    //add all the numbers from the recursive case to the end of the new variable
    numbers.push(num);
    //return the new variable
    return numbers;
};

console.log(countUp2(4));   //Should return [1, 2, 3, 4]


//RETURN A STRING CONTAINING NUMBERS 1 THROUGH N USING A RECURSIVE FUNCTION
function countUp3(num) {
    //set a base case that stops the recursive function
    if (num < 1) {
        return [];
    };
    //add sequential numbers with num - 1 until the base case is reached followed by a space and the num
    return countUp3(num - 1) + " " + num;
};

console.log(countUp3(6));    //Should return 1 2 3 4 5 6 


//RETURN AN ARRAY CONTAINING NUMBERS N THROUGH 1 USING A RECURSIVE FUNCTION
//USING .CONCAT()
function countDown(num) {
    //set a base case that stops the recursive function
    if (num < 1) {
        return [];
    };
    //create an array and add num to the array and keep adding sequential numbers with num - 1 until the base case is reached
    return [].concat(num, countDown(num - 1));
};
 
console.log(countDown(7));        //Should return [7, 6, 5, 4, 3, 2, 1]


//USING .UNSHIFT()
function countDown2(num) {
    //set a base case that stops the recursive function
    if (num < 1) {
        return [];
    };
    //set a recursive case to gather all numbers until the base case is reached; save all the numbers to a new variable
    const newArr = countDown(num - 1);
    //add all the numbers from the recursive case to the beginning of the new variable
    newArr.unshift(num);
    //return the new variable
    return newArr;
};

console.log(countDown2(9));       //Should return [9, 8, 7, 6, 5, 4, 3, 2, 1]


//RETURN AN ARRAY CONTAINING NUMBERS startNum through endNum USING A RECURSIVE FUNCTION
//USING .CONCAT()
function rangeOfNumbers(startNum, endNum) {
    //set a base case that stops the recursive function
    if (startNum > endNum) {
        return [];
    };
    //create an array and add the startNum to the array and recurse startNum + 1 until the base case is reached
    return [].concat(startNum, rangeOfNumbers(startNum + 1, endNum));
};

console.log(rangeOfNumbers(3, 9));   //Should return [3, 4, 5, 6, 7, 8, 9]


//USING .PUSH()
function rangeOfNumbers2(startNum, endNum) {
    //set a base case that stops the recursive function
    if (startNum > endNum) {
        return [];
    };
    //set the recursive case to get the range of numbers and save to a variable
    const range = rangeOfNumbers(startNum, endNum - 1);
    //push all numbers to the variable
    range.push(endNum);
    //return the variable
    return range;
};

console.log(rangeOfNumbers2(5, 11));   //Should return [5, 6, 7, 8, 9, 10, 11]