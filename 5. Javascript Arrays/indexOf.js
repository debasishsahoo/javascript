/**
 * JavaScript Array indexOf and lastIndexOf
 * Syntax:Array.indexOf(searchElement, fromIndex)
 * Syntax:Array.lastIndexOf(searchElement[, fromIndex = Array.length - 1])
 */

//indexOf()
var scores = [10, 20, 30, 10, 40, 20];
console.log(scores.indexOf(10));
console.log(scores.indexOf(30));
console.log(scores.indexOf(50));
console.log(scores.indexOf(20));
console.log(scores.indexOf(40));
console.log(scores.indexOf(10));
console.log(scores.indexOf(20));

//fromIndex()
console.log(scores.indexOf(20,-1));
console.log(scores.indexOf(20,-5));

//lastIndexOf() 
console.log(scores.lastIndexOf(10));
console.log(scores.lastIndexOf(20));
console.log(scores.lastIndexOf(50));


