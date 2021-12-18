//!this is a simple Callback Function where we pass a function as a parameter to another function  and then we call the function inside the function and then we call the function outside the function and then we call the function inside the function and so on.

function show() {
    console.log('I am Show Function')
}
function Demo(callback) {
    callback();
}
Demo(show)


//!this is a Parameterized CallBack Function where we pass a function as a parameter to another function  and then we call the function inside the function and then we call the function outside the function and then we call the function inside the function and so on.
function Display(a) {
    console.log(a);
}
function Calculation(Value, CallBack) {
    CallBack(Value);
}
Calculation(10, Display);


function Main(x, y, callback) {
    var z = x + y;
    callback(z);
}

Main(10, 12, function View(a) {
    console.log(a);
});

Main(100, 102, function (a) {
    console.log(a);
});

Main(30, 20, a => { console.log(a); });

//TODO:Syncronous CallBack:It waits for the function to complete its execution and then it executes the next function.
console.log('START');
Show = () => {
    console.log('I am Show Function');
}
hi = (CallBack) => {
    CallBack();
}
hi(Show);
console.log('END');

//TODO:Asyncronous CallBack:It executes the next function after the function completes its execution.it never waits for the each operation to complete.rather it executes the next function after the each operation.
console.log('START');
setTimeout(function View() {
    console.log('I am View Function');
}, 5000)
console.log('END');