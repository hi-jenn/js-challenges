//IF THE PROVIDED PHONE NUMBER IS FORMATTED CORRECTLY, RETURN TRUE; OTHERWISE, RETURN FALSE
//POSSIBLE FORMATS INCLUDE:
// 555-555-5555
// (555)555-5555
// (555) 555-5555
// 555 555 5555
// 5555555555
// 1 555 555 5555 
//TEST AT REGEXR.COM AND LEARN REGEX AT REGEXONE.COM

//USING .TEST() AND REGEX
function telephoneCheck(str) {
    //create a regex to test the phone number against
    const format = /^(\d{3}|\(\d{3}\)|1 \d{3})[\s\-]?\d{3}[\s\-]?\d{4}$/;
    //test the phone number
    return format.test(str);
};

console.log(telephoneCheck("555-555-5555"));      //Should return true


//USING .MATCH() AND REGEX
function telephoneCheck2(str) {
    //create a regex to test the phone number against    
    let regEx = /^(\(\d{3}\)|1 \d{3}|\d{3})-?\s?\d{3}-?\s?\d{4}$/;
    //if the regEx matches the number, return true; else return false
    return str.match(regEx) ? true : false;
};

console.log(telephoneCheck2("555 (555-5555"));       //Should return false