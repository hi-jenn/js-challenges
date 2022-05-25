//GIVEN 2 ARRAYs AND AN INDEX; COPY EACH ELEMENT OF ARRAY1 INTO ARRAY2 BEGINNING AT THE SPECIFIED INDEX OF THE SECOND ARRAY; DO NOT ALTER ARRAY1 OR ARRAY2

function copyMe(arr1, arr2, index) {
    //make a copy of arr2 and save it to a new variable
    let newArr = arr2.slice();
    //add arr1 to the newArr at the given index
    newArr.splice(index, 0, ...arr1);
    //return the newArr
    return newArr;
};

console.log(copyMe(['fozzie', 'arlo', 'james'], ['bear', 'jenn', 'sam'], 1));  //Should return [ 'bear', 'fozzie', 'arlo', 'james', 'jenn', 'sam' ]




