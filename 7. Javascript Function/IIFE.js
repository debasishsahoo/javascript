(function () {
    console.log('IIFE')
})();

function add(a, b) {
    return a + b;
}
console.log(add(5, 6));


add = (function (a, b) {
    return a + b;
})(10, 20);

console.log(add);

(function (a, b) {
    console.log(a + b);
})(10, 20);

((a, b) => {
    console.log(a + b);
})(10, 20);  