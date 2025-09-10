document.getElementById('multiplyBtn').addEventListener('click', () => {
    const multiply = function(a, b) {
        return a * b;
    };

    console.log("Multiply 4 * 5 =", multiply(4, 5));  // 20
});

document.getElementById('factorialBtn').addEventListener('click', () => {
    const factorial = function fact(n) {
        if (n <= 1) return 1;
        return n * fact(n - 1);
    };

    console.log("Factorial of 5 =", factorial(5));  // 120
});

document.getElementById('processOrderBtn').addEventListener('click', () => {
    const processOrder = function(order) {
        const tax = 0.08;
        const shipping = order.total > 50 ? 0 : 9.99;
        
        return {
            ...order,
            tax: order.total * tax,
            shipping: shipping,
            finalTotal: order.total + (order.total * tax) + shipping
        };
    };

    const order = { id: 1, items: ["laptop"], total: 999.99 };
    console.log("Processed Order:", processOrder(order));
});

document.getElementById('loggerBtn').addEventListener('click', () => {
    const isDevelopment = true;
    const logger = isDevelopment ? 
        function(message) { console.log(`[DEV] ${message}`); } :
        function(message) { /* No operation */ };

    logger("Application started");  // [DEV] Application started
});

document.getElementById('mathUtilsBtn').addEventListener('click', () => {
    const mathUtils = {
        square: function(x) {
            return x * x;
        },
        cube: function(x) {
            return x * x * x;
        },
        power: function(base, exponent) {
            return Math.pow(base, exponent);
        }
    };

    console.log("Square of 4 =", mathUtils.square(4));  // 16
    console.log("Cube of 3 =", mathUtils.cube(3));      // 27
    console.log("2^8 =", mathUtils.power(2, 8));       // 256
});
