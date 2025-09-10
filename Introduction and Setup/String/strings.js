// ------------------ Basic String Creation ------------------
document.getElementById('basicBtn').addEventListener('click', () => {
    console.log("=== Basic String Creation ===");

    const singleQuotes = 'Hello World';
    const doubleQuotes = "Hello World";
    const backticks = `Hello World`;

    console.log("Single quotes:", singleQuotes);
    console.log("Double quotes:", doubleQuotes);
    console.log("Backticks:", backticks);

    console.log("Type of string:", typeof singleQuotes);
});

// ------------------ Concatenation & Template Literals ------------------
document.getElementById('concatBtn').addEventListener('click', () => {
    console.log("=== Concatenation & Template Literals ===");

    const firstName = "John";
    const lastName = "Doe";

    const fullName = firstName + " " + lastName;
    const greeting = `Hello, ${firstName} ${lastName}!`;
    const multiLine = `
    This is a
    multi-line
    string
    `;

    console.log("Full Name (concatenation):", fullName);
    console.log("Greeting (template literal):", greeting);
    console.log("Multi-line string:", multiLine);
});

// ------------------ String Methods ------------------
document.getElementById('methodsBtn').addEventListener('click', () => {
    console.log("=== String Methods ===");

    const text = "JavaScript is awesome";

    console.log("Length:", text.length);
    console.log("UpperCase:", text.toUpperCase());
    console.log("LowerCase:", text.toLowerCase());
    console.log("Slice(0,10):", text.slice(0,10));
    console.log("Includes 'Script':", text.includes("Script"));
    console.log("Replace 'awesome' with 'great':", text.replace("awesome", "great"));

    const userInput = '   hello World   ';
    const cleanInput = userInput.trim().toLowerCase();
    console.log("Cleaned input:", cleanInput);
});

// ------------------ Substring & Validation ------------------
document.getElementById('checkBtn').addEventListener('click', () => {
    console.log("=== Substring & Validation ===");

    const sentence = "JavaScript is powerful";
    console.log("Includes 'power':", sentence.includes('power'));
    console.log("Starts with 'Java':", sentence.startsWith('Java'));
    console.log("Ends with 'ful':", sentence.endsWith('ful'));
});

// ------------------ Split & Join ------------------
document.getElementById('splitJoinBtn').addEventListener('click', () => {
    console.log("=== Split & Join ===");

    const tags = "javascript,es6,nodejs";
    const tagArray = tags.split(',');
    console.log("Array from split:", tagArray);

    const newTags = tagArray.join(' | ');
    console.log("Joined string:", newTags);
});

// ------------------ Multiline Strings ------------------
document.getElementById('multiLineBtn').addEventListener('click', () => {
    console.log("=== Multiline Strings ===");

    const multilineText = `
Line 1
Line 2
Line 3
`;
    console.log(multilineText);
});

// ------------------ Tagged Template Literals ------------------
document.getElementById('taggedBtn').addEventListener('click', () => {
    console.log("=== Tagged Template Literals ===");

    function highlight(strings, ...values) {
        return strings.reduce((result, str, i) => {
            return `${result}${str}<b>${values[i] || ''}</b>`;
        }, '');
    }

    const name = 'Debasish';
    const role = 'Developer';

    const result = highlight`Name: ${name}, Role: ${role}`;
    console.log(result);
});
