/**
 * JavaScript Array some: Check If at Least one Array Element Passes a Test
 * 
 * 
 */

let marks = [4, 5, 7, 9, 10, 3];
let lessThanFive = false;

for (let index = 0; index < marks.length; index++) {
    if (marks[index] < 5) {
        lessThanFive = true;
        break;
    }
}

console.log(lessThanFive);

//JavaScript Array some() method

let marks = [4, 5, 7, 9, 10, 3];
lessThanFive = marks.some(function (e) {
    return e < 5;
});

console.log(lessThanFive);
