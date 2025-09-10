// Basic Object Example
document.getElementById('basicObjBtn').addEventListener('click', () => {
    console.log("=== Basic Object ===");

    const person = {
        name: "Alice",
        age: 30,
        city: "New York",
        isEmployed: true
    };

    console.log("Person Name (dot):", person.name);
    console.log("Person Age (bracket):", person["age"]);

    person.email = "alice@example.com";
    person.age = 31;

    console.log("Updated Person:", person);
});

// Nested Object Example
document.getElementById('nestedObjBtn').addEventListener('click', () => {
    console.log("=== Nested Object ===");

    const user = {
        profile: {
            name: "Bob",
            preferences: {
                theme: "dark",
                language: "en"
            }
        }
    };

    console.log("User Theme:", user.profile.preferences.theme);
});

// Object Methods Example
document.getElementById('methodsObjBtn').addEventListener('click', () => {
    console.log("=== Object Methods ===");

    const calculator = {
        add: function(a, b) {
            return a + b;
        },
        multiply(a, b) {
            return a * b;
        }
    };

    console.log("Add 5 + 3:", calculator.add(5, 3));
    console.log("Multiply 5 * 3:", calculator.multiply(5, 3));
});

// Dynamic Property Names Example
document.getElementById('dynamicPropsBtn').addEventListener('click', () => {
    console.log("=== Dynamic Property Names ===");

    const propName = 'email';
    const user = {
        name: 'Debasish',
        [propName]: 'debasish@example.com'
    };

    console.log("Dynamic property:", user.email);
});

// Object Destructuring Example
document.getElementById('destructuringBtn').addEventListener('click', () => {
    console.log("=== Object Destructuring ===");

    const user = {
        name: 'Debasish',
        age: 25,
        email: 'debasish@example.com'
    };

    const { name, age } = user;
    console.log("Name:", name);
    console.log("Age:", age);
});

// Merging Objects Example
document.getElementById('mergeObjBtn').addEventListener('click', () => {
    console.log("=== Merging Objects ===");

    const defaults = { theme: 'light', language: 'en' };
    const userSettings = { language: 'fr' };

    const settings = { ...defaults, ...userSettings };

    console.log(settings);
});

// Iterating Object Properties Example
document.getElementById('iterateObjBtn').addEventListener('click', () => {
    console.log("=== Iterate Object Properties ===");

    const user = {
        name: 'Debasish',
        age: 25,
        email: 'debasish@example.com'
    };

    for (const key in user) {
        console.log(`${key}: ${user[key]}`);
    }

    // Alternative
    console.log("Using Object.keys():");
    Object.keys(user).forEach(key => {
        console.log(`${key}: ${user[key]}`);
    });
});
