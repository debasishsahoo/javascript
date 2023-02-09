//Dense arrays
let colors = ['red', 'green', 'blue'];
console.log(colors.length);

colors.push('yellow');
console.log(colors.length);

colors = [];
console.log(colors.length);


//Sparse arrays
let numbers = [10, , 20, 30];
//^?
console.log(numbers.length);


numbers[10] = 100;
console.log(numbers.length)

//Modifying JavaScript Array length property

let fruits = ['Apple', 'Orange', 'Strawberry'];

//Empty an array
fruits.length = 0;
console.log(fruits);

//Remove elements
fruits.length = 2;
console.log(fruits);

//Make array sparse
fruits = ['Apple', 'Orange', 'Strawberry'];
fruits.length = 5;
console.log(fruits);