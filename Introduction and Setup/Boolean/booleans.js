// ------------------ Basic Boolean Values ------------------
document.getElementById('basicBtn').addEventListener('click', () => {
    console.log("=== Basic Boolean Values ===");

    const isActive = true;
    const isComplete = false;

    console.log("isActive:", isActive);
    console.log("isComplete:", isComplete);
    console.log("Type of isActive:", typeof isActive);
    console.log("Type of isComplete:", typeof isComplete);
});

// ------------------ Boolean Conversion ------------------
document.getElementById('conversionBtn').addEventListener('click', () => {
    console.log("=== Boolean Conversion ===");

    console.log("Boolean(1):", Boolean(1));
    console.log("Boolean(0):", Boolean(0));
    console.log("Boolean('hello'):", Boolean('hello'));
    console.log("Boolean(''):", Boolean(''));
    console.log("Boolean([]):", Boolean([]));
    console.log("Boolean({}):", Boolean({}));
    console.log("Boolean(null):", Boolean(null));
    console.log("Boolean(undefined):", Boolean(undefined));
});

// ------------------ Logical Operators ------------------
document.getElementById('logicalBtn').addEventListener('click', () => {
    console.log("=== Logical Operators ===");

    const a = true;
    const b = false;

    console.log("a && b:", a && b);
    console.log("a || b:", a || b);
    console.log("!a:", !a);
});

// ------------------ Conditional Statements ------------------
document.getElementById('conditionalBtn').addEventListener('click', () => {
    console.log("=== Conditional Statements ===");

    const isLoggedIn = true;

    if (isLoggedIn) {
        console.log("Welcome back, user!");
    } else {
        console.log("Please log in.");
    }
});

// ------------------ Ternary Operator ------------------
document.getElementById('ternaryBtn').addEventListener('click', () => {
    console.log("=== Ternary Operator ===");

    const age = 18;
    const canVote = (age >= 18) ? true : false;
    console.log("Can vote:", canVote);
});

// ------------------ Form Validation Example ------------------
document.getElementById('formBtn').addEventListener('click', () => {
    console.log("=== Form Validation Example ===");

    const username = 'Debasish';
    const password = '';

    const isFormValid = Boolean(username) && Boolean(password);
    console.log("Is form valid:", isFormValid);
});

// ------------------ Boolean Negation ------------------
document.getElementById('negationBtn').addEventListener('click', () => {
    console.log("=== Boolean Negation ===");

    let isActive = false;
    console.log("Initial isActive:", isActive);

    console.log("Negation:", !isActive);
    isActive = !isActive;
    console.log("Toggled isActive:", isActive);
});
