// Function with debugger statement
function calculateTotal(price, tax) {
    debugger;  // Pause here if DevTools is open
    const total = price + (price * tax);
    return total;
}

// Conditional logging based on user data
function processUser(user) {
    if (!user.name) {
        console.error("❌ User missing name:", user);
    } else {
        console.log("✅ Processing user:", user.name);
    }
}

// Inspect variables using console.log and console.dir
let myVariable = {
    name: "Test Object",
    value: 42,
    details: {
        description: "An object for demonstration",
        active: true
    }
};

document.getElementById('calculateBtn').addEventListener('click', () => {
    const result = calculateTotal(100, 0.15);
    console.log(`💰 Total Price with Tax: $${result}`);
});

document.getElementById('processUserBtn').addEventListener('click', () => {
    const user1 = { name: "Alice" };
    const user2 = { age: 30 };  // Missing name

    processUser(user1);
    processUser(user2);
});

document.getElementById('inspectVariableBtn').addEventListener('click', () => {
    console.log("🔍 Inspecting myVariable:");
    console.log(myVariable);
    console.dir(myVariable);
});
