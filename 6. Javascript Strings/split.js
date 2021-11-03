let str = 'JavaScript String split()';
let substrings = str.split(' ');

console.log(substrings);


//Returning a limited number of substrings

str = 'JavaScript String split()';
substrings = str.split(' ',2);

console.log(substrings);

//Splitting a string using a regular expression
let paragraph = 'Good Morning! How are you? This is John. John is my friend.';
let sentences = paragraph.split(/[!,?,.]/);
console.log(sentences);

