document.getElementById('arithmeticBtn').addEventListener('click', () => {
    console.log("=== Arithmetic Operators ===");

    let a = 10;
    let b = 3;

    console.log("Addition (a + b):", a + b);
    console.log("Subtraction (a - b):", a - b);
    console.log("Multiplication (a * b):", a * b);
    console.log("Division (a / b):", a / b);
    console.log("Modulus (a % b):", a % b);
    console.log("Exponentiation (a ** b):", a ** b);

    console.log("5 / 0 =", 5 / 0);
    console.log("0 / 0 =", 0 / 0);
    console.log("Even check (a % 2 === 0):", a % 2 === 0);
});

document.getElementById('comparisonBtn').addEventListener('click', () => {
    console.log("=== Comparison Operators ===");

    let x = 5;
    let y = "5";

    console.log("x == y:", x == y);
    console.log("x != y:", x != y);
    console.log("x === y:", x === y);
    console.log("x !== y:", x !== y);
    console.log("x > 3:", x > 3);
    console.log("x < 10:", x < 10);
    console.log("x >= 5:", x >= 5);
    console.log("x <= 4:", x <= 4);
});

document.getElementById('logicalBtn').addEventListener('click', () => {
    console.log("=== Logical Operators ===");

    let isLoggedIn = true;
    let hasPermission = false;
    let age = 25;

    console.log("AND (&&):", isLoggedIn && hasPermission);
    console.log("OR (||):", isLoggedIn || hasPermission);
    console.log("NOT (!):", !isLoggedIn);
    console.log("Double Negation (!!):", !!age);

    let user = null;
    console.log("Short-circuit (user && user.name):", user && user.name);
    let defaultName = user || "Guest";
    console.log("Default name (user || 'Guest'):", defaultName);
});

document.getElementById('conditionalBtn').addEventListener('click', () => {
    console.log("=== If / Else Example ===");

    let temperature = 75;

    if (temperature > 80) {
        console.log("It's hot!");
    } else if (temperature > 60) {
        console.log("Nice weather!");
    } else {
        console.log("It's cold!");
    }

    if (0) console.log("Falsy value block won't run");
    if ("hello") console.log("Truthy string block runs");
    if ([]) console.log("Truthy empty array block runs");
});

document.getElementById('switchBtn').addEventListener('click', () => {
    console.log("=== Switch Statement Example ===");

    let day = "Monday";

    switch (day) {
        case "Monday":
            console.log("Start of work week");
            break;
        case "Tuesday":
        case "Wednesday":
        case "Thursday":
            console.log("Midweek");
            break;
        case "Friday":
            console.log("TGIF!");
            break;
        case "Saturday":
        case "Sunday":
            console.log("Weekend!");
            break;
        default:
            console.log("Invalid day");
    }
});

document.getElementById('ternaryBtn').addEventListener('click', () => {
    console.log("=== Ternary Operator Example ===");

    let age = 20;
    let status = age >= 18 ? "adult" : "minor";
    console.log("Status based on age:", status);

    let grade = 85;
    let letterGrade = grade >= 90 ? "A" :
                      grade >= 80 ? "B" :
                      grade >= 70 ? "C" :
                      grade >= 60 ? "D" : "F";
    console.log("Letter grade:", letterGrade);
});

document.getElementById('operatorPrecedenceBtn').addEventListener('click', () => {
    console.log("=== Operator Precedence Example ===");

    let result = 2 + 3 * 4;
    let result2 = (2 + 3) * 4;

    console.log("2 + 3 * 4 =", result);
    console.log("(2 + 3) * 4 =", result2);
});

document.getElementById('practicalExamplesBtn').addEventListener('click', () => {
    console.log("=== Practical Example Functions ===");

    function canVote(age) {
        return age >= 18 ? "Can vote" : "Cannot vote";
    }

    console.log("Age 20:", canVote(20));
    console.log("Age 16:", canVote(16));

    function calculateGrade(score) {
        if (score >= 90) return "A";
        if (score >= 80) return "B";
        if (score >= 70) return "C";
        if (score >= 60) return "D";
        return "F";
    }

    console.log("Score 85:", calculateGrade(85));
    console.log("Score 55:", calculateGrade(55));

    function isValidEmail(email) {
        return email && email.includes("@") && email.length > 5;
    }

    console.log("Valid Email:", isValidEmail("test@example.com"));
    console.log("Invalid Email:", isValidEmail("invalid"));
});

document.getElementById('commonPitfallsBtn').addEventListener('click', () => {
    console.log("=== Common Pitfalls Example ===");

    let x = 5;

    console.log("Assignment inside condition (wrong):");
    if (x = 10) {
        console.log("This always runs because of assignment!");
    }

    x = 5;
    console.log("Proper comparison (strict equality):");
    if (x === 10) {
        console.log("x === 10");
    } else {
        console.log("x !== 10");
    }

    console.log('"5" + 3 =', "5" + 3);   // "53"
    console.log('"5" - 3 =', "5" - 3);   // 2
    console.log('true + 1 =', true + 1); // 2
});
