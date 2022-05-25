//GIVEN AN ARRAY WITH 2 NUMBERS, RETURN THE SUM OF THOSE 2 NUMBERS PLUS THE NUMBERS IN BETWEEN THEM

//USING FOR LOOP AND .REDUCE()
function sumTheNumbers(arr) {
    //save the minimum number in the array to a variable
    let min = Math.min(...arr);
    //save the maximum number in the array to a variable
    let max = Math.max(...arr);
    //create a variable to hold the range of numbers between min and max
    let allNumbers = [];
    //get the range of numbers starting at min through max and push to the new variable
    for (let i = min; i <= max; i++) {
        allNumbers.push(i);
    };
    //get the sum of the range of numbers
    let sum = allNumbers.reduce((acc, currentValue) => acc + currentValue, 0);
    //return the sum
    return sum;
};

console.log(sumTheNumbers([10, 3]));    //Should return 52


//USING FOR LOOP WITHOUT .REDUCE()
function sumTheNumbers2(arr) {
    //sort the numbers from lowest to highest
    arr.sort((a, b) => a-b);
    //save the minimum number to a variable
    let min = arr[0];
    //save the maximum number to a variable
    let max = arr[1];
    //create a variable to hold the sum of the range of numbers
    let sum = 0;
    //add each number starting at min through max to the new variable
    for (let i = min; i <= max; i++) {
        sum += i;
    };
    //return the new variable
    return sum;
};

console.log(sumTheNumbers2([4, 1]));      //Should return 10


//USING MATH.ABS()
function sumTheNumbers3(arr) {
    //save the minimum number to a variable
    let min = Math.min(arr[0], arr[1]);
    //save the maximum number to a variable
    let max = Math.max(arr[0], arr[1]);
    //determine the number of numbers between min and max 
    const numCount = Math.abs(min - max) + 1;
    //use arithmetic progression summing formula to add the range of numbers together
    const sum = ((min + max) * numCount) / 2;
    //return the sum
    return sum;
};

console.log(sumTheNumbers3([2, 11]));     //Should return 65