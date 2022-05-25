//CONVERT &, <, >, ", ' INTO CORRESPONDING HTML ENTITIES; RETURN A STRING

//USING .REPLACE()
function HTMLConversion(str) {
    //replace the characters in the string with the corresponding html entity
    return str 
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/'/g, '&apos;')
        .replace(/"/g, '&quot;');
};

console.log(HTMLConversion('Stuff in "quotation marks"'));  //Should return the string Stuff in &quot;quotation marks&quot;.


//USING SWITCH CASES WITH ARRAY
function HTMLConversion2(str) {
    //convert the string into an array to access each character
    let arr = str.split('');
    //iterate through the array
    for (let i = 0; i < arr.length; i++) {
    //if the element in the array is ____, change the character to ____
        switch(arr[i]) {
            case '&':
                arr[i] = '&amp;';
                break;
            case '<':
                arr[i] = '&lt;';
                break;
            case '>':
                arr[i] = '&gt;';
                break;
            case "'":
                arr[i] = '&apos;';
                break;
            case '"':
                arr[i] = '&quot;';
                break;
        };
    };
    //convert the array back into a string
    return arr.join('');
};

console.log(HTMLConversion2("Hamburgers < Pizza < Tacos"));   //Should return Hamburgers &lt Pizza &lt Tacos

//USING SWITCH CASES WITH A NEW STRING
function HTMLConversion3(str) {
    //create a variable to hold the new string
    let newString = '';
    //iterate through the string
    for (let i = 0; i < str.length; i++) {
    //if &, ', <, >, " are in the string, assign the corresponding HTML entity to the new string; otherwise, assign the current element to the new string 
        switch(str[i])  {
            case '&':
                newString += '&amp;';
                break;
            case "'":
                newString += '&apos;';
                break;
            case '<':
                newString += '&lt;'
                break;
            case '>':
                newString += '&gt;'
                break;
            case '"':
                newString += '&quot;'
                break;
            default:
                newString += str[i]
        };
    };
    return newString;
};

console.log(HTMLConversion3('Fozzie & Oreo love outside > toys'));  //Should return Fozzie &amp; Oreo love outside &gt; toys 