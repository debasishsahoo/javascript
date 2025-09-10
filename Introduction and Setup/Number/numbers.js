// ------------------ Basic Number Operations ------------------
document.getElementById('basicBtn').addEventListener('click', () => {
    console.log("=== Basic Number Operations ===");

    const age = 25;
    const price = 19.99;
    const negative = -42;

    console.log("age:", age);
    console.log("price:", price);
    console.log("negative:", negative);

    console.log("10 + 5 =", 10 + 5);
    console.log("10 - 5 =", 10 - 5);
    console.log("10 * 5 =", 10 * 5);
    console.log("10 / 5 =", 10 / 5);
    console.log("10 % 3 =", 10 % 3);
    console.log("2 ** 3 =", 2 ** 3);

    console.log("typeof 42:", typeof 42);
    console.log("typeof 3.14:", typeof 3.14);
    console.log("typeof NaN:", typeof NaN);
    console.log("Number.isNaN(NaN):", Number.isNaN(NaN));
});

// ------------------ Parsing Numbers from Strings ------------------
document.getElementById('parseBtn').addEventListener('click', () => {
    console.log("=== Parsing Numbers ===");

    const input1 = '250';
    const quantity = Number(input1);
    console.log("Converted quantity:", quantity, typeof quantity);

    const input2 = 'hello';
    const value = Number(input2);
    console.log("Converted value:", value);
    console.log("isNaN(value):", isNaN(value));
    console.log("Number.isNaN(value):", Number.isNaN(value));
});

// ------------------ Infinity & NaN ------------------
document.getElementById('specialBtn').addEventListener('click', () => {
    console.log("=== Infinity & NaN Examples ===");

    console.log("1 / 0 =", 1 / 0);
    console.log("-1 / 0 =", -1 / 0);
    console.log("'abc' / 2 =", 'abc' / 2);
});

// ------------------ Number Constants ------------------
document.getElementById('constantsBtn').addEventListener('click', () => {
    console.log("=== Number Constants ===");

    console.log("Number.MAX_SAFE_INTEGER:", Number.MAX_SAFE_INTEGER);
    console.log("Number.MIN_SAFE_INTEGER:", Number.MIN_SAFE_INTEGER);
    console.log("Number.EPSILON:", Number.EPSILON);
});

// ------------------ Fixed Decimal Formatting ------------------
document.getElementById('formatBtn').addEventListener('click', () => {
    console.log("=== Fixed Decimal Formatting ===");

    const price = 123.45678;
    console.log("Original price:", price);
    console.log("Price with 2 decimals:", price.toFixed(2));
});

// ------------------ Shopping Cart Total Example ------------------
document.getElementById('cartBtn').addEventListener('click', () => {
    console.log("=== Shopping Cart Total ===");

    const items = [
        { name: 'Laptop', price: '999.99' },
        { name: 'Mouse', price: '25.50' }
    ];

    let totalPrice = items.reduce((total, item) => total + Number(item.price), 0);
    console.log("Total Price:", totalPrice.toFixed(2));
});
