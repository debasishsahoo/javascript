// Pure function examples
function add(a, b) {
    return a + b; // Always returns same result for same inputs
}

function multiply(x, y) {
    return x * y; // No side effects, deterministic
}

function calculateTax(price, taxRate) {
    return price * taxRate; // Pure calculation
}

console.log(add(5, 3));           // Always 8
console.log(multiply(4, 6));      // Always 24
console.log(calculateTax(100, 0.08)); // Always 8

// Pure vs Impure functions
let globalCounter = 0;

// IMPURE: Modifies global state
function impureIncrement() {
    globalCounter++;
    return globalCounter;
}

// PURE: No side effects
function pureIncrement(counter) {
    return counter + 1;
}

console.log(impureIncrement()); // 1 (but changes global state)
console.log(impureIncrement()); // 2 (result depends on global state)

console.log(pureIncrement(5)); // 6 (always the same for input 5)
console.log(pureIncrement(5)); // 6 (predictable)

// Pure array operations
const numbers = [1, 2, 3, 4, 5];

// IMPURE: Modifies original array
function impureDoubleArray(arr) {
    for (let i = 0; i < arr.length; i++) {
        arr[i] = arr[i] * 2;
    }
    return arr;
}

// PURE: Returns new array
function pureDoubleArray(arr) {
    return arr.map(x => x * 2);
}

console.log(pureDoubleArray(numbers)); // [2, 4, 6, 8, 10]
console.log(numbers); // [1, 2, 3, 4, 5] (unchanged)

// Pure object operations
function pureUpdateUser(user, newData) {
    return {
        ...user,
        ...newData,
        updatedAt: new Date() // This makes it technically impure due to Date
    };
}

// Truly pure version
function pureUpdateUserWithTimestamp(user, newData, timestamp) {
    return {
        ...user,
        ...newData,
        updatedAt: timestamp
    };
}

const user = {name: "John", age: 30};
const updatedUser = pureUpdateUserWithTimestamp(user, {age: 31}, new Date());
console.log(user);        // Original unchanged
console.log(updatedUser); // New object with updates

// Pure string operations
function pureCapitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

function pureRemoveSpaces(str) {
    return str.replace(/\s+/g, '');
}

function pureReverse(str) {
    return str.split('').reverse().join('');
}

// Composing pure functions
function pureProcessString(str) {
    return pureReverse(pureRemoveSpaces(pureCapitalize(str)));
}

console.log(pureProcessString("  hello world  ")); // "dlrowolleH"

// Pure mathematical functions
function purePower(base, exponent) {
    if (exponent === 0) return 1;
    if (exponent === 1) return base;
    
    let result = 1;
    for (let i = 0; i < exponent; i++) {
        result *= base;
    }
    return result;
}

function pureFactorial(n) {
    if (n <= 1) return 1;
    
    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i;
    }
    return result;
}

function pureGCD(a, b) {
    while (b !== 0) {
        const temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}

// Pure data transformation functions
function pureFilterAdults(people) {
    return people.filter(person => person.age >= 18);
}

function pureSortByAge(people) {
    return [...people].sort((a, b) => a.age - b.age);
}

function pureGroupByAge(people) {
    return people.reduce((groups, person) => {
        const ageGroup = person.age < 18 ? 'minor' : 
                        person.age < 65 ? 'adult' : 'senior';
        
        if (!groups[ageGroup]) {
            groups[ageGroup] = [];
        }
        
        groups[ageGroup].push(person);
        return groups;
    }, {});
}

const people = [
    {name: "Alice", age: 25},
    {name: "Bob", age: 17},
    {name: "Charlie", age: 70},
    {name: "Diana", age: 30}
];

console.log(pureFilterAdults(people));
console.log(pureSortByAge(people));
console.log(pureGroupByAge(people));

// Pure validation functions
function pureValidateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function pureValidatePassword(password) {
    return {
        isValid: password.length >= 8 && 
                /[A-Z]/.test(password) && 
                /[a-z]/.test(password) && 
                /\d/.test(password),
        minLength: password.length >= 8,
        hasUppercase: /[A-Z]/.test(password),
        hasLowercase: /[a-z]/.test(password),
        hasNumber: /\d/.test(password)
    };
}

function pureValidateUser(userData) {
    const errors = [];
    
    if (!userData.name || userData.name.trim().length < 2) {
        errors.push("Name must be at least 2 characters");
    }
    
    if (!pureValidateEmail(userData.email)) {
        errors.push("Invalid email format");
    }
    
    const passwordValidation = pureValidatePassword(userData.password);
    if (!passwordValidation.isValid) {
        errors.push("Password must be at least 8 characters with uppercase, lowercase, and number");
    }
    
    return {
        isValid: errors.length === 0,
        errors: errors
    };
}

// Pure calculation functions
function pureCalculateDiscount(price, discountPercent) {
    return price * (discountPercent / 100);
}

function pureCalculateTotal(items) {
    return items.reduce((total, item) => {
        const subtotal = item.price * item.quantity;
        const discount = pureCalculateDiscount(subtotal, item.discountPercent || 0);
        return total + subtotal - discount;
    }, 0);
}

function pureCalculateShipping(total, shippingRules) {
    for (const rule of shippingRules) {
        if (total >= rule.minOrder) {
            return rule.cost;
        }
    }
    return shippingRules[shippingRules.length - 1].cost;
}

const cartItems = [
    {name: "Laptop", price: 999, quantity: 1, discountPercent: 10},
    {name: "Mouse", price: 25, quantity: 2, discountPercent: 0}
];

const shippingRules = [
    {minOrder: 100, cost: 0},
    {minOrder: 50, cost: 5.99},
    {minOrder: 0, cost: 9.99}
];

const total = pureCalculateTotal(cartItems);
const shipping = pureCalculateShipping(total, shippingRules);

console.log(`Total: ${total.toFixed(2)}`);
console.log(`Shipping: ${shipping.toFixed(2)}`);
console.log(`Final: ${(total + shipping).toFixed(2)}`);