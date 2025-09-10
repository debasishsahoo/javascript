const outputDiv = document.getElementById('output');

// 1. withLogging HOF
function withLogging(fn, functionName) {
    return function(...args) {
        console.log(`Calling ${functionName} with arguments:`, args);
        const result = fn(...args);
        console.log(`${functionName} returned:`, result);
        return result;
    };
}

const add = (a, b) => a + b;
const loggedAdd = withLogging(add, 'add');

document.getElementById('loggedAddBtn').addEventListener('click', () => {
    const result = loggedAdd(5, 3);
    outputDiv.textContent = `Logged Add Result: ${result}`;
});

// 2. createMultiplier HOF
function createMultiplier(multiplier) {
    return function(number) {
        return number * multiplier;
    };
}

const double = createMultiplier(2);
const triple = createMultiplier(3);
const quadruple = createMultiplier(4);

document.getElementById('doubleTripleQuadrupleBtn').addEventListener('click', () => {
    const output = [
        `Double 5: ${double(5)}`,
        `Triple 5: ${triple(5)}`,
        `Quadruple 5: ${quadruple(5)}`
    ].join('\n');
    outputDiv.textContent = output;
});

// 3. createValidator HOF
function createValidator(rules) {
    return function(data) {
        const errors = [];
        for (const field in rules) {
            const value = data[field];
            const rule = rules[field];
            
            if (rule.required && (value === undefined || value === '')) {
                errors.push(`${field} is required`);
            }
            if (rule.minLength && value && value.length < rule.minLength) {
                errors.push(`${field} must be at least ${rule.minLength} characters`);
            }
            if (rule.pattern && value && !rule.pattern.test(value)) {
                errors.push(`${field} format is invalid`);
            }
        }
        return {
            isValid: errors.length === 0,
            errors: errors
        };
    };
}

const validateUser = createValidator({
    name: { required: true, minLength: 2 },
    email: { required: true, pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/ },
    age: { required: true }
});

document.getElementById('validateUserBtn').addEventListener('click', () => {
    const validUser = validateUser({ name: 'John', email: 'john@example.com', age: 25 });
    const invalidUser = validateUser({ name: 'J', email: 'invalid-email' });

    const output = [
        `Valid User: ${JSON.stringify(validUser)}`,
        `Invalid User: ${JSON.stringify(invalidUser)}`
    ].join('\n');

    outputDiv.textContent = output;
});

// 4. Functional composition
function compose(...functions) {
    return function(value) {
        return functions.reduceRight((acc, fn) => fn(acc), value);
    };
}

const addTax = price => price * 1.08;
const addShipping = price => price + 9.99;
const formatCurrency = price => `$${price.toFixed(2)}`;

const calculateTotal = compose(formatCurrency, addShipping, addTax);

document.getElementById('calculateTotalBtn').addEventListener('click', () => {
    const total = calculateTotal(100);
    outputDiv.textContent = `Total Price: ${total}`;
});

// 5. Partial application
function partial(fn, ...presetArgs) {
    return function(...remainingArgs) {
        return fn(...presetArgs, ...remainingArgs);
    };
}

const greetWith = (greeting, punctuation, name) => 
    `${greeting}, ${name}${punctuation}`;

const sayHello = partial(greetWith, "Hello", "!");
const askQuestion = partial(greetWith, "Hello", "?");

document.getElementById('greetPartialBtn').addEventListener('click', () => {
    const output = [
        sayHello("Alice"),
        askQuestion("Bob")
    ].join('\n');
    outputDiv.textContent = output;
});

// 6. Memoization
function memoize(fn) {
    const cache = new Map();
    return function(...args) {
        const key = JSON.stringify(args);
        if (cache.has(key)) {
            return cache.get(key);
        }
        const result = fn(...args);
        cache.set(key, result);
        return result;
    };
}

const slowFibonacci = n => {
    if (n <= 1) return n;
    return slowFibonacci(n - 1) + slowFibonacci(n - 2);
};

const fastFibonacci = memoize(slowFibonacci);

document.getElementById('fibonacciMemoBtn').addEventListener('click', () => {
    const firstCall = fastFibonacci(10);   // Computed
    const secondCall = fastFibonacci(10);  // Cached

    outputDiv.textContent = `Fibonacci(10):\nFirst call: ${firstCall}\nSecond call: ${secondCall}`;
});
