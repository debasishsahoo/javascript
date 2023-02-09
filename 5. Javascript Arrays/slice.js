/**
 * JavaScript Array slice() Method
 * Syntax: slice(start, stop);
 * 
 */

//Clone an array
var numbers = [1, 2, 3, 4, 5];
var newNumbers = numbers.slice();
console.log('newNumbers:', newNumbers)

//Copy a portion of an array
var colors = ['red', 'green', 'blue', 'yellow', 'purple'];
var rgb = colors.slice(0, 3);
console.log(rgb);
