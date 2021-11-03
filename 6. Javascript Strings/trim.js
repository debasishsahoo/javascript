let rawString = ' Hi  ';
let strippedString = rawString.trim();
console.log(strippedString);

/**
 * The following characters are the whitespace characters in JavaScript
 * A space character
 * A tab character
 * A carriage return character
 * A new line character
 * A vertical tab character
 * A form feed character
 */
let str = '   JavaScript   ';
let result = str.trimStart();

console.log({ str });
console.log({ result });


result = str.trimEnd();

console.log({ str });
console.log({ result });

