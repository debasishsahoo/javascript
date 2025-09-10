// ------------------ VAR EXAMPLES ------------------
document.getElementById('varBtn').addEventListener('click', () => {
    console.log("=== VAR Examples ===");

    var name = "John";
    var age = 25;
    var age = 30; // Redeclaration allowed

    console.log("name:", name); // John
    console.log("age:", age);   // 30

    // Hoisting
    console.log("hoistedVar before declaration:", hoistedVar); // undefined
    var hoistedVar = "I'm hoisted";
    console.log("hoistedVar after declaration:", hoistedVar);

    // Function scope
    function example() {
        if (true) {
            var functionScoped = "I'm accessible outside this block";
        }
        console.log("functionScoped:", functionScoped);
    }
    example();
});

// ------------------ LET EXAMPLES ------------------
document.getElementById('letBtn').addEventListener('click', () => {
    console.log("=== LET Examples ===");

    let firstName = "Alice";
    let lastName = "Smith";

    console.log("firstName:", firstName);
    console.log("lastName:", lastName);

    // Block scope
    function blockScopeExample() {
        if (true) {
            let blockScoped = "I'm only accessible in this block";
            console.log("Inside block:", blockScoped);
        }
        // console.log("Outside block:", blockScoped); // ReferenceError
    }
    blockScopeExample();

    // Temporal Dead Zone
    try {
        // console.log(notYetDeclared); // Uncomment to see ReferenceError
        let notYetDeclared = "Now I exist";
        console.log("Declared:", notYetDeclared);
    } catch (e) {
        console.error(e);
    }
});

// ------------------ CONST EXAMPLES ------------------
document.getElementById('constBtn').addEventListener('click', () => {
    console.log("=== CONST Examples ===");

    const PI = 3.14159;
    const API_URL = "https://api.example.com";

    console.log("PI:", PI);
    console.log("API_URL:", API_URL);

    // Block scope
    if (true) {
        const blockConst = "I'm block-scoped too";
        console.log("Inside block:", blockConst);
    }
    // console.log("Outside block:", blockConst); // ReferenceError
});

// ------------------ LOOP SCOPE EXAMPLES ------------------
document.getElementById('loopBtn').addEventListener('click', () => {
    console.log("=== Loop Scope with let ===");
    for (let i = 0; i < 3; i++) {
        setTimeout(() => console.log("let i:", i), 100);
    }

    console.log("=== Loop Scope with var ===");
    for (var j = 0; j < 3; j++) {
        setTimeout(() => console.log("var j:", j), 100);
    }
});

// ------------------ OBJECT/ARRAY MUTATION ------------------
document.getElementById('objectBtn').addEventListener('click', () => {
    console.log("=== Object and Array Mutation with const ===");

    const person = {name: "John", age: 30};
    person.age = 31;          // Allowed
    person.city = "New York"; // Allowed
    console.log("Person object:", person);

    const numbers = [1, 2, 3];
    numbers.push(4);   // Allowed
    numbers[0] = 10;   // Allowed
    console.log("Numbers array:", numbers);

    // Reassignment not allowed
    try {
        // person = {}; // Uncomment to see TypeError
        // numbers = []; // Uncomment to see TypeError
    } catch (e) {
        console.error(e);
    }
});
