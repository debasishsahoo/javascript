let str = new String('JavaScript String Type');
console.log(str.length);

console.log(str.valueOf());
console.log(str.toString());
console.log(str.toLocaleString());

console.log(str[0]);
console.log(str.charAt(0));

// String manipulation
let firstName = 'John';
let fullName = firstName.concat(' ', 'Doe');
console.log(fullName);
console.log(firstName);

firstName = 'John';
fullName = firstName + ' ' + 'Doe';
console.log(fullName);

// Extracting substrings
 

//Locating substrings
str = "This is a string";
console.log(str.indexOf("is"));
console.log(str.indexOf('is', 3));
console.log(str.lastIndexOf('is'));
console.log(str.lastIndexOf('are'));
console.log('str:', str)

// Removing whitespace characters
let rawString = ' Hi  ';
let strippedString = rawString.trim();
console.log(strippedString);

//Changing cases
let greeting = 'Hello';
console.log(greeting.toLowerCase());
console.log(greeting.toUpperCase());

// Comparing strings
console.log('A'.localeCompare('B'));
console.log('B'.localeCompare('B'));
console.log('C'.localeCompare('A'));

//Matching patterns
let expr = "1 + 2 = 3";
let matches = expr.match(/\d+/);
console.log(matches[0]);

matches = expr.match(/\d+/g);
matches.forEach(function (m) {
    console.log(m);
});

str = "This is a test of search()";
pos = str.search(/is/);
console.log(pos);

//Replacing substrings
str = "the baby kicks the ball";
// replace "the" with "a"
let newStr = str.replace(/the/g, "a");
console.log(newStr);
console.log(str);
newStr = str.replace('kicks', 'holds');
console.log(newStr);