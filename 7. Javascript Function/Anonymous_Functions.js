/* let show = function () {
    return ('Anonymous function');
};

let a = show();
console.log('a:', a) */


//Using anonymous functions as arguments of other functions
setTimeout(function () {
    console.log('Execute later after 5 second')
}, 5000);



/* //Immediately invoked function execution
(function () {
    console.log('IIFE');
})();

(function () {
    console.log('Immediately invoked function execution');
})();

let person = {
    firstName: 'Debasish',
    lastName: 'Sahoo'
};

(function () {
    console.log(`${person.firstName} ${person.lastName}`);
})(person);

//Arrow functions
show = () => console.log('Anonymous function');
show();

//You can not declar function with same name
let add = function (a, b) {
    return a + b;
};

let add = (a, b) => a + b;    */