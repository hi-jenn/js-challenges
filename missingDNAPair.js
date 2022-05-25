//THE DNA STRAND IS MISSING THE PAIRING ELEMENT; TAKE EACH CHARACTER, GET ITS PAIR, AND RETURN THE RESULT IN A 2D ARRAY

//USING FOR LOOP AND IF STATEMENTS
function pairTheDNA(str) {
    //create a variable to hold the DNA pairs
    let DNAPairs = [];
    //iterate through the string of unpaired DNA
    for (let i = 0; i < str.length; i++) {
    //if the element is A, push [A, T] to the new variable; if T, [T, A]; if G, [G, C]; if C, [C, G]
        if (str[i] === 'A') {
            DNAPairs.push(['A','T']);
        } else if (str[i] === 'T') {
            DNAPairs.push(['T','A']);
        } else if (str[i] === 'G') {
            DNAPairs.push(['G','C']);
        } else if (str[i] === 'C') {
            DNAPairs.push(['C','G']);
        };
    };
    return DNAPairs;
};

console.log(pairTheDNA("GGAATC"));  //Should return [[ 'G','C' ],[ 'G','C' ],[ 'A','T' ],[ 'A','T' ],[ 'T','A' ],[ 'C','G' ]


//USING FOR...OF AND SWITCH
function pairTheDNA2(str) {
    //create a variable to hold the DNA pairs
    let pairs = [];
    //iterate through the string of unpaired DNA
    for (let element of str) {
    //if the element is A, push [A, T] to the new variable; if T, [T, A]; if G, [G, C]; if C, [C, G]
        switch(element) {
            case 'A':
                pairs.push(['A','T']);
                break;
            case 'T':
                pairs.push(['T','A']);
                break;
            case 'G':
                pairs.push(['G','C']);
                break;
            case 'C':
                pairs.push(['C','G']);
                break;
        };
    };
    return pairs;
};

console.log(pairTheDNA2("TTGAG"));       //Should return [["T","A"],["T","A"],["G","C"],["A","T"],["G","C"]]