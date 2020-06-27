let re;

// Literal Characters
re  = /hello/;
re = /hello/i;

// Metacharacter Symbols
re = /^h/i; // Must start with
re = /World$/i; // Must ends with
re = /^hello$/i; // Must begin and end with
re = /^h.llo$/i; // Mathces any ONE character
re = /^h*llo$/i; // Matches any character 0 or more times

re = /gre?a?y/i; // Optional character
re = /gre?a?y\?/i; // Escape character


// Brackets [] - Character Sets
re = /gr[ae]y/i;    // Must be an a or e
re = /[GF]ray/;    // Must be a G or F
re = /[^GF]ray/;    // Match anything except a G or F
re = /[A-Z]ray/;    // Match anything except a G or F
re = /[a-z]ray/;    // Match anything except a G or F
re = /[A-Za-z]ray/;    // Match any letter
re = /[0-9]ray/;    // Match any digit

// Braces {} - Quantifiers
re = /Hel{2}o/i; // Must occur exactly {m} amount of times
re = /Hel{2,4}o/i; // number of l should be between 2 and 4
re = /Hel{2,}o/i; // Must occur at least {m} times

// Parentheses () - Grouping
re = /^[0-9]x{3}$/

// Shorthand Character Classes
re = /\w/; // Word character - alphanumeric or _
re = /\w+/; // + = one or more
re = /\W/; // Non-word character
re = /\d/; // Mathc any digit
re = /\d+/; // Match any digit 0 ormore times
re = /\D/; // Match any Non-digit
re = /\s/; // Match whitespace char
re = /\S/; // Match non-whitespace char
re = /Hell\b/i; // Word boundary








// String to match
const str ='h';

// Log Results
const result = re.exec(str);
console.log(result);

function reTest(re, str){
    if(re.test(str)){
        console.log(`${str} Matched ${re.source}`);

    } else {
        console.log(`${str} does NOT match ${re.source}`);
    }
}

reTest(re, str);