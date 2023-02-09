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



let a = compare(5, 2);
console.log('a:', a);


function compare(a, b) {
    if (a > b) {
        return -1;
    } else if (a < b) {
        return 1;
    }
    return 0;
}











//Function hoisting
let b = showMe(); // a hoisting example
console.log('b:', b)

function showMe() {
    return ('an hoisting example');
}

let c = showMe();
console.log('c:', c)


//JavaScript Functions are First-Class Citizens
function add(a, b) {
    return a + b;
}

sum = add;
console.log('sum:', sum(1, 2));
result = add(10, 20);
console.log('result:', result)









//Passing a function to another function
function average(a, b, fn) {
    return fn(a, b) / 2;
}
result = average(10, 20, sum);
console.log('result:', result);











//Returning functions from functions
function compareBy(propName) {
    return function (a, b) {
        let x = a[propName],
            y = b[propName];
        if (x > y) {
            return 1;
        } else if (x < y) {
            return -1
        } else {
            return 0;
        }
    }
}

let products = [
    {name: 'iPhone', price: 900},
    {name: 'Samsung Galaxy', price: 850},
    {name: 'Sony Xperia', price: 700}
];

console.log('Products sorted by name:');
products.sort(compareBy('name'));

console.table(products);

// sort products by price
console.log('Products sorted by price:');
products.sort(compareBy('price'));
console.table(products);









function cmToIn(length) {
    return length / 2.54;
}

function IntoCm(length) {
    return length * 2.54;
}

function convert(fn, length) {
    return fn(length);
}

let inches = convert(cmToIn, 10);
console.log(inches);

let cm = convert(IntoCm, 10);
console.log(cm);