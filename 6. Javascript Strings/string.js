/**
 * String 
 */

let str = 'Hi';
let greeting = "Hello";

let name = 'John';
let message = `Hello ${name}`;

console.log(message);

//Escaping special characters
/**
 * Windows line break: '\r\n'
 * Unix line break: '\n'
 * Tab: '\t'
 * Backslash '\'
 */

str = 'I\'m a string!';
console.log('str:', str)

str = "Good Morning!";
console.log(str.length);

//Accessing characters
str = "Hello";
console.log(str[0]);

str = "Hello";
console.log(str[str.length - 1]);

//Concatenating strings via + operator
name = 'John';
str = 'Hello ' + name;

console.log(str);


let className = 'btn';
className += ' btn-primary'
className += ' none';

console.log(className);


//Converting values to string
/**
 * String(n);
 * ” + n
 * n.toString()
 */

status = false;
console.log('status:', status)
str = status.toString();
console.log('str:', str)
back = Boolean(str);
console.log('back:', back)

//Comparing strings
let result = 'a' < 'b';
console.log(result);

result = 'a' < 'B';
console.log(result);
