// ------------------ Uninitialized Variable ------------------
document.getElementById('variableBtn').addEventListener('click', () => {
    console.log("=== Uninitialized Variable ===");

    let uninitialized;
    console.log("uninitialized:", uninitialized);
    console.log("Type:", typeof uninitialized);
});

// ------------------ Function Without Return ------------------
document.getElementById('functionBtn').addEventListener('click', () => {
    console.log("=== Function Without Return ===");

    function greet() {
        console.log("Hello");
    }

    const result = greet();
    console.log("Result of greet():", result);
});

// ------------------ Non-Existent Object Property ------------------
document.getElementById('objectBtn').addEventListener('click', () => {
    console.log("=== Non-Existent Object Property ===");

    const obj = { name: "John" };
    console.log("obj.age:", obj.age);
});

// ------------------ Function Parameter Not Provided ------------------
document.getElementById('paramBtn').addEventListener('click', () => {
    console.log("=== Function Parameter Not Provided ===");

    function multiply(a, b) {
        return a * b;
    }

    console.log("multiply(5):", multiply(5)); // NaN
});

// ------------------ Checking for Undefined ------------------
document.getElementById('checkBtn').addEventListener('click', () => {
    console.log("=== Checking for Undefined ===");

    let value;
    if (value === undefined) {
        console.log("Value is not set");
    }
});

// ------------------ Default Parameter Values ------------------
document.getElementById('defaultBtn').addEventListener('click', () => {
    console.log("=== Default Parameter Values ===");

    function greet(name = 'Guest') {
        console.log(`Hello, ${name}`);
    }

    greet();             // Hello, Guest
    greet('Debasish');   // Hello, Debasish
});
