//Simple for loop examples
for (var counter = 1; counter < 5; counter++) {
    console.log('Inside the loop:' + counter);
}
console.log('Outside the loop:' + counter);

//for loop without the initialization
var j = 1;
for (; j < 10; j += 2) {
    console.log(j);
}

//for loop without the condition
for (let j = 1; ; j += 2) {
    console.log(j);
    if (j > 10) {
        break;
    }
}

//for loop without any expression
j = 1;
for (; ;) {
    if (j > 10) break;
    console.log(j);
    j += 2;
}

//for loop without the loop body
let sum = 0;
for (let i = 0; i <= 9; i++, sum += i);
console.log(sum);