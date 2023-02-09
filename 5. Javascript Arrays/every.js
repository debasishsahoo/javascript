/* 
  ┌─────────────────────────────────────────────────────────────────────────────────────────────────────────────────┐
  │ JavaScript Array every: Determining If All Array Elements Pass a Test                                           │
  └─────────────────────────────────────────────────────────────────────────────────────────────────────────────────┘
 */


//Checking array elements using the for loop
let numbers = [1, 3, 5];
let result = true;
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] <= 0) {
        result = false;
        break;
    }
}
console.log(result);

//Introduction to JavaScript Array every() method
let numbers = [1, 3, 5];
let result = numbers.every(function (e) {
    return e > 0;
});

console.log(result);



//Check Every Array Element with in Range or not
let numbers = [1, 3, 5];

let range = {
    min: 0,
    max: 10
};

let isInRange = numbers.every(function (e) {
    return e >= this.min && e <= this.max;
}, range);

