function functionName(parameters) {
    // function body
    // ...
}

function say(message) {
    console.log(message);
}

let result = say('Hello');
console.log('Result:', result);

function add(a, b) {
    return a + b;
}
let sum = add(10, 20);
console.log('Sum:', sum);


function compare(a, b) {
    if (a > b) {
        return -1;
    } else if (a < b) {
        return 1;
    }
    return 0;
}

let a = compare(5, 2);
console.log('a:', a);

function say(message) {
    if (!message) {
        return;
    }
    console.log(message);
}

function add() {
    let sum = 0;
    for (let i = 0; i < arguments.length; i++) {
        sum += arguments[i];
    }
    return sum;
}

console.log(add(1, 2));
console.log(add(1, 2, 3, 4, 5));

//Function hoisting
let b = showMe(); // a hoisting example
console.log('b:', b)

function showMe() {
    return ('an hoisting example');
}

let c = showMe();
console.log('c:', c)