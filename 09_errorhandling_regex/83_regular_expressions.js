let re;
re = /hello/;
re = /hello/i; // i = case insensitive
// re = /hello/g; // g =  Global Search

// console.log(re);
// console.log(re.source);

// exec() - Return result in an array or null

// const result = re.exec(' hello world');
// console.log(result);
// console.log(result[0]);
// console.log(result.index);
// console.log(result.input);

// test() - Returs true or false
// const result = re.test('Hello');
// console.log(result);

// mathc() - Return result array or null
// const str = 'Hello2 There';
// const result = str.match(re);
// console.log(result);


// search() - Return index of first match if not found returns -1

// const str = 'Hello There';
// const result = str.search(re);
// console.log(result); 

// replace() - Returns new string with some of all matches of a pattern
const str = 'Hello There';
const newStr = str.replace(re, 'Hi');
console.log(newStr);
