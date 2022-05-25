//CONVERT THE GIVEN NUMBER TO ROMAN NUMERALS

//create an object that holds the value of roman numerals
const romanNumerals = {
	M: 1000,
	CM: 900,
	D: 500,
	CD: 400,
	C: 100,
	XC: 90,
	L: 50,
	XL: 40,
	X: 10,
	IX: 9,
	V: 5,
	IV: 4,
	I: 1
}

//USING WHILE LOOP
function convertToRomanNumerals(num) {
    //create a variable to hold the result
    let result = '';
    //iterate through each property of the roman numerals object
	for (let key in romanNumerals) {
    //while the num is greater than a value in the object (starting from the top)...
        while (num >= romanNumerals[key]) {
	//add that key to the new variable and subtract that value from the number
            result += key;
            num -= romanNumerals[key];
        };
    };
	//return the new variable
    return result;
};

console.log(convertToRomanNumerals(135));   //Should return CXXXV
console.log(convertToRomanNumerals(123))  //Should return CXXIII