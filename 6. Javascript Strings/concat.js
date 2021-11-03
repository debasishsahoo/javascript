let greeting = 'Hi';
let message = greeting.concat(' ', 'John');

console.log(message);


//Concatenating an array of strings
let colors = ['Blue', ' ', 'Green', ' ', 'Teal'];
let result = ''.concat(...colors);

console.log(result);

//Concatenating non-string arguments
let str = ''.concat(1, 2, 3);

console.log(str);