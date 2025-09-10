document.getElementById('greetBtn').addEventListener('click', () => {
    function greet(name) {
        return `Hello, ${name}!`;
    }

    console.log(greet("Alice")); // "Hello, Alice!"
});

document.getElementById('calculateAreaBtn').addEventListener('click', () => {
    function calculateArea(length, width) {
        return length * width;
    }

    console.log("Area of 5 x 3:", calculateArea(5, 3)); // 15
});

document.getElementById('createUserDefaultBtn').addEventListener('click', () => {
    function createUser(name, age = 18, role = "user") {
        return {
            name: name,
            age: age,
            role: role,
            createdAt: new Date()
        };
    }

    console.log(createUser("Bob"));
});

document.getElementById('createUserCustomBtn').addEventListener('click', () => {
    function createUser(name, age = 18, role = "user") {
        return {
            name: name,
            age: age,
            role: role,
            createdAt: new Date()
        };
    }

    console.log(createUser("Alice", 25, "admin"));
});

document.getElementById('sumBtn').addEventListener('click', () => {
    function sum(...numbers) {
        return numbers.reduce((total, num) => total + num, 0);
    }

    console.log("Sum of [1,2,3,4,5]:", sum(1, 2, 3, 4, 5));
    console.log("Sum of [10, 20]:", sum(10, 20));
});

document.getElementById('displayUserBtn').addEventListener('click', () => {
    function displayUser({name, age, email}) {
        console.log(`Name: ${name}, Age: ${age}, Email: ${email}`);
    }

    displayUser({name: "John", age: 30, email: "john@example.com"});
});

document.getElementById('hoistingBtn').addEventListener('click', () => {
    console.log(hoistedFunction()); // "I'm hoisted!"

    function hoistedFunction() {
        return "I'm hoisted!";
    }
});

document.getElementById('divideBtn').addEventListener('click', () => {
    function divide(a, b) {
        if (typeof a !== 'number' || typeof b !== 'number') {
            throw new TypeError('Both arguments must be numbers');
        }
        if (b === 0) {
            throw new Error('Division by zero is not allowed');
        }
        return a / b;
    }

    try {
        console.log("10 divided by 2 =", divide(10, 2)); // 5
    } catch (error) {
        console.error(error.message);
    }
});

document.getElementById('divideByZeroBtn').addEventListener('click', () => {
    function divide(a, b) {
        if (typeof a !== 'number' || typeof b !== 'number') {
            throw new TypeError('Both arguments must be numbers');
        }
        if (b === 0) {
            throw new Error('Division by zero is not allowed');
        }
        return a / b;
    }

    try {
        console.log("10 divided by 0 =", divide(10, 0));
    } catch (error) {
        console.error(error.message);
    }
});
